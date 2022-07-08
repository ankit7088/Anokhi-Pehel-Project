import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

const Donation = () => {
    const total=1;
    const initiatePayment=async()=>{
        let oid=Math.floor(Math.random()*Date.now());
        let data={total,oid,email:"email"};
        let a=await fetch(`${process.env.NEXT_PUBLIC_URL}/api/preTransaction`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data),
        })
        let txnRes=await a.json();
        let txnToken=txnRes.txnToken;
        // console.log(txnRes);
        var config = {
            "root": "",
            "flow": "DEFAULT",
            "data": {
            "orderId": oid, /* update order id */
            "token": txnToken, /* update token value */
            "tokenType": "TXN_TOKEN",
            "amount": total /* update amount */
            },
            "handler": {
              "notifyMerchant": function(eventName,data){
                console.log("notifyMerchant handler function called");
                console.log("eventName => ",eventName);
                console.log("data => ",data);
              } 
            }
          };
    
                  // initialze configuration using init method 
                  window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
                      // after successfully updating configuration, invoke JS Checkout
                      window.Paytm.CheckoutJS.invoke();
                  }).catch(function onError(error){
                      console.log("error => ",error);
                  });
          
    }
  return (
    <>
    <div className="container">
        <Head>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"/>
        </Head>
        <Script type="application/javascript" id='script' crossorigin="anonymous" src={`${process.env.NEXT_PUBLIC_PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_PAYTM_MID}.js`} > </Script>
    <div className="p-2 w-full">
          <button onClick={initiatePayment} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">{total} Pay</button>
        </div>
    </div>
    </>
  )
}

export default Donation