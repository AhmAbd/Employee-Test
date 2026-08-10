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

async function getUserSummary() {
    try {
        const user = await getUser();
    } catch (error) {
        console.log("حصل خطأ في الحصول على بيانات المستخدم", error)
        return;
    }

    try {
        let ordersList = await getOrders(user.id)
    } catch (error) {
        console.log("حصل خطأ في الحصول على طلبات المستخدم", error)
        return;
    }
    
    if (!ordersList) {
        ordersList = [];
    }
    let totalSpent = 0;
    for(const order of ordersList) {
        totalSpent += order.amount;
    }
    return {
        user: user.name,
        ordersCount: ordersList.length,
        totalSpent
    }
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