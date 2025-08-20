

//// inicio??????

				//var u;
				//var i;
				//var p;
				//var v;
				//var f;
				//var d;
				//var c;

				var u = 1; // Anuncio público (1) / privado (0)
				//for(var i = 0; i<c; i++) // Ciclo para recorrer las tablas parciales
				var p = 1; // Pin para continuar la siguiente verificación
				var v = 0; // Contador de verificaciones
				var f = 0; // 0 = Verificación completada sin exito de la ruta parcial 1=Fin de una verificación con exito
				var d = 0; // Pre verificación de un id 2 valido como ruta parcial hija
				var c = ArRay.length - 5;// Determinar la cantidad de tablas parciales de la ruta	
				
				//var o = 0; // Orden de continuar con la siguiente ruta parcial..
				///var x = 0; // En 1 si termina la verificacíon del caso con ids 1 o 2
				for(var i = n+5; i<15; i++) // Ciclo para generar las tablas parciales que siguen
				{	console.log('&&&&&&&&&&&  Ruta parcial n=',n,' sin verificar');
					switch (i) // m: nivel del lugar a analizar (5) Continentes (6)"Paises" ..
					{	case 5: // Continentes..
							for(var j = 1; j<wPAPA1.length; j++) //j en vez de l
							{	//console.log(i,' j=',j,'vPAPA1[j][0]=',vPAPA1[j][0]);
								if(wPAPA1[j][0] == papas[m]) // El id hijo en la ruta parcial 0 lo encontró
								{	
									
									
									var piii = 0; // Privada(1) Pública(0)
									var tiii = 1; // Orden de generar la tabla parcial wPAPA#
									
									
									
									if(!wPAPA1[j][17]) // wPAPA1[j][17] = 0, privada Ruta parcial privada se requiere pin de verificación
									{	console.log('&&&&&&&&&&& ruta parcial privada');
										
										
										piii = 1; // Privada para las siguientes rutas parciales
										

										// Validar el pin
										var rE = f0157(u,i,p,v,f,d,c); // VERIFICAR el pin de las rutas privadas
										u = rE.u;
										i = rE.i;
										p = rE.p;
										v = rE.v;
										f = rE.f;
										d = rE.d;
										c = rE.c;
										if(p) // Si el pin es valido para continuar..
										{	
																						
											// Revizar si este bloque va o no va..
											//console.log(' Pin valido para continuar p=',p,'; i=',i);
											f = 1; // Pre validación de la ruta parcial
											if((v + 1)==c) // Si es la última ruta parcial solo falta verificar que no tenga hijos para ser valida
											{	for(var k = 1; k<(vPAPA2.length); k++) // No arranca desde 0 sino de 1 por el id 1 valido
												{	if(vPAPA2[k][2]==ArRay[5])// Si existe una otra ruta parcial, encontró un elemento cuyo padre es la ruta parcial
													{	f = 0; // Cancelar la verificación porque la ruta parcial tiene más hijos, es una ruta parcial incompleta que debería tener más elementos
														console.log(' Cancelado por tener hijos f=',f);
														k = vPAPA2.length; // Termina la busqueda de hijos
													}
												}
											}

										}
										else // No paso la verificación del pin
										{	tiii = 0; // Cancela la orden de generar la tabla parcial wPAPA#
										}
									}
									if(tiii)
									{								
										f0153(n); // BORRAR y ACTUALIZAR wPAPA# {# = j + 1} ... wPAPA2,wPAPA3...wPAPA10 
										
										///////var diii = 0;													// (1) DOBLE botón: público(id=1) + privado(id=2) / (0) Botón de público(id=1)
										///////var siii = 0;													// Sugerencia id ruta parcial hija
										/////////var z;
										///////
										/////////wPAPA2 = [];										// BORRA wPAPA<#> {# = j + 1}		
										///////wPAPA2[1] = [];										// CREA la primer fila de la lista wPAPA#[1] {# = j + 1} exclusiva para la ruta parcial del padre pero con id[0]=1
										///////for (var z = 0; z < vPAPA0[0].length; z++)			// RECORRE vPAPA0[0] que tiene un valor constante por defecto
										///////{	wPAPA2[1][z] = vPAPA0[0][z];					// ASIGNA a la primer fila el valor id[1][1]=1
										/////////}
				
										var riii = 1; // Fila 1
										//for() // Copia toda la fila de wPAPA1 modificada con todo el territorio
										{	// cargar wPAPA2[riii] la fila 1 (riii) con la fila del padre Todo eel territorio
											riii++; // Alistar el numero de la siguiente fila
										}
										if(piii)
										{	//for() // Copia toda la fila de wPAPA1 modificada con Información privada
											{	// cargar wPAPA2[riii] la fila 2 (riii) con la fila del padre Información privada
											}
											riii++; // Alistar el numero de la siguiente fila
										}
										for(var g=1; g>= vPAPA2.length; g++)
										{	if(vPAPA2[g][2]==papas[i]) // Ese elemento tiene como padre a la ruta parcial
											{	//for() // Copia toda la fila de vPAPA2
												{ 	// cargar wPAPA2[riii] con la vPAPA2[g] (riii) con la fila

												}
												wPAPA2[rrri][1]=rrri // Actualizar el conteo parcial de los elementos encontrados

											}

										}
										// Asignar el id para el siguiente papas usando la tabla wPAPA2 recien creada
										papas[6] = 9999999; // papas[6] igual a la Sugerencia o al primer elemento de la lista
									}
									else
									{	i = 15; // Detiene la generación de nuevas tablas parciales
									}
									j = wPAPA1.length;
								}
							}
						break;
						// case 6:

/*

				var d = 0;													// (1) DOBLE botón: público(id=1) + privado(id=2) / (0) Botón de público(id=1)
				var s = 0;													// Sugerencia id ruta parcial hija
				//console.error('-_____________-____________-___________f0153(j=',j,')');
				switch(j)
				{	case 1:				// HUBO movimiento en un hijo del nivel anterior wPAPA<#->, o ES la ruta madre que se va a cargar por primer vez, la ruta parcial wPAPA<#> cambia o se crea por primer vez											
						wPAPA2 = [];										// BORRA wPAPA<#> {# = j + 1}		
						wPAPA2[1] = [];										// CREA la primer fila de la lista wPAPA#[1] {# = j + 1} exclusiva para la ruta parcial del padre pero con id[0]=1
						for (var z = 0; z < vPAPA0[0].length; z++)			// RECORRE vPAPA0[0] que tiene un valor constante por defecto
						{	wPAPA2[1][z] = vPAPA0[0][z];					// ASIGNA a la primer fila el valor id[1][1]=1
						}
						for (var a = 1; a < wPAPA1.length; a++)  			// Recorre toda la lista parcial del nivel superior {wPAPA<#-1>}
						{ 	if(wPAPA1[a][0] == papas[j+4])					// Recorre el id de cada uno de hijos del nivel superior {wPAPA<#-1>[*][0]} y detecta aquel que sea igual al id de la ruta parcial del padre {papas[j+4]}
							{ 	if(f)// Es la ruta madre
								{	s = papas[j+5];
									console.log('- - - Es la ruta madre, sigue por la ruta madre s=',s);
								}
								else// Si no es la ruta madre, siga la sugerencia
								{	s = wPAPA1[a][15];							// Guarda el valor sugerido como hijo para esa ruta parcial
									console.log('- - - No es la ruta madre.. sigue por ruta hija sugerida s=',s);
									console.log('- - - Pero antes hay que revizar si la sugerencia cumple, es valida y no requiere pin de privado');
								}
								for (var b = 3+ext; b < wPAPA1[a].length; b++)	// Recorre desde los strings (3+ext) de la lista parcial del nivel superior
								{	wPAPA2[1][b] = wPAPA1[a][b]+': '+vPAPA0[0][b]; // Cambia todos los strings de la fila 1 de wPAPA<#> por los mismos strings del padre en la lista parcial del nivel superior wPAPA<#-1> y le adiciona el texto de ': publicado en todo el territorio'
								}
								if((!wPAPA1[a][17])&&(ArRay[2] === "C1"))				// Si ese lugar es privado (oculto) y tiene su pin correcto entonces debe generar el boton 2 de privado
								{	d = 1;												// Incluye el segundo botón de privado con id=2
									wPAPA2[2] = [];
									for (var z = 0; z < vPAID2[0].length; z++)			// RECORRE vPAPA0[0] que tiene un valor constante por defecto
									{	wPAPA2[2][z] = vPAID2[0][z];					// ASIGNA a la primer fila el valor id[1][1]=1
									}
									for (var b = 3+ext; b < wPAPA1[a].length; b++)		// Recorre desde los strings (3+ext) de la lista parcial del nivel superior
									{	wPAPA2[2][b] = wPAPA1[a][b]+': '+vPAID2[0][b]; 	// Cambia todos los strings de la fila 1 de wPAPA<#> por los mismos strings del padre en la lista parcial del nivel superior wPAPA<#-1> y le adiciona el texto de ': información privada'
									}
								}
								a = wPAPA1.length;							// Termina la busqueda y también de completar la fila 1 de la tabla parcial wPAPA# de *****: publicado en todo el territorio
							} 
						}
						if(d) // inicia desde id=3
						{	ff = 3;					// ID inicial para los lugares de la lista parcial
						}
						else // inicia desde id=2
						{	ff = 2;					// ID inicial para los lugares de la lista parcial
						}
						go = 1;	// Buscar un lugar para asignarselo a la ruta parcial papas[j+5] este puede ser por defecto (el primer hijo valido que se encuentre) o el sugerido por papas1[j] (tiene prioridad la sug)
						for (var i = 1; i < vPAPA2.length; i++)				// Recorre el array de todos los lugares de vPAPA<#>  // mira si coincide con la sugerencia y es un hijo 
						{ 	if(vPAPA2[i][2] == papas[j+4])					// Si ese lugar es un hijo de la ruta parcial anterior (papas[j+4])
							{ 	if(vPAPA2[i][0] == s)						// Sugerencia o ruta parcial Madre encontrada
								{	go = 0;									// El hijo encontrado es sugerencia de ruta parcial => Va a asignar o a cambiar la ruta parcial a papas[j+5] provisional que este en ese momento por defecto por (*)
									papas[j+5]=s;							// La ruta parcial papas[j+5] cambia por:___ la sugerida
								}
								wPAPA2[ff] = []; 							// Crea una fila vacia
								for (var k = 0; k < vPAPA2[i].length; k++) 	// Recorre una a una todas las casillas de ese lugar en la tabla vPAPA<#>[i] {# = j + 1}
								{	wPAPA2[ff][k] = vPAPA2[i][k];			// Asigna a la fila creada en tabla parcial wPAPA<#> cada uno de los valores de ese lugar hijo tomandolos de la tabla vPAPA<#>
								}
								wPAPA2[ff][1] = ff; 						// Genera el número ordenado de la lista
								ff++;										// Avance a la siguiente fila
								if(!f && go)									// Si viene m y no encontró sugerencia de ruta parcial                 // tiene que la ruta media
								{	go = 0; 								// (*) Va a asignar ruta parcial a papas[j+5] provisional por defecto (El primer hijo que se encontró)
									papas[j+5] = vPAPA2[i][0]; 				// La ruta parcial papas[j+5] cambia por:__ el primer id del hijo que encuentre
								}
							}
						}


/////////////////////777777
									for(var j = 1; j<(vPAPA1.length); j++)
									{	//console.log(i,' j=',j,'vPAPA1[j][0]=',vPAPA1[j][0]);
										if(ArRay[5]==vPAPA1[j][0]) // El id hijo en la ruta parcial 0 si está
										{	console.log('Encontró la ruta parcial con ese id');
											if(vPAPA1[j][16]>0) // Ruta personalizada
											{	t = vPAPA1[j][16]; // Código de la ruta personalizada
												console.error('Ruta personalizada t=',t);
											};
											if(!vPAPA1[j][17]) // vPAPA1[j][17] = 0, privada
											{	var rE = f0157(u, i, p, v, f, d, c); // VERIFICAR el pin de las rutas privadas
											....}
											if(p) // Si el pin es valido para continuar..
											{	//console.log(' Pin valido para continuar p=',p,'; i=',i);
												f = 1; // Pre validación de la ruta parcial
												if((v + 1)==c) // Si es la última ruta parcial solo falta verificar que no tenga hijos para ser valida
												{	for(var k = 1; k<(vPAPA2.length); k++) // No arranca desde 0 sino de 1 por el id 1 valido
													{	if(vPAPA2[k][2]==ArRay[5])// Si existe una otra ruta parcial, encontró un elemento cuyo padre es la ruta parcial
														{	f = 0; // Cancelar la verificación porque la ruta parcial tiene más hijos, es una ruta parcial incompleta que debería tener más elementos
															console.log(' Cancelado por tener hijos f=',f);
															k = vPAPA2.length; // Termina la busqueda de hijos
														}
													}
												}
											}
											j = vPAPA1.length; // Termina la busqueda	


*/
//////////////////////////////////			function 
//////////////////////////////////			f0157(u,i,p,v,f,d,c) // VERIFICAR el pin de las rutas privadas
//////////////////////////////////			{	lOG(157);
//////////////////////////////////				u = 0; // Ruta privada
//////////////////////////////////				console.error(' -X-X-X- Encontró la ruta parcial ',i+2,' pero se requiere pin de validación por ruta privada! -X-X-X- u=',u,'; p=',p);
//////////////////////////////////				if(!aPrO) // Pin a: Si pin a NO es correcto (a=0)
//////////////////////////////////				{	if((v + 1)==c) // Si sólo falta una verificación
//////////////////////////////////					{	f = 1; // Pre validación de la ruta parcial
//////////////////////////////////						u = 1; // Ruta pública
//////////////////////////////////						console.log('Valido porque corto a las rutas parciales hijas f=',f);
//////////////////////////////////					}
//////////////////////////////////					else
//////////////////////////////////					{	console.log('Ruta NO Valida porque NO corta a las rutas parciales hijas f=',f);
//////////////////////////////////					}
//////////////////////////////////					p = 0; // Pin no valido
//////////////////////////////////					console.log(' Pin no valido p=',p);
//////////////////////////////////					i = c; // Termina todo, no hará más validaciones de rutas parciales
//////////////////////////////////				}
//////////////////////////////////				else // Si pin a ES correcto (a=1)
//////////////////////////////////				{	d = 1; // Pre verificación activada de un id 2 valido como ruta parcial hija
//////////////////////////////////					console.log(' Pin VALIDO! p=',p,'; Pre-Verificación del 2 d=',d);
//////////////////////////////////				}
//////////////////////////////////				return {u,i,p,v,f,d,c};
//////////////////////////////////			}

/*
											if(!vPAPA1[j][17]) // vPAPA1[j][17] = 0, privada
											{	var rE = f0157(u, i, p, v, f, d, c); // VERIFICAR el pin de las rutas privadas
												u = rE.u;
												i = rE.i;
												p = rE.p;
												v = rE.v;
												f = rE.f;
												d = rE.d;
												c = rE.c;
											}
											if(p) // Si el pin es valido para continuar..
											{	//console.log(' Pin valido para continuar p=',p,'; i=',i);
												f = 1; // Pre validación de la ruta parcial
												if((v + 1)==c) // Si es la última ruta parcial solo falta verificar que no tenga hijos para ser valida
												{	for(var k = 1; k<(vPAPA2.length); k++) // No arranca desde 0 sino de 1 por el id 1 valido
													{	if(vPAPA2[k][2]==ArRay[5])// Si existe una otra ruta parcial, encontró un elemento cuyo padre es la ruta parcial
														{	f = 0; // Cancelar la verificación porque la ruta parcial tiene más hijos, es una ruta parcial incompleta que debería tener más elementos
															console.log(' Cancelado por tener hijos f=',f);
															k = vPAPA2.length; // Termina la busqueda de hijos
														}
													}
												}
											}
*/





					}
				}

//// fin  ??????