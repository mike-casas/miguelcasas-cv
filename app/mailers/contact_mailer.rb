class ContactMailer < ActionMailer::Base
  default from: "JOBS Miguel Casas  <contacto@miguelcasas.co>"

   def contact_send(params)
      @parameters=params
      mail(to:'ing.miguelcasas@gmail.com',subject:@parameters[:subject])
   end

end
