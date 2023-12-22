customerList=[];
itemList=[];

function add(id,name,phone){
    let customer={
        "id":id,
        "name":name,
        "phone":phone
    }

    console.log("customer" + customer);
    customerList.push(customer);
}

function add(id,description,price,units){
    let item={
        "id":id,
        "description":description,
        "price":price,
        "units":units
    }

    itemList.push(item);
}
