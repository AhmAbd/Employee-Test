
const orders = [
    { id: 1, customer: "Ahmed", total: 120, status: "completed" },
    { id: 2, customer: "Sara", total: 80, status: "pending" },
    { id: 3, customer: "Ali", total: 200, status: "completed" },
    { id: 4, customer: "Noor", total: 50, status: "cancelled" },
    { id: 5, customer: "Omar", total: 150, status: "completed" }
];


/*
اكتب دالة تقوم بـ:

إرجاع الطلبات المكتملة فقط.
حساب إجمالي قيمة الطلبات المكتملة.
ترتيب النتائج تنازليًا حسب قيمة الطلب.
إعادة النتيجة بهذا الشكل:
{
  totalOrders: 3,
  totalAmount: 470,
  orders: [...]
}
  */

function calcOrders(orders) {
  let totalOrders = 0;
  let totalAmount = 0;
  const completedOrders = orders.filter(order => order.status === "completed").sort((a, b) => b.total - a.total);
  for(order of completedOrders) {
    totalAmount += order.total;
    totalOrders++;
  }
  return {
    totalOrders,
    totalAmount,
    orders: completedOrders
  };
}