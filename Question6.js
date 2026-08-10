/* 
أنت تبني API لمنصة تجارة إلكترونية.

لديك Endpoint:

POST /orders

المستخدم يستطيع إرسال:

{
 "productId":10,
 "quantity":2
}

اشرح كيف ستصمم العملية كاملة:

Validation
Authentication
Database transaction
Error handling
Inventory update
Payment processing
Duplicate requests

*/

///////////////////////////////////
// الجواب


/*
1- our API receives an order request with POST /orders, we first check the request body, check whether user is
valid and can order, and whether the ordered productId is a valid product that is defined. 

2- if product is valid, we fetch the product's price and stock from the database. using the productId
if not in stock (quantity > stock), we prompt the user about the stock (if it's not zero, but still
lower than quantity they ordered), and tell them to order less quantity, if in stock,
(stock >= quantity), we create an order instance in the database, and set its' status as "in progress",
and then we "Lock" the quantity that is being purchased in the stock, so that no race condition happens of two
users trying to buy the same products at the same time.

3- creating the order, and locking the stock for the race condition will be inside a database action.
if creating the order or updating the inventory fails, we bring back both changes, so the
database does not end up incorrect. then, send a payment request to the payment provider. we use an
idempotency key so if request is sent twice by mistake, the user does not get deducted twice and only
one order is created.

4- if the payment fails, we set the order status as "failed", and unlock the quantity and bring it back to what it
was before the order was created, so it becomes available in the stock again. the user is prompted the error message,
for example card declined, or not enough balance in card.

5- if the payment is successful and we got a 200 OK from the payment provider, we set the order status as "paid",
and continue with shipping or delivering the order.

6- for error handling, we return the error status and message. like invalid input returns 400,
unauthenticated user returns 401, product not found returns 404 and not enough stock returns 409.
unexpected errors from server return 500, and error is saved in the logs.
*/
