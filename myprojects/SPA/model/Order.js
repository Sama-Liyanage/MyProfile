function Order(id, date, cusId, orderItems){

    this.orderId=id;
    this.orderDate=date;
    this.orderCusId=cusId;
    this.orderItems=orderItems;

    this.getId = function () {
        return this.orderId;
    }
    this.setId = function (_id) {
        this.orderId = _id;
    }

    this.getDate = function () {
        return this.orderDate;
    }

    this.setName = function (_date) {
        this.orderDate = _date;
    }
    this.getCusId = function () {
        return this.orderCusId;
    }

    this.setCusId = function (_cusId) {
        this.orderCusId = _cusId;
    }
    this.getOrderItems = function () {
        return this.orderItems;
    }

    this.setOrderItems= function (_orderItems) {
        this.orderItems = _OrderItems ;
    }
}