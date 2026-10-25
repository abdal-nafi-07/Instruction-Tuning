export const simulatorResponses = [
  {
    keywords: ['artificial intelligence', 'ai'],
    topic: 'Artificial Intelligence',
    response:
      'Artificial Intelligence, or AI, is technology that helps computers do tasks that usually need some kind of human thinking. These tasks include understanding words, finding patterns, learning from examples, solving problems, and making suggestions. AI does not think exactly like a person. It uses instructions, data, and mathematical patterns to produce an answer or take an action. For example, a phone assistant can recognize a spoken question, while a music app can suggest songs based on what you have listened to before. AI is also used in maps, translation tools, customer support, healthcare research, and photo apps. AI can be very useful, but it can also make mistakes, so people should check important information.',
  },
  {
    keywords: ['machine learning', 'ml'],
    topic: 'Machine Learning',
    response:
      'Machine Learning is a part of Artificial Intelligence that helps computers learn patterns from examples. Instead of writing a separate rule for every possible situation, people give a computer many examples and a way to learn from them. The computer uses those examples to make a prediction or suggestion when it sees something new. For example, an email filter can learn the difference between ordinary messages and spam by looking at messages that were marked by users. A shopping or movie app can also learn what someone may like from their earlier choices. Machine Learning is useful, but its results depend on the examples it learns from. If those examples are incomplete or unfair, the system may make poor or unfair decisions.',
  },
  {
    keywords: ['natural language processing', 'nlp'],
    topic: 'Natural Language Processing',
    response:
      'Natural Language Processing, or NLP, is a part of AI that helps computers work with human language. Human language can be tricky because the same word may have different meanings, and people often use slang, short forms, or spelling mistakes. NLP helps a computer look at words and sentences and work out what they may mean. It can be used to translate a message, turn speech into written words, find the feeling in a review, or make a long article shorter. Chatbots and voice assistants also use NLP to understand what a person is asking. NLP is not perfect, especially when a sentence is unclear or depends on local culture, so clear wording can help a computer give a better response.',
  },
  {
    keywords: ['python'],
    topic: 'Python',
    response:
      'Python is a programming language: a way for people to give instructions to computers. Many beginners find Python easier to read than other programming languages because its commands often look close to ordinary written steps. A person can use Python to make a small calculator, organize files, build a website, study information, or automate a repeated task. It is also used in areas such as data science, Artificial Intelligence, scientific research, and software development. Python has many ready-made libraries, which are collections of code that help developers complete common jobs without starting from zero. Python is beginner-friendly, but learning to program still takes practice. Starting with small projects and improving them one step at a time is a good way to learn.',
  },
  {
    keywords: ['instruction tuning', 'instruction'],
    topic: 'Instruction Tuning',
    response:
      'Instruction Tuning is a way of training an AI language model to follow people’s requests more clearly. First, a model learns general patterns from a large amount of text. During instruction tuning, it is then shown many examples of a request together with a useful answer. The requests might ask it to explain an idea, summarize a passage, make a list, or write in a certain style. By comparing its answers with the examples, the model learns what a helpful response can look like. For example, it can learn to use simple words when asked to explain something to a beginner. Instruction tuning can make answers more useful and better organized, but it does not guarantee that every answer is correct.',
  },
  {
    keywords: ['large language model', 'llm', 'language model'],
    topic: 'Large Language Models',
    response:
      'A Large Language Model, usually called an LLM, is an AI program trained with a very large collection of text. During training, it learns patterns in how words and sentences are used. When someone gives it a prompt, it uses those patterns to create a likely next sequence of words and form a response. LLMs can explain topics, summarize documents, translate text, help draft messages, answer questions, and assist with some coding tasks. They can sound confident even when a detail is wrong, because producing natural-sounding text is not the same as checking facts. An LLM is therefore best treated as a helpful tool rather than a perfect source. People should review its work, especially when the result matters.',
  },
  {
    keywords: ['deep learning'],
    topic: 'Deep Learning',
    response:
      'Deep Learning is a kind of Machine Learning that uses a computer system made of many connected layers. These layers are often called a neural network. Each layer can notice different patterns in the information it receives. For example, when looking at a picture, early layers may notice simple edges, while later layers may combine those edges into shapes and objects. Deep Learning is useful for tasks involving complicated information, such as recognizing speech, describing images, translating language, or finding patterns in medical pictures. It often needs a great deal of data and computing power, so it may take more time and resources to build than a simpler system. Its results should still be checked for errors.',
  },
  {
    keywords: ['neural network', 'neural networks'],
    topic: 'Neural Networks',
    response:
      'A Neural Network is a computer system that learns patterns by passing information through connected groups of simple calculations. These groups are arranged in layers. The first layer receives information, middle layers find patterns, and the last layer produces a result, such as a label or prediction. The name is inspired by the connected cells in a brain, but a computer neural network is not a human brain and does not understand things in the same way. Neural networks are used in tools that recognize objects in photos, understand speech, predict values, and work with language. They learn by adjusting their calculations based on examples. Their answers can still be wrong, especially if the examples were limited or unlike the new situation.',
  },
  {
    keywords: ['chatbot', 'chatbots'],
    topic: 'Chatbots',
    response:
      'A chatbot is a computer program that communicates with people through text or speech. Some chatbots follow a set of written rules, while AI chatbots can use language models to respond to a wider range of messages. A chatbot may answer common questions, help someone find information, guide a user through a process, or suggest what to do next. For example, a travel chatbot might explain how to change a booking, while a learning chatbot might explain a difficult idea in simpler words. A chatbot can save time, but it may misunderstand a question or give an incorrect answer. It is helpful to give clear details and check important information rather than assuming every chatbot response is correct.',
  },
  {
    keywords: ['training data', 'dataset'],
    topic: 'Training Data',
    response:
      'Training data is the collection of examples that a computer model studies while it is learning. For a model that sorts pictures, the examples might be pictures labeled with what they show. For an instruction-following language model, examples may pair a request with a helpful answer. The model looks for patterns in these examples and uses what it learned when it receives new information. Good training data should be accurate, relevant, and varied enough to represent different situations and people. If the examples contain mistakes or leave out important groups, the model may repeat those problems in its results. Careful selection, review, and updating of training data can improve a system, although it cannot remove every possible error.',
  },
  {
    keywords: ['fine tuning', 'fine-tuning'],
    topic: 'Fine-Tuning',
    response:
      'Fine-Tuning means taking a model that has already learned general patterns and training it again with a smaller, more focused collection of examples. This is similar to learning the basics of a subject first and then taking extra lessons for a particular job. For example, a general language model might be fine-tuned to respond in the style or format needed by a specific service. Instruction Tuning is one type of fine-tuning. It uses examples of instructions and good responses to help a language model follow requests more effectively. Fine-tuning can make a model more suitable for a task, but it does not automatically give it reliable knowledge or prevent every mistake. The examples and testing still matter.',
  },
  {
    keywords: ['prompt engineering', 'prompt'],
    topic: 'Prompt Engineering',
    response:
      'Prompt Engineering is the practice of writing clear requests for an AI system. A prompt is the message or instruction that tells the system what you want. A useful prompt explains the task, gives any important background, describes who the answer is for, and says what format or length would be helpful. For example, instead of asking “Tell me about plants,” you could ask “Explain how plants make food in simple language for a ten-year-old, using one everyday example.” Clear details reduce guesswork and often lead to a more useful answer. Prompt Engineering changes the request you give to the model; Instruction Tuning changes how the model was trained to respond. Even a well-written prompt cannot guarantee that every fact in the answer is correct.',
  },
  {
    keywords: ['supervised learning'],
    topic: 'Supervised Learning',
    response:
      'Supervised Learning is a way to train a computer model using examples that include both the information going in and the correct answer expected back. For example, a set of house records might include details such as size and location along with the sale price. The model studies many such examples and learns patterns that help it estimate the price of a different house. It is called “supervised” because the examples provide answers that guide learning. This approach is useful for tasks such as sorting messages, recognizing objects, and making predictions. The examples need to be accurate and relevant. If they are incomplete or contain unfair patterns, the model may learn the wrong lesson. Instruction Tuning also commonly uses request-and-answer examples.',
  },
  {
    keywords: ['generative ai', 'generative artificial intelligence'],
    topic: 'Generative AI',
    response:
      'Generative AI is a type of Artificial Intelligence that creates new content in response to a request or example. It can produce text, pictures, music, speech, video, or computer code, depending on the system. It learns patterns from existing examples and uses those patterns to create something new. For instance, a writing assistant may draft an email, while an image tool may create a picture from a written description. Generative AI can help people brainstorm, learn, and complete creative tasks more quickly. However, it may produce incorrect facts, strange images, or content that does not fit the request. People should review the result, use trustworthy sources for important facts, and follow the rules that apply to the content they create.',
  },
  {
    keywords: ['model', 'ai model'],
    topic: 'AI Models',
    response:
      'An AI model is a computer program that has learned patterns from examples and can use those patterns to produce a result. The result could be a prediction, a category, a suggestion, or a piece of generated content. For example, an image model may decide whether a picture contains a cat, while a language model may draft a reply to a question. A model is built for particular kinds of tasks, and different models can work in very different ways. It does not automatically know everything or understand the world like a person. Its performance depends on the data, design, and testing used to build it. Models can be useful helpers, but people should check important results.',
  },
  {
    keywords: ['bias', 'ai bias'],
    topic: 'AI Bias',
    response:
      'AI Bias means that an AI system gives results that are unfair or less accurate for some people or situations than for others. This can happen when the examples used to train the system do not represent everyone, when past unfair decisions appear in the data, or when the system is tested in too few situations. For example, a tool trained mostly on photos taken in one kind of lighting may work less well on photos taken in another. Developers can look for these problems by testing with varied examples, reviewing results with affected communities, and improving the data and system. These steps can reduce some kinds of bias, but they cannot promise perfect fairness. Human review and ongoing checks remain important.',
  },
  {
    keywords: ['hallucination', 'ai hallucination'],
    topic: 'AI Hallucination',
    response:
      'An AI hallucination is an answer that sounds believable but includes information that is wrong, unsupported, or made up. Language models create text by learning patterns in language, and they do not always check each statement against a reliable source. For example, a chatbot might invent the title of a research paper or give the wrong date for an event while sounding confident. A clear prompt can help, but it cannot prevent every hallucination. Check important claims using trusted sources, and be especially careful with medical, legal, financial, and safety-related advice. If an answer includes a source or quotation, confirm that the source exists and really says what the answer claims.',
  },
]

