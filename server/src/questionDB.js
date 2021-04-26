module.exports = (mongoose) => {
    const answerSchema = new mongoose.Schema({
        answer: String,
        username: String,
        upvotes: Number
    }); 
    const questionSchema = new mongoose.Schema({
        title: String,
        username: String,
        description: String,
        // date: { type: Date, default: Date.now},
        answers: [answerSchema]
    });

    const Question = mongoose.model('Question', questionSchema);

    async function createQuestion(title, description) {

        // add a new Question
        const newQuestion = new Question({
            title: title,
            description: description
        });

        // Save the new question to the database
        try {
            let savedQuestion = await newQuestion.save();
            console.log("The questions are now saved.", savedQuestion);
        } catch(error) {
            console.error("savedQuestions:", error.message);
        }
    }

    // Searching for documents
    async function getQuestions() {
        try {
            return await Question.find();
        } catch (error) {
            console.error("getQuestion:", error.message);
            return {};
        }
    }

    async function getQuestion(id) {
        try {
            return await Question.findById(id);
        } catch (error) {
            console.error("getQuestion:", error.message);
            return {};
        }
    }

    // async function createQuestion(text) {
    //     let question = new questionModel({name: text});
    //     return question.save();
    // }

    async function bootstrap(count = 10) {
        let l = (await getQuestions()).length;
        console.log("Question collection size:", l);
        
        if (l === 0) {
            let promises = [];
            for (let i = 0; i < count; i++) {
                let newQuestion = new Question({
                    title: `Question number ${i}`, 
                    escription: `desc test`, 
                    answers: [{
                        answer: `This is an answer`,
                        username: `Username`,
                        upvotes: 0
                    }] 
                });
                promises.push(newQuestion.save());
            }
            return Promise.all(promises);
        }
    }

    async function createAnswer(id, answer) {

        const newAnswer = {
            upvotes: 0,
            answer: answer
        };

        // Update answer from id
        await Question.findByIdAndUpdate(
            { _id: id },
            { $push: { answers: newAnswer} }
        );
        return newAnswer;
    }

    async function vote(answerId, vote) {
        let votes = -1;
        if(vote == "up") {
            votes = 1;
        };

        await Question.updateOne(
            {'answers._id': answerId},
            {'$inc': { 'answers.$.upvotes' : votes}}
        );
    }

    

    return {
        createQuestion,
        getQuestions,
        getQuestion,
        bootstrap,
        createAnswer,
        vote
    }
}