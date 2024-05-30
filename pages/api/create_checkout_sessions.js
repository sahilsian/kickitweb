const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { product_id, firstName, lastName, date_of_birth, email, phone_number, address, city, region, post_code, country } = req.body;

    const products = {
      product1: 'price_1PLx2EH98Bv3YBunabMPeyuc',
      product2: 'price_1PLx2vH98Bv3YBunS0RTHrQ1',
      product3: 'price_1PLx5PH98Bv3YBungRG7oiJV'
    };

    try {
      const customer = await stripe.customers.create({
        email,
        name: `${firstName} ${lastName}`,
        phone: phone_number,
        address: {
          line1: address,
          city,
          state: region,
          postal_code: post_code,
          country,
        },
        metadata: {
          firstName,
          lastName,
          date_of_birth,
        },
      });

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price: products[product_id],
            quantity: 1,
          },
        ],
        mode: 'payment',
        customer: customer.id,
        success_url: `${req.headers.origin}/success?session_id=${CHECKOUT_SESSION_ID}`, // Use backticks to create a template literal
        cancel_url: `${req.headers.origin}/cancel`,
      });

      res.status(200).json({ id: session.id });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