export const comparisonExamples = [
  {
    instruction:
      'Explain Artificial Intelligence in simple and easy language for a beginner who has no technical background. Keep the explanation clear and mention a few examples of where AI is used in daily life.',
    base:
      'Artificial Intelligence is a computational discipline concerned with the development of intelligent systems capable of performing cognitive functions through algorithmic processing and data-driven methodologies.',
    tuned:
      'Artificial Intelligence, or AI, is technology that helps computers do tasks that usually need some human thinking. It can learn patterns from examples, understand some language, recognize objects, and make suggestions. AI does not think exactly like a person; it uses data and mathematical patterns to produce a result. You may use AI when a map suggests a faster route, a music app recommends a song, or a phone assistant understands a spoken request. AI is also used in translation tools, photo apps, and customer support. It can be helpful, but it can make mistakes, so check important information.',
  },
  {
    instruction:
      'Define Machine Learning in simple language and explain how it is connected to Artificial Intelligence. Also provide two real-world examples.',
    base:
      'Machine Learning is a subfield of Artificial Intelligence involving algorithms, statistical models, computational optimization, and data-driven pattern recognition.',
    tuned:
      'Machine Learning is a part of Artificial Intelligence that helps a computer learn patterns from examples. Instead of giving it a rule for every situation, people provide examples and let the computer learn what they have in common. It can then use those patterns to make a guess about something new. For example, an email service can learn to identify spam, and a movie app can suggest films based on what someone has watched. Machine Learning is only as useful as the examples it learns from. If the examples are incorrect or incomplete, its predictions may also be wrong.',
  },
  {
    instruction:
      'Explain Natural Language Processing for a beginner using simple words. Describe what it does and mention some applications where NLP is commonly used.',
    base:
      'Natural Language Processing is an interdisciplinary computational domain combining linguistics, statistical methodologies, and machine learning techniques for natural language analysis.',
    tuned:
      'Natural Language Processing, or NLP, is a part of AI that helps computers work with human language. It can help a computer understand a written question, turn speech into text, translate a message, or make a long article shorter. NLP is used in chatbots, voice assistants, translation apps, and tools that find the feeling in customer reviews. Human language can be confusing, so a computer may misunderstand slang, spelling mistakes, or words with more than one meaning. Clear wording helps these tools respond more accurately.',
  },
  {
    instruction:
      'Explain what Python is to a student who is new to programming. Use simple language and mention the main areas where Python is commonly used.',
    base:
      'Python is a high-level, interpreted, general-purpose programming language characterized by dynamic typing and extensive library support.',
    tuned:
      'Python is a programming language that people use to give instructions to computers. It is popular with beginners because its code is often easy to read and understand. You can use Python to make a small game, organize files, build websites, study data, or automate a task you do often. Professionals also use it for Artificial Intelligence, scientific work, and software development. Python has libraries, which are collections of ready-made code that help with common jobs. Learning Python takes practice, but starting with small projects can make the first steps easier.',
  },
  {
    instruction:
      'Explain Instruction Tuning in simple words. Describe how it improves a language model and explain why instruction-response examples are used during the training process.',
    base:
      'Instruction tuning represents a supervised adaptation methodology involving optimization of pre-trained language model parameters using instruction-following datasets.',
    tuned:
      'Instruction Tuning is a way to train a language model to follow people’s requests more clearly. The model is shown many examples that pair a request with a useful answer. Some examples might ask for a simple explanation, a summary, or a list. By learning from these pairs, the model gets better at understanding what a user wants and choosing a suitable way to respond. For example, it can learn to use simpler words when a request is meant for a beginner. Instruction Tuning can make a model more helpful, but it cannot guarantee that every answer is correct.',
  },
  {
    instruction:
      'Explain the difference between Prompt Engineering and Instruction Tuning in simple language. Clearly describe what each method focuses on.',
    base:
      'Prompt Engineering and Instruction Tuning represent distinct approaches to optimizing language model interaction through input manipulation and parameter adaptation respectively.',
    tuned:
      'Prompt Engineering and Instruction Tuning can both help an AI respond better, but they work in different ways. Prompt Engineering means writing a clearer request for the AI. For example, you can explain the audience, give background, and ask for a particular format. Instruction Tuning means training the model with many examples of requests and good answers so that it learns how to follow instructions. In short, Prompt Engineering improves the message you send, while Instruction Tuning improves how the model has been taught to respond. Clear prompts help, but they cannot make a model perfect.',
  },
  {
    instruction:
      'Explain Large Language Models in a beginner-friendly way. Mention what they are trained on and list some tasks they can perform.',
    base:
      'Large Language Models are neural architectures trained using extensive textual corpora to perform probabilistic sequence modeling and language generation.',
    tuned:
      'A Large Language Model, or LLM, is an AI program trained on a very large collection of text. It learns patterns in how people use words and sentences, then uses those patterns to create a response to a request. An LLM can answer questions, summarize a document, translate text, help draft a message, and assist with some coding tasks. It can sound sure of itself even when it is mistaken, because making natural-sounding text is not the same as checking facts. Use an LLM as a helpful tool, and verify important details with reliable sources.',
  },
  {
    instruction:
      'Explain what training data means in Artificial Intelligence. Describe why the quality and diversity of training data are important for an AI system.',
    base:
      'Training data constitutes the empirical information utilized during optimization procedures to estimate model parameters and minimize predictive loss functions.',
    tuned:
      'Training data is the set of examples a computer model studies while it learns. For example, a picture model might study images labeled with the objects they contain. An instruction-following model might study requests paired with helpful answers. The model learns patterns from these examples and uses them when it sees something new. Accurate and varied examples matter because missing or incorrect examples can teach the model the wrong lesson. If some people or situations are not represented, the model may work less well for them. Careful review can improve the data, though it cannot remove every possible mistake.',
  },
  {
    instruction:
      'Explain AI hallucination in simple words and provide one example showing how an AI system can generate information that sounds correct but is actually false.',
    base:
      'Hallucination refers to the generation of semantically plausible but epistemically unsupported outputs produced by probabilistic generative models.',
    tuned:
      'An AI hallucination happens when an AI gives an answer that sounds convincing but contains information that is wrong or made up. A language model creates text from patterns it learned, and it may not check every detail against a trustworthy source. For example, it might invent a research paper title and describe it as real. This is why a confident tone does not prove that an answer is true. Check important claims with reliable sources, especially when the information could affect health, money, schoolwork, or safety.',
  },
]

