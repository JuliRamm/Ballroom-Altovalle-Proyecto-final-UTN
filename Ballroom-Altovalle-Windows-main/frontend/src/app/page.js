import Image from "next/image";
import styles from "./page.module.css";
import "@/styles/home.css"

export default function Home() {
  return (
    <div className="">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossOrigin="anonymous"/>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossOrigin="anonymous"></script>
     <main className="holder">
              

        <div className="columnas">
            
            <section className="queesballroom">
                <h2>Que es Ballroom?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptates soluta magni hic, esse
                    nesciunt non nam amet nobis repellendus impedit incidunt veniam dolores expedita ad. Cum animi
                    officia repudiandae.</p>
            </section>
            <section className="altovalle">
                <h2>Que comprende el Altovalle?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem libero optio deserunt ea natus quae,
                    tenetur debitis iusto quaerat itaque quisquam alias reiciendis officia doloribus dolores id quasi
                    doloremque quod.</p>
            </section>
        </div>
    </main>
    </div>
  );
}
