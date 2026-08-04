async function getUser(){
    return {
        id:1,
        name:"Ahmed"
    }
}


async function getOrders(userId){

    return [
        {
            id:1,
            amount:100
        },
        {
            id:2,
            amount:200
        }
    ]

}

/*
اكتب دالة getUserSummary()

تعيد:

{
    user:"Ahmed",
    ordersCount:2,
    totalSpent:300
}

يجب أن تتعامل مع:

فشل جلب المستخدم.
فشل جلب الطلبات.
عدم وجود طلبات.
*/