export const datasetExamples = [
  {
    instruction:
      'Explain Artificial Intelligence in simple words for a beginner. Describe what AI does, how it helps computers perform intelligent tasks, and provide a few examples from daily life.',
    response:
      'Artificial Intelligence, or AI, is technology that helps computers do tasks that usually need some human thinking. It can learn patterns, recognize objects, understand some language, and make suggestions. AI does not think exactly like a person; it uses data and mathematical patterns to produce a result. You may see AI in a phone assistant, a map that suggests a route, a music app that recommends songs, or a tool that translates a message. AI is useful in many areas, but it can make mistakes, so people should check important information.',
  },
  {
    instruction:
      'What is Machine Learning? Explain it in simple and clear language. Also describe how Machine Learning is related to Artificial Intelligence and mention some common applications.',
    response:
      'Machine Learning is a part of Artificial Intelligence that lets computers learn patterns from examples. Instead of programming every rule by hand, people give a model data to study. It uses what it learns to make a prediction or suggestion when it sees new information. For example, a mail service can learn to spot spam, and a shopping app can recommend items based on earlier choices. Machine Learning is used in image recognition, fraud detection, and forecasting too. Its results depend on the examples it learns from, so poor or incomplete data can lead to poor results.',
  },
  {
    instruction:
      'Define Natural Language Processing in beginner-friendly language. Explain how NLP helps computers work with human language and provide examples of where it is used.',
    response:
      'Natural Language Processing, or NLP, is a part of AI that helps computers work with the words people write or say. It can help a computer understand a question, translate a sentence, turn speech into text, or shorten a long document. NLP is used in chatbots, voice assistants, translation apps, and tools that review customer comments. Human language can be unclear or have more than one meaning, so computers sometimes misunderstand it. Clear sentences and useful context can help an NLP tool give a better result.',
  },
  {
    instruction:
      'Explain what Python is for someone who has never programmed before. Mention why Python is popular and describe some major areas where it is used.',
    response:
      'Python is a programming language people use to tell computers what to do. It is popular with beginners because its code is often easy to read, but it is also useful for professional projects. People use Python to build websites, automate repeated tasks, study data, create software, and work on Artificial Intelligence and scientific research. It also has many libraries, which are collections of ready-made code for common tasks. These libraries help people build useful programs without writing every part from the beginning. Learning Python takes practice, and small projects are a good place to start.',
  },
  {
    instruction:
      'Explain Instruction Tuning in simple language. Describe how instruction-response examples are used to improve a language model and explain the main purpose of this process.',
    response:
      'Instruction Tuning is a way to train a language model to follow requests more clearly. During training, the model sees many examples that pair an instruction with a useful answer. The requests might ask for an explanation, a summary, a translation, or a certain writing style. The model learns from these pairs and gets better at choosing an answer that fits the request. For example, it can learn to explain an idea in simple language when the user says they are a beginner. This can make the model more helpful, but it does not guarantee that every answer will be accurate.',
  },
  {
    instruction:
      'What is a Large Language Model? Explain it in simple words and mention at least five different tasks that a language model can perform.',
    response:
      'A Large Language Model, or LLM, is an AI program trained on a very large collection of text. It learns patterns in language and uses them to create a response when someone gives it a request. An LLM can answer questions, summarize a document, translate text, help draft a message, explain an idea, and assist with some coding tasks. It can be useful for learning and writing, but it may also give a confident answer that is wrong. It is a good idea to check important facts with reliable sources rather than treating the model as an authority.',
  },
  {
    instruction:
      'Explain the meaning of training data in Machine Learning and Artificial Intelligence. Describe why good-quality and diverse data is important for model performance.',
    response:
      'Training data is the collection of examples used to teach an AI or Machine Learning model. A model studies these examples to find patterns, then uses the patterns to make a prediction or create a response. Good data should be accurate and relevant to the task. It should also include a range of people and situations so the model does not only learn from a narrow set of examples. If important cases are missing or the examples contain mistakes, the model may give inaccurate or unfair results. Reviewing and updating training data can help improve a model, although it cannot prevent every error.',
  },
  {
    instruction:
      'Explain Fine-Tuning in simple language. Describe how it differs from training a model from scratch and explain how Instruction Tuning is related to Fine-Tuning.',
    response:
      'Fine-Tuning means taking a model that has already learned general patterns and training it further with a smaller set of focused examples. This is different from training from scratch, which begins without that earlier learning and usually needs much more data and computing work. Fine-Tuning can adapt a model for a particular task or style. Instruction Tuning is one kind of fine-tuning: it uses examples of requests and helpful answers to teach a language model to follow instructions more effectively. The quality of the examples matters, and fine-tuning does not automatically make every answer correct.',
  },
  {
    instruction:
      'Explain Prompt Engineering and describe why writing a clear prompt can improve the quality of an AI response. Mention the main elements of a good prompt.',
    response:
      'Prompt Engineering means writing a clear request for an AI tool. A useful prompt says what task to do, gives important background, explains who the answer is for, and describes the format or amount of detail you want. For example, you could ask, “Explain how rain forms in simple language for a child and give one everyday example.” That tells the tool both the topic and the audience. Clear prompts make it easier for an AI to understand what you need and reduce guesswork. However, even a very clear prompt cannot guarantee a perfect or factually correct answer.',
  },
  {
    instruction:
      'Explain Supervised Learning in simple language. Describe how a model learns using input-output examples and explain why this approach is useful for Instruction Tuning.',
    response:
      'Supervised Learning is a way to teach a computer model with examples that include both an input and the expected answer. For example, a model might study pictures that are labeled “cat” or “dog.” It learns patterns that help it label a new picture. This approach is useful when people can prepare examples of the right result. Instruction Tuning often uses supervised learning because its training examples pair a request with a helpful answer. The model learns from these pairs how to respond to different requests. If the examples are incorrect or limited, the model may learn patterns that do not work well in new situations.',
  },
  {
    instruction:
      'Explain Generative AI in beginner-friendly language. Describe the different types of content that Generative AI can create and provide a few examples.',
    response:
      'Generative AI is a type of AI that creates new content based on patterns it learned from examples. Depending on the tool, it can create text, pictures, music, speech, video, or computer code. For example, a writing assistant can suggest a draft for an email, while an image tool can make a picture from a written description. These tools can help people brainstorm and finish creative work more quickly. The results may still contain errors or may not match what the user wanted. Review generated content, check important facts, and make sure you have the right to use any material you include.',
  },
  {
    instruction:
      'Explain Deep Learning in simple words. Describe how neural networks are involved and mention some important applications of Deep Learning.',
    response:
      'Deep Learning is a kind of Machine Learning that uses a computer system with many connected layers, called a neural network. The layers learn different patterns from examples. For instance, a system looking at a photo may first notice edges, then shapes, and finally objects. Deep Learning can help computers recognize speech, identify objects in pictures, translate language, and find patterns in large collections of information. It is useful for complex tasks, but often needs a lot of examples and computing power. Like other AI methods, it can make mistakes, so results should be checked when they are important.',
  },
  {
    instruction:
      'Explain what an AI chatbot is and describe how technologies such as Natural Language Processing and Instruction Tuning can improve its ability to communicate with users.',
    response:
      'An AI chatbot is a program that talks with people through text or speech. Natural Language Processing helps it work out what a person may mean, even when the person uses ordinary conversational language. A language model can then create a reply. Instruction Tuning can help the model follow requests, such as explaining a topic simply or answering in a particular format. Chatbots can help answer common questions, explain ideas, or guide people through a task. They can still misunderstand a message or provide incorrect information, so users should check important answers and ask a person for help when needed.',
  },
  {
    instruction:
      'Explain AI bias in simple language. Describe how biased training data can affect an Artificial Intelligence system and explain why diverse datasets are important.',
    response:
      'AI bias is when an AI system gives unfair or less accurate results for some people or situations. This can happen if its training examples mostly represent one group, leave out important experiences, or repeat unfair patterns from the past. For example, a system trained with limited examples may work well for some users but poorly for others. Using varied and carefully checked examples can help the system work more fairly. Developers should also test the system with different people and situations and review its results over time. These steps can reduce bias, but they cannot guarantee perfect fairness, so human oversight is important.',
  },
  {
    instruction:
      'Explain AI hallucination in beginner-friendly language. Describe why it happens and provide an example showing why users should verify important AI-generated information.',
    response:
      'An AI hallucination is an answer that sounds believable but includes a false or made-up detail. Language models learn patterns in text and use those patterns to create answers; they do not always check facts against trusted sources. For example, a chatbot might invent a book title or research citation and describe it as real. This is why a confident answer should not automatically be trusted. Check important details using reliable sources, especially for health, money, legal, or safety questions. AI can be a useful starting point, but it should not replace careful fact-checking.',
  },
]

export const examplePrompts = [
  'Explain Artificial Intelligence in simple words for a beginner, including what it is, how it works, and where it is used in everyday life.',
  'Describe Machine Learning in a detailed answer and explain how it connects to Artificial Intelligence with real-world examples.',
  'Write a detailed explanation of Natural Language Processing and explain how it helps computers understand human language.',
]
