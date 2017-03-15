function getTempCallback(location, callback) {
    callback(undefined, 78);
    callback('City not found');

}

getTempCallback('Philadelphia', function(err, temp){
    if(err) {
        console.log('error', err)
    } else {
        console.log('success', temp)
    }

})

function getTempPromise(location) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            resolve(79);
            reject('City not found');
        }, 1000);
    })
}

getTempPromise('Philadelphia').then(function(temp){
    console.log("Promise success", temp)
}, function(err){
    console.log("Promise erro", err)
})

function addPromise(a, b) {
    return new Promise(function(resolve, reject){
        if(typeof a === 'number' && typeof b === 'number'){
            resolve(a+b);
        } else {
            reject("something's not a number");
        }
    })
}

addPromise(2,8).then(function(res){
    console.log(res)}, function(err) {
        console.log("error func", err)});
addPromise("lala", 2).then(function(res){
    console.log(res)}, function(err) {
        console.log("error func", err)});