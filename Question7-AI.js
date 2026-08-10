/*
أنت تعمل على نظام دعم فني.

عند وصول رسالة جديدة من العميل يجب إرسالها إلى نموذج لغوي (LLM) لتوليد رد مناسب.

اشرح كيف ستبني هذه الخدمة.

يجب أن تتضمن الإجابة:

تصميم الـ Prompt
إدارة Context المحادثة
التعامل مع Token Limits
Retry عند فشل الطلب
Logging
Cost Optimization
حماية API Keys
التعامل مع Rate Limits
*/

////////////////////////////////////////


// الجواب


/*
1. Prompt design: in here we decide how we should let our bot answer, what topics it can talk about, its limitations,
answer length and also its' tone. we write the system rules, the service/company/etc. information and we specify the
user message clearly (because users try to exploit the bot by making the bot think the user's message is the
admin message, and try to get other information from it). letting the bot know the user message makes it clear on not
following any sensitive instructions that come after the "USER PROMPT"

2- Conversation Context Management: if conversation gets too long (we specify a limit, or a context limit), we set it 
to "Compact" or summarize the current conversation, which lowers both our costs, this also helps with our token
limits (by reducing context) and lowers the hallucination rate, because high/full context in a LLM leads to
hallucinations and unnecessary answers.

3- if the request fails, (usually we get a 429 error or 500 etc.), wait then retry. we limit how many times we retry
so that we don't go in a non-ending loop

4- Logging: we log the request ID, the name of the LLM model used, response times (helps us debugging, if we need to
change the model as well due to inefficiency) and our token usage to monitor limits/costs. also we log the errors,
amount of retries. 

5- Cost Optimization: we can use small models for simple questions that don't need thinking or reasoning, and make
it route to bigger models if detected that the question is difficult and needs reasoning etc. in addition to the cost
optimization methods I mentioned in 2.

6- protecting the API key: we store API key in the backend with env variables, so that it never appears in the frontend,
or in the codes.

7- Rate limits: if there are too many requests coming to our bot, we should put them in a queue, and limit how many
are sent each at a time.s
*/