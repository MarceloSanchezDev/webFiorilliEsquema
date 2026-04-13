import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer flex flex-col gap-2 padding-4 z-50">
      <div className="flex flex-col center flex-md-row gap-2 margin-4">
        <div className="width-100 flex flex-col gap-2">
          <div className="">Magistral Lab</div>
          <p className="">
            Especialistas en formulación magistral con más de 25 años de experiencia en la industria farmacéutica.
          </p>
        </div>
        <div className="width-100 flex flex-col center gap-2">
          <h4 className="">Enlaces Rápidos</h4>
          <div className="flex flex-col center gap-2">
            <a className="" href="#">Contacto</a>
            <a className="" href="#">Ubicación</a>
            <a className="" href="#">Políticas de Privacidad</a>
          </div>
        </div>
        <div className="width-100 flex flex-col center gap-2">
          <h4 className="">Social</h4>
          <div className="flex flex-col center gap-2">
            <a className="" href="#">Facebook</a>
            <a className="" href="#">Instagram</a>
            <a className="" href="#">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="flex center">
        <p className="">© 2026 Farmacia JR Fiorilli Precisión y Cuidado Personalizado.</p>
      </div>
    </footer>

  )
}
