
function Contact() {
  return (
    <div>
        <h2>Contacto</h2>
        <form action="" className="formulario">

          <label htmlFor="nombre">Nombre:</label>
          <input type="text" name="nombre" />

          <label htmlFor="email">Email:</label>
          <input type="email" name="email" />

          <label htmlFor="telefono">Telefono:</label>
          <input type="telefono" name="telefono" />

          <label htmlFor="message">Mensaje:</label>
          <textarea name="message"></textarea>

          <div className="button-container">
              <button type="submit">Enviar</button>
              <button className="button-delete" type="reset">Borrar</button>
          </div>
              
        </form>
    </div>
  )
}

export default Contact
