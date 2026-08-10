/*
شركة لديها مليون ملف PDF.

تريد بناء Chatbot داخلي.

صمم النظام:

يجب أن يشمل:

Documents
      |
Extraction
      |
Chunking
      |
Embeddings
      |
Vector Database
      |
Retriever
      |
LLM
      |
Answer

اشرح:

لماذا نستخدم RAG؟
كيف تختار حجم الـ chunks؟
كيف تمنع hallucination؟
كيف تقيس جودة الإجابات؟
*/

///////////////////////////////////////////////

// الجواب

/*
1- Documents: the pdf documents are stored in the company's database, we save each document's name, and information
2- Extraction: We parse the 1 million PDFs using an OCR or a PDF parser and extract the texts and information,
then clean them by removing the empty pages, or bad OCR results.
3- Chunking: Divide the long extracted files into smaller chunks, and we keep related texts, and headers together. 
4- Embeddings: after chunking the documents, we convert each chunk into an embedding/numbers that will represent its
meaning, so that 2 texts with a similar meaning, will have a near embedding and that makes it easier to access related
topics. (we also need to convert the user prompt to embedding in the same method)
5- store the chunks and the embeddings in a Vector Database. a vector database stores the embeddings of the chunks
and can search through them quickly. and it helps us will help us search by meaning of the embedding. like i 
mentioned earlier in the Embedding section.
6- Use a retriever to find the chunks related to the question, using "Semantic Search" for the meaning, "Keyword Search"
for searching through numbers and known names. and it uses a "Reranker" to put the best chunks and rank them first.
7- LLM, this is the large language model that we prompt and get an answer from. we send it a question and then use the retriever to
retrieve relative chunks to the question, and send it to the LLM. and tell it to use only the information that it is given, and when answering,
it gives a proof or it references the information (so that we don't allow hallucinations)

We use RAG because the LLM doesn't know the 1 million PDF documents we have, and our information/pdf files can be updated and changed
without having to train the model/LLM again. it also reduces hallucinations because we make it reference its' documents that it read.

When chunking, we decide how long (in tokens) a chunk should be, and we add an overlap so the information between two back to back chunks
are not lost. if chunks we chose are too small, they lose context, if they're too big, they could contain information that are useless
we should test different sizes and choose the ones that give us the best results. 

Measuring the quality of the LLM answers: we create test questions that we know the exact answer of, and its' sources, and try them
with the LLM. We could also check "Recall" of the answers, and see whether the retriever retrieved the correct chunks it has to.
and check whether it referenced the right document/pdf. we measure response time, and also measure the cost and try to change in the
chunk size/even change the model if it's too costly. 

*/