import paypal from '@paypal/checkout-server-sdk'


const environment = new paypal.core.SandboxEnvironment('CLIENT_ID', 'CLIENT_SECRET');
const client = new paypal.core.PayPalHttpClient(environment);

// TODO: Add amount to paypal section
export async function createPaypalOrder() {
  const request = new paypal.orders.OrdersCreateRequest();
  request.prefer("return=representation");
  request.requestBody({
    intent: 'CAPTURE',
    purchase_units: [{
      amount: {
        currency_code: 'USD',
        value: '100.00' //Change to a variable amount
      }
    }]
  });

  try {
    const order = await client.execute(request);
    alert(order.result);
  } catch (err) {
    console.error(err);
    alert(err)
  }
}