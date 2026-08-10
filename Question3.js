
const orderStatusList = {
    completed: "Completed",
    pending: "Pending",
    cancelled: "Cancelled",
    refunded: "Refunded",
    shipped: "Shipped"
}
const types = [
    ["Regular", 1],
    ["VIP", 100],
    ["Enterprise", 1000]
]
function processOrder(order) {
    for(let i=types.length-1; i>=0; i--) {
        if(order.total >= types[i][1]) {
            console.log(types[i][0]);
            break;
        }
    }
    console.log(orderStatusList[order.status]);
}

/*
أنت تعمل على نظام لإدارة الطلبات (Order Management System).
الكود يعمل حاليًا، ولكن مع مرور الوقت أصبح من الصعب تطويره.

تخيل أنه خلال الشهر القادم ستتم إضافة متطلبات جديدة مثل:

إضافة حالة طلب جديدة:
cancelled
refunded
shipped

إضافة أنواع عملاء جديدة:
VIP
Regular
Enterprise

قم بإعادة كتابة الكود السابق بحيث يصبح:

سهل القراءة والفهم
سهل التعديل والتوسعة مستقبلًا
يتبع مبادئ Clean Code
لا يحتاج إلى تعديل أجزاء كثيرة عند إضافة حالات أو قواعد جديدة
*/
