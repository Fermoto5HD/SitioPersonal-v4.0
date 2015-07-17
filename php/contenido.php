<div class="contenido" id="home">
	<div class="cuerpo-landing" id="home">
		<div class="landing-sombra">
			<div class="encuadre">
				<div class="landing-texto" id="home"><h1 style="margin-bottom: 0px;">¡Bienvenido a mi sitio!</h1>
				Próximamente te voy a contar sobre mí y sobre los trabajos que hice.<br>El sitio aún está siendo programado, y faltan sorpresas. Paciencia ;) </div>
			</div>
		</div>
	</div>
	<div class="encuadre">
		<center>
			<div class="seccion" id="nota-desplazar"><h1>¡Desplazate un poco hacia abajo!</h1></div>
			<div class="seccion" id="inicio-resumen">
				<h1>Un resumen de lo que hago</h1>
				<div class="cuerpo-item">
					<div class="item-circulo" id="rojo"><i class="mdi mdi-school" style="font-size: 80px; line-height: 2.1;"></i></div>
					<div class="item-texto">Curso la tecnicatura en Tecnología Ferroviaria en la UNSAM.</div>
				</div>
				<div class="cuerpo-item">
					<div class="item-circulo" id="naranja"><i class="mdi mdi-laptop-windows" style="font-size: 80px; line-height: 2.1;"></i></div>
					<div class="item-texto">Programo apps web en HTML5, PHP, CSS3, JS, jQuery, Ajax y más!</div>
				</div>
				<div class="cuerpo-item">
					<div class="item-circulo" id="anaranjado"><i class="mdi mdi-account-multiple" style="font-size: 80px; line-height: 2.1;"></i></div>
					<div class="item-texto">Ayudo como voluntario en la Biblioteca Baldomero en "Programá tu Futuro".</div>
				</div>
				<div class="cuerpo-item">
					<div class="item-circulo" id="amarillo"><i class="mdi mdi-television-guide" style="font-size: 80px; line-height: 2.1;"></i></div>
					<div class="item-texto">Veo animé y analizo un poco la televisión argentina.</div>
				</div>
				<div class="cuerpo-item">
					<div class="item-circulo" id="azul-claro"><i class="fa fa-subway fa-5x" style="line-height: 2.1;"></i></div>
					<div class="item-texto">Me apasiona el urbanismo y el transporte público. En especial el subte.</div>
				</div>
				<div class="cuerpo-item">
					<div class="item-circulo" id="azul-oscuro"><i class="mdi mdi-city" style="font-size: 80px; line-height: 2.1;"></i></div>
					<div class="item-texto">Busco gente que quiera explorar nuevos lugares en Buenos Aires.</div>
				</div>
			</div>
			<div class="seccion" id="inicio-portfolio">
				<h1>Portfolios destacados</h1>
				<a href="http://factorrhcreativo.16mb.com/" target="blank"><div class="cuerpo-item">
					<div class="item-cuadrado" id="portfolio-factorrhcreativo"></div>
					<div class="item-texto">Factor RH Creativo<br>Rebranding Mayo 2015</div>
				</div></a>
				<a href="http://Fermoto5HD.xtrweb.com/ClubBaldomero" target="blank"><div class="cuerpo-item">
					<div class="item-cuadrado" id="portfolio-clubbaldomero"></div>
					<div class="item-texto">Club Baldomero<br>Abril-Mayo 2015</div>
				</div></a>
			</div>
			<div class="seccion" id="inicio_contacto">
				<h1>Esto es lo que hay por el momento</h1>
				<p>Te invito a seguir el desarrollo de la versión 4 de mi sitio en el <a href="https://github.com/Fermoto5HD/SitioPersonal-v4.0" target="blank">repositorio de GitHub</a>.</p>
				<p>Si tenés una consulta en particular, podés realizarla en las redes donde participo:</p>
				<a href="http://facebook.com/Fermoto5HD" target="blank"><button><i class="fa fa-facebook-official fa-2x"></i></button></a>
				<a href="http://twitter.com/Fermoto5HD" target="blank"><button><i class="fa fa-twitter fa-2x"></i></button></a>
				<a href="https://plus.google.com/117999670362964140369/" target="blank"><button><i class="fa fa-google-plus fa-2x"></i></button></a>
				<p>O podés enviarme un correo:</p>
				<button onclick="Contacto()">Ir al formulario de contacto</button>
			</div>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
		</center>
	</div>
</div>
<div class="contenido" id="contacto" style="display: none;">
	<div class="cuerpo-landing" id="contacto">
		<div class="landing-sombra">
			<div class="encuadre">
				<div class="landing-texto" id="contacto"><h1 style="margin-bottom: 0px;">¿Alguna duda con algo?<br />¿Te interesaron mis trabajos?</h1>
				¡Ponete en contacto conmigo y te responderé las dudas o consultas que tengas!</div>
			</div>
		</div>
	</div>
	<div class="encuadre">
		<center>
			<div class="seccion" id="contacto-redessociales">
				<h1>Podés contactarte via redes sociales:</h1>
				<a href="http://facebook.com/Fermoto5HD" target="blank"><button><i class="fa fa-facebook-official fa-2x"></i></button></a>
				<a href="http://twitter.com/Fermoto5HD" target="blank"><button><i class="fa fa-twitter fa-2x"></i></button></a>
				<a href="https://plus.google.com/117999670362964140369/" target="blank"><button><i class="fa fa-google-plus fa-2x"></i></button></a>
			</div>
			<div class="seccion" id="contacto-formulario">
				<h1>O si preferís una respuesta por correo electrónico, llená este formulario: </h1>
				<div id="estado-envio" class="oculto">
					<p>No se pudo determinar el estado del envío. </p>
				</div>
				<form id="formulario-contacto" name="contacto">
					<input class="campo-texto" id="contacto-nombre" type="text" placeholder="Tu nombre"></input>
					<input class="campo-texto" id="contacto-correo" type="email" placeholder="Tu correo electrónico"></input>
					<input class="campo-texto" id="contacto-telefono" type="number" placeholder="Un teléfono si lo deseas (opcional)"></input>
					<textarea class="campo-texto-extendido" id="contacto-mensaje" placeholder="Y lo que me quieras consultar o proponer!"></textarea>
					<div class="error-envio" style="display: none;">
						<h1 class="error-envio-titulo">Revisá bien... algo está provocando que no se pueda enviar el mensaje.</h1>
						<p class="error-envio-item">No se pudo determinar el error. <br>Si se sigue repitiendo por favor abrí un "issue" en el repositorio del sitio reportando este error. </p>
					</div>
					<input id="contacto-enviar" type="button" onclick="RealizarEnvio()" value="¡Enviar mensaje!"></input>
				</form>
			</div>
		</center>
	</div>
</div>