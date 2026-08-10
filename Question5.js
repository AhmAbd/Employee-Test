
/*
لديك نظام إرسال إيميلات:

sendEmail(user)

for(const user of users){

    await sendEmail(user);

}

المشكلة:

بطيء جدًا.
إذا فشل إيميل واحد يتوقف النظام.

اشرح كيف ستعيد تصميم النظام.
*/


// الجواب


/*
in this code, a for loop is used and goes through each user each at a time, which makes it extremely
slow to send emails one by one, and because we're using "await", if even one of the emails fails
to send, it will return an error and it will stop sending the emails for the users after the failed
one. 

to solve these problems, I would first use "await Promise.all", this sends many emails at the
same time, which solves our speed problem, and make each email handle/catch its' own error, so then,
when one email fails, it still runs the other emails and doesn't stop them. 

after they finish, we check which emails succeeded and which failed, we could do retry emails and 
set a limit (for example: retry 3 times. if failed in all, then stop trying again). or if there are
many users, and it is failing because we're getting rate limited, we could send the emails in groups
instead of sending them all at once. 
*/