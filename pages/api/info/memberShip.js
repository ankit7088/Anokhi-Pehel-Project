import { client } from "../../../lib/sanityClient";

async function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }

  const data = req.body;

  const { name,email,number,address,isAlumni,batch,message } = data;

  if(!name && !email && !address && !message && !number){
    res.status(422).json({
      errorMessage:
        'Invalid input - Please Fill all Inputs Fields.',
    });
  return ;
  }
  if(name.length<2 && address.length<2 && message.length<2  ){
    res.status(422).json({
      errorMessage:
        'Length of all inputs fields must be more than 2 characters',
    });
  return ;
  }
  if(!email ||
    !email.includes('@') || !email.includes('.')){
    res.status(422).json({
      errorMessage:
        'Enterered email is not valid',
    });
  return ;
  }
  else {
   
      const doc = {
        _type: 'memberShipForm',
        name: name,
        email: email,
        number: number,
        address: address,
        message: message,
        isAlumni: isAlumni,
        batch: batch,
      };
      const response = await client.create(doc);
      res.status(200).json({userData:response ,successMessage: "Your message has been sent. Thank you!" });
     
  }
}

export default handler;