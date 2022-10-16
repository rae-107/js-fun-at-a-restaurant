function takeOrder(orders, deliveryOrders) {
for(var i = 0; deliveryOrders.length < 3; i++){
return deliveryOrders.push(orders);
  }
}


function refundOrder(orderNumbers, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if(deliveryOrders[i].orderNumber === orderNumbers) {
    return deliveryOrders.splice(i, 1);
    }
   }
 }


function listItems(deliveryOrders) {
  var name = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
   name.push(deliveryOrders[i].item );
  } 
  return name.join(', ');
}


function searchOrder(deliveryOrders, items) {
  var inList = false;
  for (var i = 0; i < deliveryOrders.length; i++) {
    if(deliveryOrders[i].item.includes(items)) {
      inList = true;
    }
  }
  return inList;
}




module.exports = {
takeOrder,
refundOrder,
listItems,
searchOrder
}

  //  if(deliveryOrders.includes(orderNumber)) {
  //   deliveryOrders.splice(i, 1);

  // return deliveryOrders.splice(i, 1)

 // for (var i = 0; i < deliveryOrders.length; i++) {
  //   if(deliveryOrders[i].includes(orderNumber)){
  //     deliveryOrders.splice(i, 1)
  //   } return deliveryOrders
  //}



