
function processOrder(order) {

    if (order.total > 100) {
        console.log("VIP");
    }

    if (order.status == "completed") {
        console.log("Completed");
    }

    if (order.status == "pending") {
        console.log("Pending");
    }

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
