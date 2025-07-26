//mI: matriz Inversa

/*
plantillas para la mI (matriz Inversa):
[['Casillas', 1, 2, 3, 4],
[1, [],[],[],[]],
[2, [],[],[],[]],
[3, [],[],[],[]],
[4, [],[],[],[]],
[5, [],[],[],[]],
[6, [],[],[],[]],
[7, [],[],[],[]],
[8, [],[],[],[]],
[9, [],[],[],[]],
[10,[],[],[],[]],
[11,[],[],[],[]],
[12,[],[],[],[]],
[13,[],[],[],[]],
[14,[],[],[],[]],
[15,[],[],[],[]],
[16,[],[],[],[]],
[17,[],[],[],[]],
[18,[],[],[],[]],
[19,[],[],[],[]],
[20,[],[],[],[]],
[21,[],[],[],[]],
[22,[],[],[],[]],
[23,[],[],[],[]],
[24,[],[],[],[]],
[25,[],[],[],[]],
[26,[],[],[],[]],
[27,[],[],[],[]],
[28,[],[],[],[]],
[29,[],[],[],[]],
[30,[],[],[],[]],
[31,[],[],[],[]],
[32,[],[],[],[]],
[33,[],[],[],[]],
[34,[],[],[],[]],
[35,[],[],[],[]],
[36,[],[],[],[]],
[37,[],[],[],[]]

['Recursos/ Casillas..', '1 0:Imag,1:Icon,2:Texto,3ImagenA,4VideoA', '2 id de la Imag, Icon o Texto', '3 onclick function, vacio=NO PERMITIDA(INFO)', '4 Visible 1:SI 0:no', '5 0:FotI 1:Vide 2:FotM 3:Text 4:In 5:Out', '6 id Video([5]1) o id foto([5]0/2)', '7 id Texto Icono', '8 ids Iconos Capa1', '9 ids Iconos Capa2', '10 Capa3 Estado 0: 1:/ 2:_ 3: ? 4: -'],
[1, [],[],[],[],[],[],[],[],[],[]],
[2, [],[],[],[],[],[],[],[],[],[]],
[3, [],[],[],[],[],[],[],[],[],[]],
[4, [],[],[],[],[],[],[],[],[],[]],
[5, [],[],[],[],[],[],[],[],[],[]],
[6, [],[],[],[],[],[],[],[],[],[]],
[7, [],[],[],[],[],[],[],[],[],[]],
[8, [],[],[],[],[],[],[],[],[],[]],
[9, [],[],[],[],[],[],[],[],[],[]],
[10,[],[],[],[],[],[],[],[],[],[]],
[11,[],[],[],[],[],[],[],[],[],[]],
[12,[],[],[],[],[],[],[],[],[],[]],
[13,[],[],[],[],[],[],[],[],[],[]],
[14,[],[],[],[],[],[],[],[],[],[]],
[15,[],[],[],[],[],[],[],[],[],[]],
[16,[],[],[],[],[],[],[],[],[],[]],
[17,[],[],[],[],[],[],[],[],[],[]],
[18,[],[],[],[],[],[],[],[],[],[]],
[19,[],[],[],[],[],[],[],[],[],[]],
[20,[],[],[],[],[],[],[],[],[],[]],
[21,[],[],[],[],[],[],[],[],[],[]],
[22,[],[],[],[],[],[],[],[],[],[]],
[23,[],[],[],[],[],[],[],[],[],[]],
[24,[],[],[],[],[],[],[],[],[],[]],
[25,[],[],[],[],[],[],[],[],[],[]],
[26,[],[],[],[],[],[],[],[],[],[]],
[27,[],[],[],[],[],[],[],[],[],[]],
[28,[],[],[],[],[],[],[],[],[],[]],
[29,[],[],[],[],[],[],[],[],[],[]],
[30,[],[],[],[],[],[],[],[],[],[]],
[31,[],[],[],[],[],[],[],[],[],[]],
[32,[],[],[],[],[],[],[],[],[],[]],
[33,[],[],[],[],[],[],[],[],[],[]],
[34,[],[],[],[],[],[],[],[],[],[]],
[35,[],[],[],[],[],[],[],[],[],[]],
[36,[],[],[],[],[],[],[],[],[],[]],
[37,[],[],[],[],[],[],[],[],[],[]]
*/

//d DATOS: CONSTANTES Y VARIABLES
/*	constantes ocultas para las rutas "padres" e "hijos".. 
			  ... hay varias tanto var como const todas del tipo array
	funciones ocultas para ser usadas en el servidor.. 
		f0128()	... f0137()
	constantes visibles para ser usadas en la aplicaciíon (frontend): son varias
	funciones visibles para el Morse vibrado: son varias al final de este archivo

	NOTA!! de este archivo hay que extraer las constantes y variables tipo JSON que van pára la base de datos MongoDB
*/



/*
NOTA: PARA OBTENER ESTAS CONSTANTES SE HACE USO DE LAS FUNCIONES f0128() A LA f0137(), 
estas funciones están ocultas arriba para activarlas hay que ctivar el interruptor 1 y desactivar el interruptor 2

para activar/desactivar separe/una (con un espacio) el último * de la barra inclinada / , ejemplo * /
*/

//1
//ext hij# hijos rutas vPAPA# wPapa# f0128 - f0137 objetivo DETECTAR los hijos de wPAPA, es decir los lugares hijo
/* inicio interruptor 1 incluye f0128 a f0137* /
//============================================================
//PASAR al servidor
const   ext				= 5;//desde la columna 3 wPapax[x][3,4,5- ene extras] casillas que se corren los strings por casillas especiales/extras en wPapax, en este momento se crearon 5 casillas extra para alimentar la presentación AV
var 	hij1 			= [];//array de hijos 1
var 	hij2 			= [];//array de hijos 2
var 	hij3 			= [];//array de hijos 3
var 	hij4 			= [];//array de hijos 4
var 	hij5 			= [];//array de hijos 5
var 	hij6 			= [];//array de hijos 6
var 	hij7 			= [];//array de hijos 7
var 	hij8			= [];//array de hijos 8
var 	hij9 			= [];//array de hijos 9
var 	hij10 			= [];//array de hijos 10
var 	hijos			= [];//array de todos los hijos (end points)
var 	rutas 			= [];//array con todas las rutas
var 	vPAPA1 			= [];//Array visible de wPapa1
var 	vPAPA2 			= [];//Array visible de wPapa2
var 	vPAPA3 			= [];//Array visible de wPapa3
var 	vPAPA4 			= [];//Array visible de wPapa4
var 	vPAPA5 			= [];//Array visible de wPapa5
var 	vPAPA6 			= [];//Array visible de wPapa6
var 	vPAPA7 			= [];//Array visible de wPapa7
var 	vPAPA8 			= [];//Array visible de wPapa8
var 	vPAPA9 			= [];//Array visible de wPapa9
var 	vPAPA10 		= [];//Array visible de wPapa10

//wPapa# listas de cada uno de los subterritorios, en el mismo nivel de subdivisión, ordenados alfabeticamente en la columna 0 (del idioma ingles) puede contener elementos no visibles
//wPAPA# listas sPapa# sin elementos no visibles

const	wPapa1		= 	[	['0-En ingles(lista ordenada)'		,'1-Abrev.int.'	,'2-id:key strings app'	,'3-Estado:Visible1 off0(Ocultar)'	,'4-Vacio'		,'5-Id color marco'	,'6-id logo'	,'7-idImagen'	,'8-idMapa' ,'9-ID QR CODE'	,'5/10-Español'		,'6/11-frances'			,'7/12-coreano'],
							['Africa'							,'af'			,8						,1									,0				,10					,5				,5				,20 		,5 				,'África'			,'Afrique'				,'아프리카'],
							['Antarctica' 						,'an'			,2						,1									,0				,10					,5				,5				,26 		,5 				,'Antártica'		,'Antarctique'			,'남극 대륙'],
							['Asia'								,'as'			,3						,1									,0				,10					,5				,5				,22 		,5 				,'Asia'				,'Asie'					,'아시아'],
							['Europe'							,'eu'			,4						,1									,0				,10					,5				,5				,23 		,5 				,'Europa'			,"L'Europe"				,'유럽'],
							['North America'					,'na'			,5						,1									,0				,10					,5				,5				,24			,5 				,'Norte América'	,'Amérique du Nord'		,'북아메리카'],
							['Oceania'							,'oc'			,6						,1									,0				,10					,5				,5				,21 		,5 				,'Oceanía'			,'Océanie'				,'오세아니아'],
							['South America' 					,'sa'			,7						,1									,0				,10					,5				,5				,25 		,5 				,'Sur América'		,'Amérique du Sud'		,'남아메리카'],
						];
const	wPapa2		= 	[	['0-En ingles(lista ordenada)'		,'1-Abrev.int.'	,'2-id:key strings app'	,'3-Estado:Visible1 off0(Ocultar)'	,'4-IdPapa1'	,'5-Id color marco'	,'6-id logo'	,'7-idImagen'	,'8-idMapa' ,'9-ID QR CODE'	,'5/10-Español'				,'6/11-frances'					,'7/12-coreano'],
							['Argentina'						,'ar'			,7						,1									,7				,6					,61				,5				,27 		,5 				,'Argentina'				,'Argentine'					,'아르헨티나'],
							['Australia'						,'au'			,10						,1									,6				,6					,62				,5				,29 		,5 				,'Australia'				,'Australie'					,'호주'],
							['Colombia'							,'co'			,11						,1									,7				,9					,63				,5				,30 		,5 				,'Colombia'					,'Colombie'						,'콜롬비아'],
							['Equatorial Guinea'				,'gq'			,8						,1									,1				,4					,64				,5				,31 		,5 				,'Guinea Ecuatorial'		,'Guinée équatoriale'			,'적도 기니'],
							['France'							,'fr'			,6						,1									,4				,6					,65				,5				,32 		,5 				,'Francia'					,'France'						,'프랑스'],
							['Mexico'							,'mx'			,4						,1									,5				,4					,66				,5				,33 		,5 				,'México'					,'Mexique'						,'멕시코'],
							['South Korea'						,'kr'			,5						,1									,3				,6					,67				,5				,34 		,5 				,'Corea del Sur'			,'Corée du Sud'					,'대한민국'],
							['Spain'							,'sp'			,3						,1									,4				,3					,68				,5				,35 		,5 				,'España'					,'Espagne'						,'스페인'],
							['Trinidad Peninsula'				,'trp'			,9						,1									,2				,6					,69				,5				,42 		,5 				,'Península Trinidad'		,'Péninsule de Trinidad'		,'트리니다드 반도'],
							['United States of America'			,'us'			,2						,1									,5				,6					,70				,5				,37 		,5 				,'Estados Unidos de América','les états-unis d\'Amérique'	,'아메리카 합중국'],
						];
const 	wPapa3		=   [	['0-En ingles(lista ordenada)'		,'1-Abrev.int.'	,'2-id:key strings app'	,'3-Estado:Visible1 off0(Ocultar)'	,'4-IdPapa2'	,'5-Id color marco'	,'6-id logo'	,'7-idImagen'	,'8-idMapa' ,'9-ID QR CODE'	,'5-Español'			,'6-frances'				,'7-coreano'],
							['Andalusia'						,'and'			,7						,1									,3				,4					,71				,5				,38 		,5 				,'Andalucía'			,'Andalousie'				,'안달루시아'],
							['Antioquia'						,'ant'			,3						,1									,1				,4					,72				,5				,39 		,5 				,'Antioquia'			,'Antioche'					,'남극 대륙'],
							['Bogota'							,'bog'			,8						,1									,1				,9					,73				,5				,28 		,5 				,'Bogotá'				,'Bogota'					,'보고타'],
							['Boyaca'							,'boy'			,4						,1									,1				,4					,74				,5				,40			,5 				,'Boyacá'				,'Boyaca'					,'보야카'],
							['Cundinamarca'						,'cun'			,9						,1									,1				,3					,75				,5				,41			,5 				,'Cundinamarca'			,'Cundinamarca'				,'쿤디나마르카'],
							['Hope Bay'							,'hob'			,5						,1									,9				,6					,76				,5				,36			,5 				,'Bahía Esperanza'		,"Baie de l'Espoir"			,'호프 베이'],
							['Madrid\'s community'				,'mac'			,6						,1									,3				,9					,77				,5				,43 		,5 				,'Comunidad de Madrid'	,'La communauté de Madrid'	,'마드리드의 커뮤니티'],
							['Narino'							,'nar'			,2						,1									,1				,12					,78				,5				,44 		,5 				,'Nariño'				,'Nariño'					,'나리노'],
						];
const 	wPapa4		=   [	['0-En ingles(lista ordenada)'		,'1-Abrev.app.'	,'2-id:key strings app'	,'3-Estado:Visible1 off0(Ocultar)'	,'4-IdPapa3'	,'5-Id color marco'	,'6-id logo'	,'7-idImagen'	,'8-idMapa' ,'9-ID QR CODE'	,'5-Español'				,'6-frances'				,'7-coreano'],
							['Cali'								,'cal'			,9						,0									,0				,4					,60				,5				,5 			,5 				,'Cali'						,'Cali'						,'칼리'],
							['location Chapinero'				,'cha'			,2						,1									,8				,9					,73				,5				,45 		,5 				,'localidad Chapinero'		,'localité Chapinero'		,'위치 차피네로'],
							['location Kenedy'					,'ken'			,3						,1									,8				,9					,73				,5				,46 		,5 				,'localidad Kenedy'			,'localité Kenedy'			,'위치 케네디'],
							['location Puente Aranda'			,'pua'			,4						,1									,8				,9					,73				,5				,47 		,5 				,'localidad Puente Aranda'	,'localité Puente Aranda'	,'위치 푸엔테 아란다'],
							['location Usaquen'					,'usa'			,5						,1									,8				,9					,73				,5				,48 		,5 				,'localidad Usaquén'		,'localité Usaquén'			,'위치 우사켄'],
							['Madrid'							,'mad'			,6						,1									,6				,9					,79				,5				,49 		,5 				,'Madrid'					,'Madrid'					,'커뮤니티'],
							['Medellin'							,'med'			,7						,1									,3				,4					,80				,5				,50 		,5 				,'Medellín'					,'Medellín'					,'메델린'],
							['Pasto'							,'pas'			,8						,1									,2				,12					,81				,5				,51 		,5 				,'Pasto'					,'Pasto'					,'파스토'],	
						];
const 	wPapa5		=   [	['0-En ingles(lista ordenada)'		,'1-Abrev.app.'	,'2-id:key strings app'	,'3-Estado:Visible1 off0(Ocultar)'	,'4-IdPapa4'	,'5-Id color marco'	,'6-id logo'	,'7-idImagen'	,'8-idMapa' ,'9-ID QR CODE' ,'5-Español'				,'6-frances'						,'7-coreano'				],
							['Catalonia neighborhood'			,'cat'			,8						,1									,2				,3					,73				,5				,52			,5 				,'barrio Cataluña'			,'quartier Catalogne'				,'카탈로니아 인근'				],
							['Central Chapinero neighborhood'	,'chc'			,2						,1									,2				,3					,73				,5				,53			,5 				,'barrio Chapinero Central'	,'quartier Central de Chapinero'	,'중앙 차피네로 지역'			],
							['North Chapinero neighborhood'		,'chn'			,3						,1									,2				,3					,73				,5				,54			,5 				,'barrio Chapinero Norte'	,'quartier Nord de Chapinero'		,'노스 차피네로 인근'			],
							['Marly neighborhood'				,'mar'			,4						,1									,2				,3					,73				,5				,55			,5 				,'barrio Marly'				,'quartier Marneux'					,'말리 동네'					],
							['Porciuncula neighborhood'			,'por'			,7						,1									,2				,3					,73				,5				,56			,5 				,'barrio Porciúncula'		,'quartier Porciuncula'				,'포르시운쿨라 인근'				],
							['Quinta Camacho neighborhood'		,'quc'			,6						,1									,2				,3					,73				,5				,57			,5 				,'barrio Quinta Camacho'	,'quartier Quinta Camacho'			,'퀸타 카마초 인근'				],
							['Sucre neighborhood'				,'suc'			,5						,1									,2				,3					,73				,5				,58			,5 				,'barrio Sucre'				,'quartier Sucré'					,'수크레 동네'					],
						  //['UPZ Chapinero Centro'				,'chc'			,5*						,1									,2				,11					,5				,5				,5 			,5 				,'UPZ Chapinero Centro'		,'UPZ Chapinero Centro'		,'UPZ Chapinero Centro'		],
						  //['UPZ Chicó Lago'					,'chl'			,4*						,1									,2				,11					,5				,5				,5 			,5 				,'UPZ Chicó Lago'			,'UPZ Chicó Lago'			,'UPZ Chicó Lago'			],
						  //['UPZ El Refugio'					,'elr'			,1*						,1									,2				,11					,5				,5				,5 			,5 				,'UPZ El Refugio'			,'UPZ El Refugio'			,'UPZ El Refugio'			],
						  //['UPZ El Verjón Bajo'				,'elv'			,6* 					,1									,2				,11					,5				,5				,5 			,5 				,'UPZ El Verjón Bajo'		,'UPZ El Verjón Bajo'		,'UPZ El Verjón Bajo'		],
						  //['UPZ Pardo Rubio'					,'par'			,3*						,1									,2				,11					,5				,5				,5 			,5 				,'UPZ Pardo Rubio'			,'UPZ Pardo Rubio'			,'UPZ Pardo Rubio'			],
						  //['UPZ San Isidro Patios'			,'sai'			,2*						,1									,2				,11					,5				,5				,5 			,5 				,'UPZ San Isidro Patios'	,'UPZ San Isidro Patios'	,'UPZ San Isidro Patios'	],
						];
const 	wPapa6		=   [	['0-En ingles(lista ordenada)'		,'1-Abrev.int.'	,'2-id:key strings app'	,'3-Estado:Visible1 off0(Ocultar)'	,'4-IdPapa5'	,'5-Id color marco'	,'6-id logo'	,'7-idImagen'	,'8-idMapa' ,'9-ID QR CODE' ,'5-Español'				,'6-frances'				,'7-coreano'				],						
						//	['barrio Cataluña'					,'cat'			,8*						,1									,5				,6					,5				,5				,5 			,5 				,'Cataluña, barrio'			,'Cataluña, barrio'			,'Cataluña, barrio'			],
						//	['barrio Chapinero Central'			,'chc'			,2*						,1									,5				,6					,5				,5				,5 			,5 				,'Chapinero Central, barrio','Chapinero Central, barrio','Chapinero Central, barrio'],
						//	['barrio Chapinero Norte'			,'chn'			,3*						,1									,5				,6					,5				,5				,5 			,5 				,'Chapinero Norte, barrio'	,'Chapinero Norte, barrio'	,'Chapinero Norte, barrio'	],
						//	['barrio Marly'						,'mar'			,4*						,1									,5				,6					,5				,5				,5 			,5 				,'Marly, barrio'			,'Marly, barrio'			,'Marly, barrio'			],
						//	['barrio Porciúncula'				,'por'			,7*						,1									,4				,6					,5				,5				,5 			,5 				,'Porciúncula'				,'Porciúncula'				,'Porciúncula'				],
						//	['barrio Quinta Camacho'			,'quc'			,6*						,1									,4				,6					,5				,5				,5 			,5 				,'Quinta Camacho'			,'Quinta Camacho'			,'Quinta Camacho'			],
						//	['barrio Sucre'						,'suc'			,5*						,1									,5				,6					,5				,5				,5 			,5 				,'Sucre, barrio'			,'Sucre, barrio'			,'Sucre, barrio'			],
						];
const 	wPapa7		=   [	['0-En ingles(lista ordenada)'		,'1-Abrev.app.'	,'2-id:key strings app'	,'3-Estado:Visible1 off0(Ocultar)'	,'4-IdPapa6'	,'5-Id color marco'	,'6-id logo'	,'7-idImagen'	,'8-idMapa' ,'9-ID QR CODE' ,'5-Español'					,'6-frances'					,'7-coreano'				],
						//	['calle 51,52 y carrera 13,14'		,'c52k13'		,8*						,1									,2				,5					,5				,5				,5 			,5 				,'calle 51,52 y carrera 13,14'	,'calle 51,52 y carrera 13,14'	,'calle 51,52 y carrera 13,14'],
						//	['calle 52,53 y carrera 13,14'		,'c52k14'		,2*						,1									,2				,5					,5				,5				,5 			,5 				,'calle 52,53 y carrera 13,14'	,'calle 52,53 y carrera 13,14'	,'calle 52,53 y carrera 13,14'],						
						//	['calle 52,53 y carrera 15,16'		,'c52k15'		,3*						,1									,2				,5					,5				,5				,5 			,5 				,'calle 52,53 y carrera 15,16'	,'calle 52,53 y carrera 15,16'	,'calle 52,53 y carrera 15,16'],									
						//	['calle 53,54 y carrera 10,11'		,'c53k10'		,4*						,1									,2				,5					,5				,5				,5 			,5 				,'calle 53,54 y carrera 10,11'	,'calle 53,54 y carrera 10,11'	,'calle 53,54 y carrera 10,11'],					
						//	['calle 53,54 y carrera 11,12'		,'c53k11'		,7*						,1									,2				,5					,5				,5				,5 			,5 				,'calle 53,54 y carrera 11,12'	,'calle 53,54 y carrera 11,12'	,'calle 53,54 y carrera 11,12'],						
						//	['calle 53,54 y carrera 12,13'		,'c53k12'		,6*						,1									,2				,5					,5				,5				,5 			,5 				,'calle 53,54 y carrera 12,13'	,'calle 53,54 y carrera 12,13'	,'calle 53,54 y carrera 12,13'],
						//	['calle 53,54 y carrera 13,14'		,'c53k13'		,5*						,1									,2				,5					,5				,5				,5 			,5 				,'calle 53,54 y carrera 13,14'	,'calle 53,54 y carrera 13,14'	,'calle 53,54 y carrera 13,14'],				
						];
const 	wPapa8		=   [	['0-En ingles(lista ordenada)'		,'1-Abrev.int.'	,'2-id:key strings app'	,'3-Estado:Visible1 off0(Ocultar)'	,'4-IdPapa7'	,'5-Id color marco'	,'6-id logo'	,'7-idImagen'	,'8-idMapa' ,'9-ID QR CODE' ,'5-Español'					,'6-frances'					,'7-coreano'			],
						//	['Banco de Bogotá'					,'bab'			,6*						,1									,4				,3					,5				,5				,5 			,5 				,'Banco de Bogotá'				,'Banco de Bogotá'				,'Banco de Bogotá'		],
						//	['Banco Caja Social'				,'bac'			,4*						,1									,7				,3					,5				,5				,5 			,5 				,'Banco Caja Social'			,'Banco Caja Social'			,'Banco Caja Social'	],
						//	['Banco Davivienda'					,'bad'			,5*						,1									,7				,3					,5				,5				,5 			,5 				,'Banco Davivienda'				,'Banco Davivienda'				,'Banco Davivienda'		],			
						//	['Exito, almacén'					,'exi'			,3*						,1									,2				,3					,5				,5				,5 			,5 				,'Exito, almacén'				,'Exito, almacén'				,'Exito, almacén'		],
						//	['Rapi CADE'						,'rac'			,7*						,1									,4				,3					,5				,5				,5 			,5 				,'Rapi CADE'					,'Rapi CADE'					,'Rapi CADE'			],
						//	['SENA, calle 52'					,'s52'			,8*						,1									,1				,3					,5				,5				,5 			,5 				,'SENA, calle 52'				,'SENA, calle 52'				,'SENA, calle 52'		],
						//	['TecnoParque Colombia'				,'tec'			,2*						,1									,4				,3					,5				,5				,5 			,5 				,'TecnoParque Colombia'			,'TecnoParque Colombia'			,'TecnoParque Colombia'	],		
						];
const 	wPapa9		=   [	['0-En ingles(lista ordenada)'		,'1-Abrev.int.'	,'2-id:key strings app'	,'3-Estado:Visible1 off0(Ocultar)'	,'4-IdPapa8'	,'5-Id color marco'	,'6-id logo'	,'7-idImagen'	,'8-idMapa' ,'9-ID QR CODE' ,'5-Español'					,'6-frances'					,'7-coreano'				],
						//	['Biotecnología'					,'bio'			,6*						,1									,2				,12					,5				,1				,3		 	,5 				,'Biotecnología'				,'Biotecnología'				,'Biotecnología'			],
						//	['Electrónica'						,'ele'			,4*						,1									,2				,6					,5				,4				,3		 	,5 				,'Electrónica'					,'Electrónica'					,'Electrónica'				],
						//	['InfoCenter'						,'inc'			,5*						,1									,2				,13					,5				,18				,3		 	,5 				,'InfoCenter'					,'InfoCenter'					,'InfoCenter'				],
						//	['Ingeniería y Diseño'				,'ind'			,3*						,1									,2				,3					,5				,16				,3		 	,5 				,'Ingeniería y Diseño'			,'Ingeniería y Diseño'			,'Ingeniería y Diseño'		],
						//	['Tecnologías Virtuales'			,'tev'			,2*						,1									,2				,5					,5				,20				,3		 	,5 				,'Tecnologías Virtuales'		,'Tecnologías Virtuales'		,'Tecnologías Virtuales'	],				
						];
const 	wPapa10		=   [	['0-En ingles(lista ordenada)'		,'1-Abrev.int.'	,'2-id:key strings app'	,'3-Estado:Visible1 off0(Ocultar)'	,'4-IdPapa9'	,'5-Id color marco'	,'6-id logo'	,'7-idImagen'	,'8-idMapa' ,'9-ID QR CODE' ,'5-Español'					,'6-frances'					,'7-coreano'				],	
						];

function f0128()//CREAR la lista de rutas del servidor
		{	//lOL(128);//
			//CREAR LISTA CON TODOS LOS PAPAS visibles completo por cada nivel, la que se genera es parcial, si los elementos no son visibles no deberían pasarse al navegador, eso debería ahorrarle un paso al navegador (wPapax -> wPAPAx)
			//Cargar los titulos de vPAPA1..
			vPAPA1[0] = [wPapa1[0][2],0,wPapa1[0][4],'','','','','',wPapa1[0][0],wPapa1[0][ext+5],wPapa1[0][ext+6],wPapa1[0][ext+7]];	
			for(var m = 3; m < ext + 3; m++)//Adiciona los datos extras que van en ,''
			{	vPAPA1[0][m] = wPapa1[0][m+2];
			}		
			var ff = 1;//Contador de filas visibles
			for (var i = 1; i < wPapa1.length; i++)//Recorre el array de continentes
			{	if(wPapa1[i][3] == 1)//si es visible
				{	vPAPA1[ff] = [wPapa1[i][2],ff,wPapa1[i][4],'','','','','',wPapa1[i][0],wPapa1[i][ext+5],wPapa1[i][ext+6],wPapa1[i][ext+7]];
					for(var m = 3; m < ext + 3; m++)//Adiciona los datos extras que van en ,''
					{	vPAPA1[ff][m] = wPapa1[i][m+2];
					}
					ff++;//Siguiente fila visible
				}
			}
			//Cargar los titulos de vPAPA2..
			vPAPA2[0] = [wPapa2[0][2],0,wPapa2[0][4],'','','','','',wPapa2[0][0],wPapa2[0][ext+5],wPapa2[0][ext+6],wPapa2[0][ext+7]];	
			for(var m = 3; m < ext + 3; m++)//Adiciona los datos extras que van en ,''
			{	vPAPA2[0][m] = wPapa2[0][m+2];
			}
			ff = 1;//Contador de filas visibles
			for (var i = 1; i < wPapa2.length; i++)//recorre las filas
			{ 	if(wPapa2[i][3] == 1)//si es visible
				{	vPAPA2[ff] = [wPapa2[i][2],ff,wPapa2[i][4],'','','','','',wPapa2[i][0],wPapa2[i][ext+5],wPapa2[i][ext+6],wPapa2[i][ext+7]];
					for(var m = 3; m < ext + 3; m++)//Adiciona los datos extras que van en ,''
					{	vPAPA2[ff][m] = wPapa2[i][m+2];
					}
					ff++;//Siguiente fila visible
				}
			}
			//Cargar los titulos de vPAPA3..
			//vPAPA3[0] = [wPapa3[0][2],0,wPapa3[0][4],'','','','','',wPapa3[0][0],wPapa3[0][ext+5],wPapa3[0][ext+6],wPapa3[0][ext+7]];	
			//for(var m = 3; m < ext + 3; m++)//Adiciona los datos extras que van en ,''
			//{	vPAPA3[0][m] = wPapa3[0][m+2];
			//}
			ff = 1;//Contador de filas visibles
			for (var i = 1; i < wPapa3.length; i++)//recorre las filas
			{ 	if(wPapa3[i][3] == 1)//si es visible
				{	vPAPA3[ff] = [wPapa3[i][2],ff,wPapa3[i][4],'','','','','',wPapa3[i][0],wPapa3[i][ext+5],wPapa3[i][ext+6],wPapa3[i][ext+7]];
					for(var m = 3; m < ext + 3; m++)
					{	vPAPA3[ff][m] = wPapa3[i][m+2];
					}
					ff++;//Siguiente fila visible
				}
			}
			//Cargar los titulos de vPAPA4..
			//vPAPA4[0] = [wPapa4[0][2],0,wPapa4[0][4],'','','','','',wPapa4[0][0],wPapa4[0][ext+5],wPapa4[0][ext+6],wPapa4[0][ext+7]];	
			//for(var m = 3; m < ext + 3; m++)//Adiciona los datos extras que van en ,''
			//{	vPAPA4[0][m] = wPapa4[0][m+2];
			//}
			ff = 1;
			for (var i = 1; i < wPapa4.length; i++)//Recorre el array
			{	if(wPapa4[i][3] == 1)//si esa fila es visible
				{	vPAPA4[ff] = [wPapa4[i][2],ff,wPapa4[i][4],'','','','','',wPapa4[i][0],wPapa4[i][ext+5],wPapa4[i][ext+6],wPapa4[i][ext+7]];
					for(var m = 3; m < ext + 3; m++)
					{	vPAPA4[ff][m] = wPapa4[i][m+2];
					}
					ff++;//Siguiente fila
				}
			}
			ff = 1;
			for (var i = 1; i < wPapa5.length; i++)//Recorre el array
			{	if(wPapa5[i][3] == 1)//si esa fila es visible
				{	vPAPA5[ff] = [wPapa5[i][2],ff,wPapa5[i][4],'','','','','',wPapa5[i][0],wPapa5[i][ext+5],wPapa5[i][ext+6],wPapa5[i][ext+7]];
					for(var m = 3; m < ext + 3; m++)
					{	vPAPA5[ff][m] = wPapa5[i][m+2];
					}
					ff++;//Siguiente fila
				}
			}
			ff = 1;
			for (var i = 1; i < wPapa6.length; i++)//Recorre el array
			{	if(wPapa6[i][3] == 1)//si esa fila es visible
				{	vPAPA6[ff] = [wPapa6[i][2],ff,wPapa6[i][4],'','','','','',wPapa6[i][0],wPapa6[i][ext+5],wPapa6[i][ext+6],wPapa6[i][ext+7]];
					for(var m = 3; m < ext + 3; m++)
					{	vPAPA6[ff][m] = wPapa6[i][m+2];
					}	
					ff++;//Siguiente fila
				}
			}
			ff = 1;
			for (var i = 1; i < wPapa7.length; i++)//Recorre el array
			{	if(wPapa7[i][3] == 1)//si esa fila es visible
				{	vPAPA7[ff] = [wPapa7[i][2],ff,wPapa7[i][4],'','','','','',wPapa7[i][0],wPapa7[i][ext+5],wPapa7[i][ext+6],wPapa7[i][ext+7]];
					for(var m = 3; m < ext + 3; m++)
					{	vPAPA7[ff][m] = wPapa7[i][m+2];
					}
					ff++;//Siguiente fila
				}
			}
			ff = 1;
			for (var i = 1; i < wPapa8.length; i++)//Recorre el array 
			{	if(wPapa8[i][3] == 1)//si esa fila es visible
				{	vPAPA8[ff] = [wPapa8[i][2],ff,wPapa8[i][4],'','','','','',wPapa8[i][0],wPapa8[i][ext+5],wPapa8[i][ext+6],wPapa2[i][ext+7]];
					for(var m = 3; m < ext + 3; m++)
					{	vPAPA8[ff][m] = wPapa8[i][m+2];
					}
					ff++;//Siguiente fila
				}
			}
			ff = 1;
			for (var i = 1; i < wPapa9.length; i++)//Recorre el array
			{	if(wPapa9[i][3] == 1)//si esa fila es visible
				{	vPAPA9[ff] = [wPapa9[i][2],ff,wPapa9[i][4],'','','','','',wPapa9[i][0],wPapa9[i][ext+5],wPapa9[i][ext+6],wPapa9[i][ext+7]];
					for(var m = 3; m < ext + 3; m++)
					{	vPAPA9[ff][m] = wPapa9[i][m+2];
					}
					ff++;//Siguiente fila
				}
			}
			ff = 1;
			for (var i = 1; i < wPapa10.length; i++)//Recorre el array
			{	if(wPapa10[i][3] == 1)//si esa fila es visible
				{	vPAPA10[ff] = [wPapa10[i][2],ff,wPapa10[i][4],'','','','','',wPapa10[i][0],wPapa10[i][ext+5],wPapa10[i][ext+6],wPapa10[i][ext+7]];
					for(var m = 3; m < ext + 3; m++)
					{	vPAPA10[ff][m] = wPapa10[i][m+2];
					}
					ff++;//Siguiente fila
				}
			}
			//Determinar si cierto lugar (id) dentro de un nivel tiene o no tiene hijos en el siguiente nivel
			for (var i1 = 1; i1 < vPAPA1.length; i1++)//Recorrer los elementos del nivel 1
			{	hij1[i1] = 0;//Suponemos que el elemento "padre1" No tiene hijos
				for (var i2 = 1; i2 < vPAPA2.length; i2++)//Recorrer el siguiente nivel, es decir el nivel 2
				{	if (vPAPA2[i2][2] == vPAPA1[i1][0])//Si padre de papa2 = id de papa1, quiere decir que ese elemento es un hijo y que el elemento padre si tiene hijos
					{	hij1[i1]++;//Ese elemento "padre1" Si tiene hijos! 
					}
					hij2[i2] = 0;//Suponemos que el elemento "padre2" No tiene hijos
					for (var i3 = 1; i3 < vPAPA3.length; i3++)
					{	if (vPAPA3[i3][2] == vPAPA2[i2][0])//padre de papa3 = id de papa2
						{	hij2[i2]++;//Ese elemento "padre2" Si tiene hijos!
						}
						hij3[i3] = 0;//Suponemos que el elemento "padre2" No tiene hijos
						for (var i4 = 1; i4 < vPAPA4.length; i4++)
						{	if (vPAPA4[i4][2] == vPAPA3[i3][0])//SI encuentra a su padre
							{	hij3[i3]++;//Ese elemento "padre" Si tiene hijos!
							}
							hij4[i4] = 0;//Suponemos que el elemento "padre" No tiene hijos
							for (var i5 = 1; i5 < vPAPA5.length; i5++)
							{	if (vPAPA5[i5][2] == vPAPA4[i4][0])//SI encuentra a su padre
								{	hij4[i4]++;//Ese elemento "padre" Si tiene hijos!
								}
								hij5[i5] = 0;//Suponemos que el elemento "padre" No tiene hijos
								for (var i6 = 1; i6 < vPAPA6.length; i6++)
								{	if (vPAPA6[i6][2] == vPAPA5[i5][0])//SI encuentra a su padre
									{	hij5[i5]++;//Ese elemento "padre" Si tiene hijos!
									}
									hij6[i6] = 0;//Suponemos que el elemento "padre" No tiene hijos
									for (var i7 = 1; i7 < vPAPA7.length; i7++)
									{	if (vPAPA7[i7][2] == vPAPA6[i6][0])//SI encuentra a su padre
										{	hij6[i6]++;//Ese elemento "padre" Si tiene hijos!
										}
										hij7[i7] = 0;//Suponemos que el elemento "padre" No tiene hijos
										for (var i8 = 1; i8 < vPAPA8.length; i8++)
										{	if (vPAPA8[i8][2] == vPAPA7[i7][0])//SI encuentra a su padre
											{	hij7[i7]++;//Ese elemento "padre" Si tiene hijos!
											}
											hij8[i8] = 0;//Suponemos que el elemento "padre" No tiene hijos
											for (var i9 = 1; i9 < vPAPA9.length; i9++)
											{	if (vPAPA9[i9][2] == vPAPA8[i8][0])//SI encuentra a su padre
												{	hij8[i8]++;//Ese elemento "padre" Si tiene hijos!
												}
												hij9[i9] = 0;//Suponemos que el elemento "padre" No tiene hijos
												for (var i10 = 1; i10 < vPAPA10.length; i10++)
												{	if (vPAPA9[i10][2] == vPAPA9[i9][0])//SI encuentra a su padre
													{	hij9[i9]++;//Ese elemento "padre" Si tiene hijos!
													}
													hij10[i10] = 0;//Suponemos que el elemento "padre" No tiene hijos
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
			hijos = [];//
			ff = 1;
			//crear filas nuevas a un array auto???
			for (var i = 1; i < vPAPA1.length; i++)
			{	if (hij1[i] == 0)//Bingo (end point)
				{	hijos[ff] = [1];
					hijos[ff][1] = vPAPA1[i][0];//id hijo 
					ff++;//Siguiente fila
				}
			}
			for (var i = 1; i < vPAPA2.length; i++)
			{	if (hij2[i] == 0)//Bingo! (end point)
				{	hijos[ff] = [2];
					hijos[ff][2] = vPAPA2[i][0];//id hijo 
					ff++;//Siguiente fila
				}
			}
			for (var i = 1; i < vPAPA3.length; i++)
			{	if (hij3[i] == 0)//Bingo! (end point)
				{	hijos[ff] = [3];
					hijos[ff][3] = vPAPA3[i][0];//id hijo 
					ff++;//Siguiente fila
				}
			}
			for (var i = 1; i < vPAPA4.length; i++)
			{	if (hij4[i] == 0)//Bingo (end point)
				{	hijos[ff] = [4];
					hijos[ff][4] = vPAPA4[i][0];//id hijo 
					ff++;//Siguiente fila
				}
			}
			for (var i = 1; i < vPAPA5.length; i++)
			{	if (hij5[i] == 0)//Bingo! (end point)
				{	hijos[ff] = [5];
					hijos[ff][5] = vPAPA5[i][0];//id hijo 
					ff++;//Siguiente fila
				}
			}
			for (var i = 1; i < vPAPA6.length; i++)
			{	if (hij6[i] == 0)//Bingo! (end point)
				{	hijos[ff] = [6];
					hijos[ff][6] = vPAPA6[i][0];//id hijo 
					ff++;//Siguiente fila
				}
			}
			for (var i = 1; i < vPAPA7.length; i++)
			{	if (hij7[i] == 0)//Bingo (end point)
				{	hijos[ff] = [7];
					hijos[ff][7] = vPAPA7[i][0];//id hijo 
					ff++;//Siguiente fila
				}
			}
			for (var i = 1; i < vPAPA8.length; i++)
			{	if (hij8[i] == 0)//Bingo! (end point)
				{	hijos[ff] = [8];
					hijos[ff][8] = vPAPA8[i][0];//id hijo 
					ff++;//Siguiente fila
				}
			}
			for (var i = 1; i < vPAPA9.length; i++)
			{	if (hij9[i] == 0)//Bingo! (end point)
				{	hijos[ff] = [9];
					hijos[ff][9] = vPAPA9[i][0];//id hijo 
					ff++;//Siguiente fila
				}
			}
			for (var i = 1; i < vPAPA10.length; i++)
			{	if (hij10[i] == 0)//Bingo (end point)
				{	hijos[ff] = [10];
					hijos[ff][10] = vPAPA10[i][0];//id hijo 
					ff++;//Siguiente fila
				}
			}
			console.log(' - - - rrrrrr hijos=',hijos);
			//INICIAR desde el último nivel y completar la ruta hasta el primer nivel
			for (var h = 1; h < hijos.length; h++)
			{	switch (hijos[h][0])
				{	case 2:
						f0129(h);//ENCONTRAR el id padre de un hijo del nivel 2
					break;
					case 3:
						f0130(h);//ENCONTRAR el id padre de un hijo del nivel 3
					break;
					case 4:
						f0131(h);//ENCONTRAR el id padre de un hijo del nivel 4
					break;
					case 5:
						f0132(h);//ENCONTRAR el id padre de un hijo del nivel 5
					break;
					case 6:
						f0133(h);//ENCONTRAR el id padre de un hijo del nivel 6
					break;
					case 7:
						f0134(h);//ENCONTRAR el id padre de un hijo del nivel 7
					break;
					case 8:
						f0135(h);//ENCONTRAR el id padre de un hijo del nivel 8
					break;
					case 9:
						f0136(h);//ENCONTRAR el id padre de un hijo del nivel 9
					break;
					case 10:
						f0137(h);//ENCONTRAR el id padre de un hijo del nivel 10
					break;
				}
			}
			//Crear las rutas para pasarselas al router..
			//	for (var h = 1; h < hijos.length; h++)
			//	{	hijos[h][0] = '';
			//		for (var i = 1; i < hijos[h].length; i++)
			//		{	hijos[h][0] = hijos[h][0]+'/'+hijos[h][i];
			//		}
			//	}
			for (var h = 1; h < hijos.length; h++)
			{	//rutas[h-1] = '/#';
				rutas[h-1] = '';
				for (var i = 1; i < hijos[h].length; i++)
				{	rutas[h-1] = rutas[h-1]+'/'+hijos[h][i];
				}
			}
		}

function f0129(h)//ENCONTRAR el id padre de un hijo del nivel 2
		{	//lOL(129);//
			for (var i2 = 1; i2 < vPAPA2.length; i2++)
			{	if(vPAPA2[i2][0] == hijos[h][2])//bingo 2
				{	hijos[h][1] = vPAPA2[i2][2];//id del padre
					i2 = vPAPA2.length;//termina el for
				}
			}
		}

function f0130(h)//ENCONTRAR el id padre de un hijo del nivel 3
		{	//lOL(130);//
			for (var i3 = 1; i3 < vPAPA3.length; i3++)
			{	if(vPAPA3[i3][0] == hijos[h][3])//bingo 3
				{	hijos[h][2] = vPAPA3[i3][2];//id del padre
					f0129(h);//ENCONTRAR el id padre de un hijo del nivel 2
					i3 = vPAPA3.length;//termina el for
				}
			}
		}

function f0131(h)//ENCONTRAR el id padre de un hijo del nivel 4
		{	//lOL(131);//
			for (var i4 = 1; i4 < vPAPA4.length; i4++)
			{	if(vPAPA4[i4][0] == hijos[h][4])//bingo 4
				{	hijos[h][3] = vPAPA4[i4][2];//id del padre
					f0130(h);//ENCONTRAR el id padre de un hijo del nivel 3
					i4 = vPAPA4.length;//termina el for
				}
			}
		}

function f0132(h)//ENCONTRAR el id padre de un hijo del nivel 5
		{	//lOL(132);//
			for (var i5 = 1; i5 < vPAPA5.length; i5++)
			{	if(vPAPA5[i5][0] == hijos[h][5])//bingo 5
				{	hijos[h][4] = vPAPA5[i5][2];//id del padre
					f0131(h);//ENCONTRAR el id padre de un hijo del nivel 4
					i5 = vPAPA5.length;//termina el for
				}
			}
		}

function f0133(h)//ENCONTRAR el id padre de un hijo del nivel 6
		{	//lOL(133);//
			for (var i6 = 1; i6 < vPAPA6.length; i6++)
			{	if(vPAPA6[i6][0] == hijos[h][6])//bingo 6
				{	hijos[h][5] = vPAPA6[i6][2];//id del padre
					f0132(h);//ENCONTRAR el id padre de un hijo del nivel 5
					i6 = vPAPA6.length;//termina el for
				}
			}
		}

function f0134(h)//ENCONTRAR el id padre de un hijo del nivel 7
		{	//lOL(134);//
			for (var i7 = 1; i7 < vPAPA7.length; i7++)
			{	if(vPAPA7[i7][0] == hijos[h][7])//bingo 7
				{	hijos[h][6] = vPAPA7[i7][2];//id del padre
					f0133(h);//ENCONTRAR el id padre de un hijo del nivel 6
					i7 = vPAPA7.length;//termina el for
				}
			}
		}

function f0135(h)//ENCONTRAR el id padre de un hijo del nivel 8
		{	//lOL(135);//
			for (var i8 = 1; i8 < vPAPA8.length; i8++)
			{	if(vPAPA8[i8][0] == hijos[h][8])//bingo 8
				{	hijos[h][7] = vPAPA8[i8][2];//id del padre
					f0134(h);//ENCONTRAR el id padre de un hijo del nivel 7
					i8 = vPAPA8.length;//termina el for
				}
			}
		}

function f0136(h)//ENCONTRAR el id padre de un hijo del nivel 9
		{	//lOL(136);//
			for (var i9 = 1; i9 < vPAPA9.length; i9++)
			{	if(vPAPA9[i9][0] == hijos[h][9])//bingo 9
				{	hijos[h][8] = vPAPA9[i9][2];//id del padre
					f0135(h);//ENCONTRAR el id padre de un hijo del nivel 8
					i9 = vPAPA9.length;//termina el for
				}
			}
		}

function f0137(h)//ENCONTRAR el id padre de un hijo del nivel 10
		{	//lOL(137);//
			for (var i10 = 1; i10 < vPAPA10.length; i10++)
			{	if(vPAPA10[i10][0] == hijos[h][10])//bingo 10
				{	hijos[h][9] = vPAPA10[i10][2];//id del padre
					f0136(h);//ENCONTRAR el id padre de un hijo del nivel 9
					i10 = vPAPA10.length;//termina el for
				}
			}
		}

f0128();//DETERCTAR los hijos de wPAPA y quitar los elementos no visibles (desactivados)
/* fin interruptor 1 incluye f0128 a f0137 */











/*
//intento 1 convertir r003 en un objeto con Array    --l 7may025 parece ser un ejemplo de JSON con 3 notas del titular ¿se puede quitar si no se usa mongoDB como BD con JSONs?
const 	o003 	=
[	{	r3A1: 	['participate this Sunday, January 29, in an ecological walk in Ciudad Bolívar, IDRD, invites you'	,'Be part of our ecological walks, and discover places that will help you connect with nature.'								,'This Sunday the appointment is in Ciudad Bolívar, Casona and Sierra Morena'	],
		r3A2: 	['participa este domingo 29 de enero en una caminata ecológica en Ciudad Bolívar, IDRD, te invita'	,'Sé parte de nuestras caminatas ecológicas, y conoce lugares que te ayudarán a conectarte con la naturaleza.'				,'Este domingo la cita es en Ciudad Bolívar, Casona y Sierra Morena'			],
		r3A3: 	['participez ce dimanche 29 janvier à une promenade écologique à Ciudad Bolívar, IDRD vous invite'	,'Faites partie de nos promenades écologiques et découvrez des lieux qui vous aideront à vous connecter avec la nature.'	,'Ce dimanche, le rendez-vous est à Ciudad Bolívar, Casona et Sierra Morena'   	],
		r3A4: 	['1월 29일 일요일, IDRD의 Ciudad Bolívar에서 열리는 생태 산책에 여러분을 초대합니다.'							,'생태 산책에 참여하고 자연과 연결하는 데 도움이 되는 장소를 발견하세요.'																		,'이번 일요일 약속은 Ciudad Bolívar, Casona 및 Sierra Morena에 있습니다.'   			],
		r3Z1:	['person walking up the mountain'			,'person walking up the mountain'	,'person walking up the mountain'	],	
		r3Z2:	['persona caminando por la montaña'			,'persona caminando por la montaña'	,'persona caminando por la montaña'	],
		r3Z3:	['personne qui monte la montagne'			,'personne qui monte la montagne'	,'personne qui monte la montagne'	],	
		r3Z4:  	['산을 오르는 사람'								,'산을 오르는 사람'						,'산을 오르는 사람'						],
		r3B1: 	[3,1,3],
		r3B2: 	[18,16,4],		
		r3B3: 	0,
		r3B4: 	1,
		r3B5: 	[0,0,0],
		r3B6: 	[0,0,0],
		r3B7: 	[0,0,0],
		r3B8: 	[0,0,0],
		r3B9: 	[0,0,0],
		r3B10: 	[0,0,0]
	}
];
*/






//======================================= INICIO DE LA BASE DE DATOS ===============
//==================================================================================

















//Inicio mI:

//RUTA 1 AJUSTES
//RUTA 1 Ajustes1 SONIDO VELOVIDAD TAMAÑO COLOR Ajustar la sala
//RUTA 1 modo???
//AJUSTAR SONIDO VELOCIDAD TAMAÑO COLOR..
const mIr001A =/**/[['Casillas', 1, 2, 3, 4],
[1, 'window reader enabled, change','lector de ventana habilitado, cambiar','lecteur de fenêtre activé, changer','창 판독기 사용, 변경'],
[2, 'window reader disabled, change','lector de ventana deshabilitado, cambiar','lecteur de fenêtre désactivé, changer','윈도우 리더 비활성화, 변경'],
[3, '20, very fast speed, change','20, velocidad muy rápida, cambiar','20, vitesse très rapide, changer','20, 매우 빠른 속도, 변화'],
[4, '14, fast speed, change','14, velocidad rápida, cambiar','14, vitesse rapide, changer','14, 빠른 속도 스위치'],
[5, '10, normal speed, change','10, velocidad normal, cambiar','10, vitesse normale, changer','10, 정상 속도, 변경'],
[6, '7, slow speed, change','7, velocidad lenta, cambiar','7, vitesse lent, changer','7, 느린 속도, 변화'],
[7, '5, very slow speed, change','5, velocidad muy lenta, cambiar','5, vitesse très lente, changer','5, 매우 느린 속도, 변화'],
[8, 'minimal letter, change','letra mínima, cambiar','lettre minimale, changer','최소 문자, 변경'],
[9, 'small letter, change','letra pequeña, cambiar','petite lettre, changer','작은 글씨, 변경'],
[10,'medium letter, change','letra mediana, cambiar','lettre moyenne, changer','중간 문자, 변경'],
[11,'large letter, change','letra grande, cambiar','grande lettre, changer','큰 활자, 변화'],
[12,'larger letter, change','letra más grande, cambiar','plus grande lettre, changer','더 큰 글꼴, 변경'],
[13,'huge letter, change','letra enorme, cambiar','énorme lettre, changer','엄청난 글꼴, 변경'],
[14,'max letter, change','letra máxima, cambiar','lettre maximale, changer','최대 문자, 변경'],
[15,'black text on yellow background, change','texto negro sobre fondo amarillo, cambiar','texte noir sur fond jaune, changer','노란색 배경에 검정색 텍스트, 변경'],
[16,'yellow text on black background, change','texto amarillo sobre fondo negro, cambiar','texte jaune sur fond noir, changer','검정색 배경에 노란색 텍스트, 변경'],
[17,'black text on white background, change','texto negro sobre fondo blanco, cambiar','texte noir sur fond blanc, changer','흰색 배경에 검정색 텍스트, 변경'],
[18,'white text on black background, change','texto blanco sobre fondo negro, cambiar','texte blanc sur fond noir, changer','검정색 배경에 흰색 텍스트, 변경'],
[19,'','','',''],
[20,'with light, change','con luz, cambiar','avec la lumière, changer','빛으로, 변경'],
[21,'dark light, change','luz oscura, cambiar','lumiere obscure, changer','어두운 빛, 변경'],
[22,'no light, change','sin luz, cambiar','lumière éteinte, changer','빛 없이, 변경'],
[23,'','','',''],
[24,'','','',''],
[25,'','','',''],
[26,'','','',''],
[27,'','','',''],
[28,'sign row disabled, change','fila de señas deshabilitada, cambiar','rangée d\'signe désactivé, changer','비콘 행 비활성화, 변경'],
[29,'sign row enabled, change','fila de señas habilitada, cambiar','rangée d\'signe activée, changer','비콘 행 활성화, 변경'],
[30,'very small images, change','imágenes muy pequeñas, cambiar','très petites images, changer','아주 작은 이미지, 변화'],
[31,'small images, change','imágenes pequeñas, cambiar','petites images, changer','작은 이미지, 변화'],
[32,'medium images, change','imágenes medianas, cambiar','images moyenne, changer','중간 이미지, 변경'],
[33,'big images, change','imágenes grandes, cambiar','grandes images, changer','큰 이미지, 변경'],
[34,'maximum images, change','imágenes máximas, cambiar','maximaux images, changer','최대 이미지, 변경'],
[35,'','','',''],
[36,'action, undo all adjustments made','acción, deshacer todos los ajustes realizados','action, annuler tous les ajustements effectués','작업, 모든 조정 실행 취소'],
[37,'acción, recuperar los ajustes','acción, recuperar los ajustes','acción, recuperar los ajustes','acción, recuperar los ajustes']
];
/*const 	r001A		= 	[	['Casillas..'	,1					,2				,3					,4					,5					],
							[1				,'text mode'		,'Morse mode'	,'Braille mode'		,'signs mode'		,'mode tutorial'	],
							[2				,'modo texto'		,'modo Morse'	,'modo Braille'		,'modo señas'		,'tutoríal de modo'	],
							[3				,'mode texte'		,'mode Morse'	,'mode Braille'		,'mode signes'		,'tutoriel de mode'	]
						];*/
/*
const 	r001A		= 	[	['Casillas'	,1				,2			,3				,4				,5											,6												,7											,8											,9  								,10								,9												,10											,9										,10										,11								],
							[1			,'text'			,'Morse'	,'Braille'		,'signs'		,'screen reader enabled, change'			,'screen reader disabled, change'				,'big buttons disabled, change'				,'big buttons enabled, change'				,'magnifier disabled, change' 		,'magnifier enabled, change' 	,'black text on light background, change'		,'light text on black background,'			,'white light enabled, change'  		,'yellow light enabled, change'  		,'multimedia, mode tutorial'	],
							[2			,'texto'		,'Morse'	,'Braille'		,'señas'		,'lector de pantalla habilitado, cambiar'	,'lector de pantalla deshabilitado, cambiar'	,'botones grandes deshabilitados, cambiar'	,'botones grandes habilitados, cambiar'		,'lupa deshabilitada, cambiar' 		,'lupa habilitada, cambiar' 	,'texto negro sobre fondo claro, cambiar'		,'texto claro sobre fondo negro, cambiar'	,'luz blanca habilitada, cambiar'   	,'luz amarilla habilitada, cambiar' 	,'multimedia, tutoríal de modo'	],
							[3			,'texte'		,'Morse'	,'Braille'		,'signes'		,'lecteur d\'écran activé, changer'			,'lecteur d\'écran désactivé, changer'			,'gros boutons désactivés, changer'			,'gros boutons activés, changer'			,'loupe désactivée, changer' 		,'loupe activée, changer' 		,'texte noir sur fond clair, changer'			,'texte clair sur fond noir, changer'		,'lumière blanche activée, changer' 	,'lumière jaune activée, changer'  		,'multimédia, tutoriel de mode'	]
						];
*/
/*
const r001A =[['Casillas', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37],
[1, 'window reader enabled, change', 'window reader disabled, change', '20, very fast speed, change', '14, fast speed, change', '10, normal speed, change', '7, slow speed, change', '5, very slow speed, change', 'minimal letter, change', 'small letter, change', 'medium letter, change', 'large letter, change', 'larger letter, change', 'huge letter, change', 'max letter, change', 'black text on yellow background, change', 'yellow text on black background, change', 'black text on white background, change', 'white text on black background, change', '', 'with light, change', 'dark light, change', 'no light, change', '', '', '', '', '', 'sign row disabled, change', 'sign row enabled, change', 'very small images, change', 'small images, change', 'medium images, change', 'big images, change', 'maximum images, change', '', 'action, undo all adjustments made', 'acción, recuperar los ajustes'],
[2, 'lector de ventana habilitado, cambiar', 'lector de ventana deshabilitado, cambiar', '20, velocidad muy rápida, cambiar', '14, velocidad rápida, cambiar', '10, velocidad normal, cambiar', '7, velocidad lenta, cambiar', '5, velocidad muy lenta, cambiar', 'letra mínima, cambiar', 'letra pequeña, cambiar', 'letra mediana, cambiar', 'letra grande, cambiar', 'letra más grande, cambiar', 'letra enorme, cambiar', 'letra máxima, cambiar', 'texto negro sobre fondo amarillo, cambiar', 'texto amarillo sobre fondo negro, cambiar', 'texto negro sobre fondo blanco, cambiar', 'texto blanco sobre fondo negro, cambiar', '', 'con luz, cambiar', 'luz oscura, cambiar', 'sin luz, cambiar', '', '', '', '', '', 'fila de señas deshabilitada, cambiar', 'fila de señas habilitada, cambiar', 'imágenes muy pequeñas, cambiar', 'imágenes pequeñas, cambiar', 'imágenes medianas, cambiar', 'imágenes grandes, cambiar', 'imágenes máximas, cambiar', '', 'acción, deshacer todos los ajustes realizados', 'acción, recuperar los ajustes'],
[3, 'lecteur de fenêtre activé, changer', 'lecteur de fenêtre désactivé, changer', '20, vitesse très rapide, changer', '14, vitesse rapide, changer', '10, vitesse normale, changer', '7, vitesse lent, changer', '5, vitesse très lente, changer', 'lettre minimale, changer', 'petite lettre, changer', 'lettre moyenne, changer', 'grande lettre, changer', 'plus grande lettre, changer', 'énorme lettre, changer', 'lettre maximale, changer', 'texte noir sur fond jaune, changer', 'texte jaune sur fond noir, changer', 'texte noir sur fond blanc, changer', 'texte blanc sur fond noir, changer', '', 'avec la lumière, changer', 'lumiere obscure, changer', 'lumière éteinte, changer', '', '', '', '', '', 'rangée d\'signe désactivé, changer', 'rangée d\'signe activée, changer', 'très petites images, changer', 'petites images, changer', 'images moyenne, changer', 'grandes images, changer', 'maximaux images, changer', '', 'action, annuler tous les ajustements effectués', 'acción, recuperar los ajustes'],
[4, '창 판독기 사용, 변경', '윈도우 리더 비활성화, 변경', '20, 매우 빠른 속도, 변화', '14, 빠른 속도 스위치', '10, 정상 속도, 변경', '7, 느린 속도, 변화', '5, 매우 느린 속도, 변화', '최소 문자, 변경', '작은 글씨, 변경', '중간 문자, 변경', '큰 활자, 변화', '더 큰 글꼴, 변경', '엄청난 글꼴, 변경', '최대 문자, 변경', '노란색 배경에 검정색 텍스트, 변경', '검정색 배경에 노란색 텍스트, 변경', '흰색 배경에 검정색 텍스트, 변경', '검정색 배경에 흰색 텍스트, 변경', '', '빛으로, 변경', '어두운 빛, 변경', '빛 없이, 변경', '', '', '', '', '', '비콘 행 비활성화, 변경', '비콘 행 활성화, 변경', '아주 작은 이미지, 변화', '작은 이미지, 변화', '중간 이미지, 변경', '큰 이미지, 변경', '최대 이미지, 변경', '', '작업, 모든 조정 실행 취소', 'acción, recuperar los ajustes']
];
*/
//CONTROLAR ajustes
const mIr001B =/**/[['Recursos/ Casillas..', '1 0:Imag,1:Icon,2:Texto,3ImagenA,4VideoA', '2 id de la Imag, Icon o Texto', '3 onclick function, vacio=NO PERMITIDA(INFO)', '4 Visible 1:SI 0:no', '5 0:FotI 1:Vide 2:FotM 3:Text 4:In 5:Out', '6 id Video([5]1) o id foto([5]0/2)', '7 id Texto Icono', '8 ids Iconos Capa1', '9 ids Iconos Capa2', '10 Capa3 Estado 0: 1:/ 2:_ 3: ? 4: -'],
[1, 1,37,23,1,0,0,0,0,0,0],
[2, 1,38,24,0,0,0,0,0,0,1],
[3, 2,20,80,0,0,0,0,0,0,0],
[4, 2,19,81,0,0,0,0,0,0,0],
[5, 2,18,77,1,0,0,0,0,0,0],
[6, 2,17,78,0,0,0,0,0,0,0],
[7, 2,16,79,0,0,0,0,0,0,0],
[8, 1,47,19,1,0,0,0,0,0,0],
[9, 1,47,29,0,0,0,0,0,0,0],
[10,1,47,30,0,0,0,0,0,0,0],
[11,1,47,31,0,0,0,0,0,0,0],
[12,1,47,32,0,0,0,0,0,0,0],
[13,1,47,33,0,0,0,0,0,0,0],
[14,1,47,20,0,0,0,0,0,0,0],
[15,1,29,83,0,0,0,0,0,0,0],
[16,1,29,84,0,0,0,0,0,0,0],
[17,1,29,27,1,0,0,0,0,0,0],
[18,1,29,28,0,0,0,0,0,0,0],
[19,1,65,21,1,0,0,0,0,0,0],
[20,1,30,88,1,0,0,0,0,0,0],
[21,1,30,88,0,0,0,0,0,0,0],
[22,1,30,88,0,0,0,0,0,0,0],
[23,0,0 ,0 ,0,0,0,0,0,0,0],
[24,0,0 ,0 ,0,0,0,0,0,0,0],
[25,0,0 ,0 ,0,0,0,0,0,0,0],
[26,0,0 ,0 ,0,0,0,0,0,0,0],
[27,0,0 ,0 ,0,0,0,0,0,0,0],
[28,2,22,45,1,0,0,0,0,0,0],
[29,1,41,46,0,0,0,0,0,0,0],
[30,1,60,64,0,0,0,0,0,0,0],
[31,1,60,64,0,0,0,0,0,0,0],
[32,1,60,64,0,0,0,0,0,0,0],
[33,1,60,64,1,0,0,0,0,0,0],
[34,1,60,64,0,0,0,0,0,0,0],
[35,1,0 ,0 ,0,0,0,0,0,0,0],
[36,1,67,87,1,0,0,0,0,0,0],
[37,1,15,6 ,0,0,0,0,0,0,0]
];
/*const r001B =[['Recursos/ Casillas..', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37],
['1 0:Imag,1:Icon,2:Texto,3ImagenA,4VideoA', 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
['2 id de la Imag, Icon o Texto', 37, 38, 20, 19, 18, 17, 16, 47, 47, 47, 47, 47, 47, 47, 29, 29, 29, 29, 65, 30, 30, 30, 0, 0, 0, 0, 0, 22, 41, 60, 60, 60, 60, 60, 0, 67, 15],
['3 onclick function, vacio=NO PERMITIDA(INFO)', 23, 24, 80, 81, 77, 78, 79, 19, 29, 30, 31, 32, 33, 20, 83, 84, 27, 28, 21, 88, 88, 88, 0, 0, 0, 0, 0, 45, 46, 64, 64, 64, 64, 64, 0, 87, 6],
['4 Visible 1:SI 0:no', 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0],
['5 0:FotI 1:Vide 2:FotM 3:Text 4:In 5:Out', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
['6 id Video([5]1) o id foto([5]0/2)', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
['7 id Texto Icono', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
['8 ids Iconos Capa1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
['9 ids Iconos Capa2', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
['10 Capa3 Estado 0: 1:/ 2:_ 3: ? 4: -', 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];*/
//trabajar de la mano con g00VARS[11][2]::LÍNEA(S)DeLectura:0TodasLasLíneas,1Texto,2Morse,3Braille,4Señas,5Tuto
//['1 0:Imagen,1:Icono,2:Texto,3ImagenAlta,4VideoAlto,5Texto+Icono,6Icono+Icono serie
//['5 0:FotoIcono 1:VideoMulti 2:FotoMulti 3:TextoMulti 4:InEntrada 5:OutSalida
//['10 0:Normal sin nada, 1:Deshabilitado o Deseleccionado /slash, 2:Campo Vacio obligatorio ?pregunta, 3:Campo con info o Respuesta _RayaInferior, 4:Campo vacio opcional -GuionMedio 	
/*
ANTESconst 	r001B	=[	['Recursos/ Casillas..'							,1	,2	,3	,4	,5	,6	,7  ,8 	,9 	,10 ,11 ,12 ,13 ,14	,15	,16	,17	,18	,19	,20	,21	,22	,23	,24	,25	,26	,27	,28	,29	],
							['1 0:Imag,1:Icon,2:Texto,3ImagenA,4VideoA'		,1	,1	,1  ,1  ,1  ,1  ,1  ,1  ,1  ,1	,1	,1	,1	,1	,1	,1	,1	,1	,1	,1	,1	,2	,1	,1	,1	,1	,1	,1	,1	],
							['2 id de la Imag, Icon o Texto'				,37	,38	,47 ,47 ,47 ,47 ,47 ,47 ,47 ,29	,29	,39	,39	,39	,39	,39	,39	,39	,39	,30	,30	,22	,41	,60	,60	,60	,60	,60	,9	],//35-31,34-36
							['3 onclick function, vacio=NO PERMITIDA(INFO)'	,23	,24	,19 ,29 ,30 ,31 ,32 ,33 ,20 ,27	,28	,37	,38	,39	,40	,41	,42	,43	,44	,21	,22	,45	,46	,65	,66	,67	,68	,64	,11	],
							['4 Visible 1:SI 0:no'							,1	,0	,1  ,0  ,0  ,0  ,0  ,0  ,0  ,1	,0	,0	,0	,0	,0	,1	,0	,0	,0	,1	,0	,1	,0	,1	,0	,0	,0	,0	,0	],
							['5 0:FotI 1:Vide 2:FotM 3:Text 4:In 5:Out'		,0	,0	,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	],
							['6 id Video([5]1) o id foto([5]0/2)'			,0	,0	,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	],
							['7 id Texto Icono'								,0	,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	],
							['8 ids Iconos Capa1'							,0	,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	],
							['9 ids Iconos Capa2'							,0	,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	],
							['10 Capa3 Estado 0: 1:/ 2:_ 3: ? 4: -'			,0	,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	,0	]
						];
*/
/*
const r001C = [['idLangSign', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
[1, [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]],
[2, [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]],
[3, [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]],
[4, [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]
];
*/
//DESCRIBIR ajustes texto alternativo para imagen
//texto alternativo para imagen
const mIr001Z =/**/[['Casillas', 1, 2, 3, 4],
[1, 'window reader enabled, change','icono de parlante sonando','lecteur de fenêtre activé, changer','lecteur de fenêtre activé, changer'],
[2, 'window reader disabled, change','icono de parlante deshabilitado','lecteur de fenêtre désactivé, changer','lecteur de fenêtre désactivé, changer'],
[3, '20','20','20','20'],
[4, '14','14','14','14'],
[5, '10','10','10','10'],
[6, '7','7','7','7'],
[7, '5','5','5','5'],
[8, 'minimal text, change','icono altura del texto','texte minimal, changer','texte minimal, changer'],
[9, 'small text, change','icono altura del texto','petit texte, changer','petit texte, changer'],
[10,'medium text, change','icono altura del texto','texte moyen, changer','texte moyen, changer'],
[11,'large text, change','icono altura del texto','gros texte, changer','gros texte, changer'],
[12,'larger text, change','icono altura del texto','texte plus grand, changer','texte plus grand, changer'],
[13,'huge text, change','icono altura del texto','énorme texte, changer','énorme texte, changer'],
[14,'max text, change','icono altura del texto','texte maximum, changer','texte maximum, changer'],
[15,'black text on yellow background, change','texto negro sobre fondo amarillo','texte noir sur fond jaune, changer','texte noir sur fond jaune, changer'],
[16,'yellow text on black background, change','texto amarillo sobre fondo negro','texte jaune sur fond noir, changer','texte jaune sur fond noir, changer'],
[17,'black text on white background, change','texto negro sobre fondo blanco','texte noir sur fond blanc, changer','texte noir sur fond blanc, changer'],
[18,'white text on black background, change','texto blanco sobre fondo negro','texte blanc sur fond noir, changer','texte blanc sur fond noir, changer'],
[19,'','','',''],
[20,'light bulb','bombillo','ampoule','ampoule'],
[21,'light bulb','bombillo','ampoule','ampoule'],
[22,'no image','sin imagen','pas d\'image','pas d\'image'],
[23,'','','',''],
[24,'','','',''],
[25,'','','',''],
[26,'','','',''],
[27,'','','',''],
[28,'sign row disabled, change','serie interrumpida','rangée d\'signe désactivé, changer','rangée d\'signe désactivé, changer'],
[29,'sign row enabled, change','icono rollo de pelicula','rangée d\'signe activée, changer','rangée d\'signe activée, changer'],
[30,'minimal signs, change','icono de imagen','signes minimes, changer','signes minimes, changer'],
[31,'small signs, change','icono de imagen','petits signes, changer','petits signes, changer'],
[32,'medium signs, change','icono de imagen','signes moyens, changer','signes moyens, changer'],
[33,'big signs, change','icono de imagen','grands signes, changer','grands signes, changer'],
[34,'maximum signs, change','icono de imagen','signes maximaux, changer','signes maximaux, changer'],
[35,'','','',''],
[36,'undo all changes','icono de borrador','annuler toutes les modifications','annuler toutes les modifications'],
[37,'reloj de arena','reloj de arena','reloj de arena','reloj de arena']
];
/*const r001Z =[['Casillas', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37],
[1, 'window reader enabled, change', 'window reader disabled, change', '20', '14', '10', '7', '5', 'minimal text, change', 'small text, change', 'medium text, change', 'large text, change', 'larger text, change', 'huge text, change', 'max text, change', 'black text on yellow background, change', 'yellow text on black background, change', 'black text on white background, change', 'white text on black background, change', '', 'light bulb', 'light bulb', 'no image', '', '', '', '', '', 'sign row disabled, change', 'sign row enabled, change', 'minimal signs, change', 'small signs, change', 'medium signs, change', 'big signs, change', 'maximum signs, change', '', 'undo all changes', 'reloj de arena'],
[2, 'icono de parlante sonando', 'icono de parlante deshabilitado', '20', '14', '10', '7', '5', 'icono altura del texto', 'icono altura del texto', 'icono altura del texto', 'icono altura del texto', 'icono altura del texto', 'icono altura del texto', 'icono altura del texto', 'texto negro sobre fondo amarillo', 'texto amarillo sobre fondo negro', 'texto negro sobre fondo blanco', 'texto blanco sobre fondo negro', '', 'bombillo', 'bombillo', 'sin imagen', '', '', '', '', '', 'serie interrumpida', 'icono rollo de pelicula', 'icono de imagen', 'icono de imagen', 'icono de imagen', 'icono de imagen', 'icono de imagen', '', 'icono de borrador', 'reloj de arena'],
[3, 'lecteur de fenêtre activé, changer', 'lecteur de fenêtre désactivé, changer', '20', '14', '10', '7', '5', 'texte minimal, changer', 'petit texte, changer', 'texte moyen, changer', 'gros texte, changer', 'texte plus grand, changer', 'énorme texte, changer', 'texte maximum, changer', 'texte noir sur fond jaune, changer', 'texte jaune sur fond noir, changer', 'texte noir sur fond blanc, changer', 'texte blanc sur fond noir, changer', '', 'ampoule', 'ampoule', 'pas d\'image', '', '', '', '', '', 'rangée d\'signe désactivé, changer', 'rangée d\'signe activée, changer', 'signes minimes, changer', 'petits signes, changer', 'signes moyens, changer', 'grands signes, changer', 'signes maximaux, changer', '', 'annuler toutes les modifications', 'reloj de arena'],
[4, 'lecteur de fenêtre activé, changer', 'lecteur de fenêtre désactivé, changer', '20', '14', '10', '7', '5', 'texte minimal, changer', 'petit texte, changer', 'texte moyen, changer', 'gros texte, changer', 'texte plus grand, changer', 'énorme texte, changer', 'texte maximum, changer', 'texte noir sur fond jaune, changer', 'texte jaune sur fond noir, changer', 'texte noir sur fond blanc, changer', 'texte blanc sur fond noir, changer', '', 'ampoule', 'ampoule', 'pas d\'image', '', '', '', '', '', 'rangée d\'signe désactivé, changer', 'rangée d\'signe activée, changer', 'signes minimes, changer', 'petits signes, changer', 'signes moyens, changer', 'grands signes, changer', 'signes maximaux, changer', '', 'annuler toutes les modifications', 'reloj de arena']
];*/



//RUTA 2 IDIOMA Y LUGAR
//AJUSTAR IDIOMA, SEÑA Y LUGAR
//RUTA 2 AJUSTES2 CAMBIAR IDIOMA, SEÑA Y LUGAR informacion /control
const mIr002A =/**/[['Casillas', 1, 2, 3, 4],
[1, '','','',''],
[2, '','','',''],
[3, 'i1, information in english enabled, change','i1, información en ingles habilitada, cambiar','i1, informations en anglais activées, changer','i1, 영문 안내 가능, 변경'],
[4, 'i0, information in english disabled, change','i0, información en ingles deshabilitada, cambiar','i0, informations en anglais désactivées, changer','i0, 영문 안내 불가, 변경'],
[5, '','','',''],
[6, '','','',''],
[7, '','','',''],
[8, '','','',''],
[9, '','','',''],
[10,'','','',''],
[11,'','','',''],
[12,'','','',''],
[13,'','','',''],
[14,'','','',''],
[15,'','','',''],
[16,'','','',''],
[17,'write lines','escribir líneas','écrire des lignes','라인 쓰기'],
[18,'braille keyboard','teclado Braille','clavier braille','점자 키보드']
];
/*
const r002A =[['Casillas', '1languagelist', '2SignList', 3, 4, '5-Papa1', '6-Papa2', '7-Papa3', '8-Papa4', '9-Papa5', '10-Papa6', '11-Papa7', '12-Papa8', '13-Papa9', '14-Papa10', 15, 16, 17, 18],
[1, '', '', 'i1, information in english enabled, change', 'i0, information in english disabled, change', '', '', '', '', '', '', '', '', '', '', '', '', 'write lines', 'braille keyboard'],
[2, '', '', 'i1, información en ingles habilitada, cambiar', 'i0, información en ingles deshabilitada, cambiar', '', '', '', '', '', '', '', '', '', '', '', '', 'escribir líneas', 'teclado Braille'],
[3, '', '', 'i1, informations en anglais activées, changer', 'i0, informations en anglais désactivées, changer', '', '', '', '', '', '', '', '', '', '', '', '', 'écrire des lignes', 'clavier braille'],
[4, '', '', 'i1, 영문 안내 가능, 변경', 'i0, 영문 안내 불가, 변경', '', '', '', '', '', '', '', '', '', '', '', '', '라인 쓰기', '점자 키보드'],
];
*/
//CONTROLAR idioma, seña y lugar
const mIr002B =/**/[['Recursos/ Casillas..', '1 0:Imag,1:Icon,2:Texto,3ImagenA,4VideoA', '2 id de la Imag, Icon o Texto', '3 onclick function, vacio=NO PERMITIDA(INFO)', '4 Visible 1:SI 0:no', '5 0:FotI 1:Vide 2:FotM 3:Text 4:In 5:Out', '6 id Video([5]1) o id foto([5]0/2)', '7 id Texto Icono', '8 ids Iconos Capa1', '9 ids Iconos Capa2', '10 Capa3 Estado 0: 1:/ 2:_ 3: ? 4: -'],
[1, 1,25,100,1,0,0,0,0,0,0],
[2, 1,26,101,1,0,0,0,0,0,0],
[3, 2,13,25 ,0,0,0,0,0,0,0],
[4, 2,14,26 ,1,0,0,0,0,0,0],
[5, 0,35,102,1,0,0,0,0,0,0],
[6, 0,77,103,0,0,0,0,0,0,0],
[7, 0,77,104,0,0,0,0,0,0,0],
[8, 0,77,105,0,0,0,0,0,0,0],
[9, 0,77,106,0,0,0,0,0,0,0],
[10,0,77,107,0,0,0,0,0,0,0],
[11,0,77,108,0,0,0,0,0,0,0],
[12,0,77,109,0,0,0,0,0,0,0],
[13,0,77,110,0,0,0,0,0,0,0],
[14,0,77,111,0,0,0,0,0,0,0],
[15,0,0 ,0  ,0,0,0,0,0,0,0],
[16,0,0 ,0  ,0,0,0,0,0,0,0],
[17,2,12,6  ,0,0,0,0,0,0,0],
[18,2,20,6  ,0,0,0,0,0,0,0]
];
/*
//trabajar de la mano con g00VARS[11][2]::LÍNEA(S)DeLectura:0TodasLasLíneas,1Texto,2Morse,3Braille,4Señas
//['1 0:Imagen,1:Icono,2:Texto,3ImagenAlta,4VideoAlto,5Texto+Icono,6Icono+Icono serie
//['5 0:FotoIcono 1:VideoMulti 2:FotoMulti 3:TextoMulti 4:InEntrada 5:OutSalida
//['10 0:Normal sin nada, 1:Deshabilitado o Deseleccionado /slash, 2:Campo Vacio obligatorio ?pregunta, 3:Campo con info o Respuesta _RayaInferior, 4:Campo vacio opcional -GuionMedio
const r002B =[['Recursos/ Casillas..', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
['1 0:Imag,1:Icon,2:Texto,3ImagenA,4VideoA', 1, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2],
['2 id de la Imag, Icon o Texto', 25, 26, 13, 14, 35, 77, 77, 77, 77, 77, 77, 77, 77, 77, 0, 0, 12, 20],
['3 onclick function, vacio=NO PERMITIDA(INFO)', 100, 101, 25, 26, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 0, 0, 6, 6],
['4 Visible 1:SI 0:no', 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
['5 0:FotI 1:Vide 2:FotM 3:Text 4:In 5:Out', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
['6 id Video([5]1) o id foto([5]0/2)', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
['7 id Texto Icono', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
['8 ids Iconos Capa1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
['9 ids Iconos Capa2', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
['10 Capa3 Estado 0: 1:/ 2:_ 3: ? 4: -', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
*/

/*DESCRIBIR IDIOMA, SEÑA Y LUGAR texto alternativo para imagen*/
const mIr002Z =/**/[['Casillas', 1, 2, 3, 4],
[1, 'language icon','icono de idioma','icône de la langue','언어 아이콘'],
[2, 'sign language','icono de lengua de señas','langue des signes','수화 아이콘'],
[3, '','texto de i1','',''],
[4, '','texto de i0','',''],
[5, 'world','mundo','monde','세계'],
[7, 'person in a place','persona en un lugar','personne dans un lieu','장소에 있는 사람'],
[6, 'person in a place','persona en un lugar','personne dans un lieu','장소에 있는 사람'],
[8, 'person in a place','persona en un lugar','personne dans un lieu','장소에 있는 사람'],
[9, 'person in a place','persona en un lugar','personne dans un lieu','장소에 있는 사람'],
[10,'person in a place','persona en un lugar','personne dans un lieu','장소에 있는 사람'],
[11,'person in a place','persona en un lugar','personne dans un lieu','장소에 있는 사람'],
[12,'person in a place','persona en un lugar','personne dans un lieu','장소에 있는 사람'],
[13,'person in a place','persona en un lugar','personne dans un lieu','장소에 있는 사람'],
[14,'person in a place','persona en un lugar','personne dans un lieu','장소에 있는 사람'],
[15,'','','',''],
[16,'','','',''],
[17,'write lines','escribir líneas','écrire des lignes','écrire des lignes'],
[18,'braille keyboard','teclado Braille','clavier braille','clavier braille']
];
/*
const r002Z =[['Casillas', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
[1, 'language icon', 'sign language', '', '', 'world', 'person in a place', 'person in a place', 'person in a place', 'person in a place', 'person in a place', 'person in a place', 'person in a place', 'person in a place', 'person in a place', '', '', 'write lines', 'braille keyboard'],
[2, 'icono de idioma', 'icono de lengua de señas', 'texto de i1', 'texto de i0', 'mundo', 'persona en un lugar', 'persona en un lugar', 'persona en un lugar', 'persona en un lugar', 'persona en un lugar', 'persona en un lugar', 'persona en un lugar', 'persona en un lugar', 'persona en un lugar', '', '', 'escribir líneas', 'teclado Braille'],
[3, 'icône de la langue', 'langue des signes', '', '', 'monde', 'personne dans un lieu', 'personne dans un lieu', 'personne dans un lieu', 'personne dans un lieu', 'personne dans un lieu', 'personne dans un lieu', 'personne dans un lieu', 'personne dans un lieu', 'personne dans un lieu', '', '', 'écrire des lignes', 'clavier braille'],
[4, '언어 아이콘', '수화 아이콘', '', '', '세계', '장소에 있는 사람', '장소에 있는 사람', '장소에 있는 사람', '장소에 있는 사람', '장소에 있는 사람', '장소에 있는 사람', '장소에 있는 사람', '장소에 있는 사람', '장소에 있는 사람', '', '', 'écrire des lignes', 'clavier braille'],
];
*/


//NOTA LA RUTA 3 
//CON LAS CONSTANTES (const) r003A r003B r003C r003D y r003Z
//NO APARECEN AQUI PORQUE SE VAN A PASAR AL SERVIDOR EN FORMATO JSON
//POR ELLO SE TRANSLADARON AL COMIENZO DE ESTE ARCHIVO

//RUTA 3 TITULARES E INFORMACION LOCAL, las mIr003's no salen en pantalla, hay que quitarlas???
//LA RUTA 3 ES LA BASE DE DATOS QUE SE DEBE PASAR AL SERVIDOR EN FORMATO JSON Y CUANDO SE SOLICITE DEBE MOSTRARSE EN EL NAVEGADOR
//RUTA 3 - ANUNCIOS /INFORMACIÓN COMUNITARIA/  pública /Libro comunitario
// o003* res3* r003* c003* rrr3* jAds jsAds
//const 	r003A  y r003B ver/buscar aquí al final en MONGODB
//mIc003A - B - Z es la variable clave del frontend debido al código r003* = c003*, es decir r003 es una variable provisional para manejar los ejemplos con JSON

//INFORMAR ANUNCIOS
//GUIONES HAY ANUNCIOS
//const c00#* aquí si .. GUION ANUNCIO VACIO 1/3 para cuando hay anuncios, el "chorizo de todos los contenidos ampliados"  los primeros contenidos de la localidad se puede quitar dado que es el mismo res3A?????..

//PRIMER ERROR!!! - liZtAObject is not defined  -- INVERTIR el interruptor? estará llamando los datos desde el servidor hasta la BD en google sheets?
/**A1 * /
var mIc003A = liZtAObject;
/**A2 */
/**A3 */
var mIc003A = [];
var mIc003B = [];
var mIc003Z = [];
/*RETO unificar mIc003B0AZ*/
var mIc003A0 =[['Casillas', 1, 2, 3, 4]
,[1, ['', 'here you can find out about the activities published by local leaders, contact us: ilifebogota@gmail.com', 'on this website you will find information accessible through seven modes', 'Navigation, to navigate there are 6 navigation buttons, on the screen they go from top to bottom', 'there are 3 buttons on the left side, the square menu button, the diagonal button to cancel or exit and the triangle button up to go up or back', 'and on the right side there are 3 other buttons, the vertical quick information bar button, the round button to accept or enter and the down triangle button to go down or go forward', 'To enable navigation buttons on a physical keyboard, turn on caps lock button', 'square button is 7 or N, diagonal button is 4 or M, triangle up button is 1 or comma, the vertical bar button is 9 or V, the round button is 6, C or space, and the down triangle button is 3, X or tab'],['', 'aquí podrás conocer las actividades publicadas por los líderes locales, contáctanos: ilifebogota@gmail.com', 'en este sitio web encontrará información accesible a través de siete modos', 'Navegación, para navegar hay 6 botones de navegación, en pantalla van desde arriba hacia abajo', 'hay 3 botones al lado izquierdo, el botón cuadrado de menú, el botón diagonal para cancelar o salir y el botón de triángulo hacia arriba para subir o retroceder', 'y al lado derecho hay otros 3 botones, el botón barra vertical de información rápida, el botón redondo para aceptar o ingresar y el botón de triángulo hacia abajo para ir abajo o avanzar', 'Para habilitar los botones de navegación en un teclado físico, active el botón de bloqueo de mayúsculas', 'el botón cuadrado es el 7 o la N, el botón diagonal es el 4 o la M, el botón de triángulo hacia arriba es el 1 o la coma, el botón barra vertical es el 9 o la V, el botón redondo es el 6, la C o el espacio, y el botón de triángulo hacia abajo es el 3, la X o el tabulador'],['', 'ici vous pouvez découvrir les activités publiées par les dirigeants locaux, contactez-nous : ilifebogota@gmail.com', "sur ce site vous trouverez des informations accessibles à travers sept modes", "Navigation, pour naviguer il y a 6 boutons de navigation, sur l'écran ils vont de haut en bas", "il y a 3 boutons sur le côté gauche, le bouton menu carré, le bouton diagonal pour annuler ou sortir et le bouton triangle haut pour monter ou dos", "et sur le côté droit il y a 3 autres boutons, le bouton barre d'information rapide verticale, le bouton rond pour accepter ou entrer et le bouton triangle bas pour descendre ou avancer", "Pour activer les boutons de navigation sur un clavier physique, activez le bouton de verrouillage des majuscules", "le bouton carré est 7 ou N, le bouton diagonal est 4 ou M, le bouton triangle vers le haut est 1 ou virgule, le bouton de la barre verticale est 9 ou V, le bouton rond est 6, C ou espace, et le bouton triangle vers le bas est 3, X ou tabulation"],['', '여기에서 지역 지도자들이 발표한 활동에 대해 알아볼 수 있습니다. ilifebogota@gmail.com으로 문의하세요.', "이 웹사이트에서 7가지 모드를 통해 액세스할 수 있는 정보를 찾을 수 있습니다", "탐색, 탐색을 위해 화면에서 위에서 아래로 이동하는 6개의 탐색 버튼이 있습니다.", "왼쪽에는 사각형 메뉴 버튼, 취소 또는 종료를 위한 대각선 버튼, 위로 또는 뒤로 가기를 위한 위쪽 삼각형 버튼 3개의 버튼이 있습니다.", "오른쪽에는 3개의 다른 버튼이 있습니다. 세로 빠른 정보 표시줄 버튼, 수락 또는 입력을 위한 원형 버튼, 아래로 이동 또는 앞으로 이동을 위한 아래쪽 삼각형 버튼입니다.", "실제 키보드에서 탐색 버튼을 활성화하려면 Caps Lock 버튼을 켜십시오.", "사각형 버튼은 7 또는 N, 대각선 버튼은 4 또는 M, 삼각형 위쪽 버튼은 1 또는 쉼표, 세로 막대 버튼은 9 또는 V, 둥근 버튼은 6 , C 또는 스페이스, 아래쪽 삼각형 버튼은 3, X, 또는 탭"]]
,[2, ['Participate this May 27 in the Accountability of the Local Mayor of Puente Aranda at the Parque Polideportivo El Jazmín', 'located at 1 G street number 41 A 39, at 9:00, it is an opportunity for citizens to learn about public management and to ask questions and make comments about it', 'and participate as observers of the management carried out by the Local Mayor\'s Office of Puente Aranda'],['Participa este 27 de mayo en la Rendición de Cuentas de la Alcaldía Local de Puente Aranda en el Parque Polideportivo El Jazmín', 'ubicado en la calle 1 G número 41 A 39, a las 9:00, es una oportunidad para que los ciudadanos conozcan la gestión pública y puedan hacer preguntas y comentarios sobre la misma', 'y participar como veedores de la gestión que realiza la Alcaldía Local de Puente Aranda'],['Participez ce 27 mai à la Responsabilité du maire local de Puente Aranda au Parque Polideportivo El Jazmín', 'situé au numéro de rue 1 G 41 A 39, à 9h00, c\'est l\'occasion pour les citoyens de s\'informer sur la gestion publique, de poser des questions et de faire des commentaires à son sujet', 'et participer en tant qu\'observateurs de la gestion effectuée par le bureau du maire local de Puente Aranda'],['5월 27일 El Jazmín 스포츠 센터 공원에 있는 Puente Aranda 지역 시장실의 책임에 참여하십시오', '1G번지 41A 39번지 9:00시 시민이 공공경영에 대해 배우고 이에 대해 질문하고 의견을 개진할 수 있는 기회', 'Puente Aranda 지역 시장실에서 수행하는 관리의 참관인으로 참여']]
,[3, ['Are you a female caregiver or victim of violence?, we invite you to register at the Manzana del Cuidado de Puente Aranda at calle 1 b number: 57_51, or call the number 313-8699-260, e-mail: imora@sdmujer.gov.co', 'In the Manzana del Cuidado you can train with SENA, learn to create your own business, enjoy physical activity classes, bike school, and more', 'while the elderly and people with disabilities who are under your care are cared for by caregivers from the Mayor\'s Office'],['¿Eres mujer cuidadora o víctima de la violencia?, te invitamos a incribirte en la Manzana del Cuidado de Puente Aranda en la calle 1 b número: 57_51, o llamar al número 313-8699-260, e-mail: imora@sdmujer.gov.co', 'en la Manzana del Cuidado podrás capacitarse con el SENA, aprender a crear su propio negocio, disfrutar clases de actividad física, escuela de la bici, y más', 'mientras que las personas mayores y las personas con discapacidad que están bajo su cuidado son cuidadas por cuidadoras de la Alcaldía'],["Êtes-vous une femme aidante ou victime de violence?, nous vous invitons à vous inscrire à la Manzana del Cuidado de Puente Aranda à calle 1 b numéro: 57_51, ou appelez le numéro 313-8699-260, e-mail: imora@sdmujer.gov.co", "Dans la Manzana del Cuidado, vous pouvez vous entraîner avec SENA, apprendre à créer votre propre entreprise, profiter de cours d'activité physique, d'une école de vélo, et plus encore", "tandis que les personnes âgées et les personnes handicapées dont vous avez la charge sont pris en charge par les soignants de la mairie"],["당신은 여성 간병인이거나 폭력의 피해자입니까?Manzana del Cuidado de Puente Aranda에서 calle 1 b 번호: 57_51,로 등록하거나 313-8699-260으로 전화하십시오, 이메일: imora@sdmujer.gov.co", "Manzana del Cuidado에서는 SENA와 함께 훈련하고, 자신만의 비즈니스를 만드는 방법을 배우고, 신체 활동 수업, 자전거 학교 등을 즐길 수 있습니다", "당신이 돌보고 있는 노인과 장애인은 시장실에서 돌보고 있습니다"]]
,[4, ['Do you have an emergency? Call 123', '123 is the telephone line that gathers all the security and emergency numbers: Police, Mobility, Fire, Risk Management and Ministry of Health'],																																	['¿Tienes una emergencia?, llama al 123', 'el 123 es la línea telefónica que reúne todos los números de seguridad y emergencias: Policía, Movilidad, Bomberos, Gestión de Riesgos y Secretaría de Salud'],																													['Vous avez une urgence, appelez le 123', 'Le 123 est la ligne téléphonique qui regroupe tous les numéros de sécurité et d\'urgence : Police, Mobilité, Pompiers, Gestion des Risques et Ministère de la Santé'],																																				['급한 일이 있으신가요? 123번으로 전화하세요', '123은 경찰, 교통, 소방, 위험 관리 및 보건부와 같은 모든 보안 및 비상 전화 번호를 통합하는 전화선입니다']]
,[5, ['Are you a victim of violence against women?, call 123, 01-8001-12137, or WhatsApp 300-7551-846, and request the accompaniment of the purple patrol', 'With the purple patrol, women who are victims of violence can receive security, guidance, help and prevention'],													['¿Eres víctima de violencia contra las mujeres?, llama al 123, al 01-8001-12137, o al WhatsApp 300-7551-846, y solicita el acompañamiento de la patrulla púrpura', 'con la patrulla púrpura las mujeres que sean víctimas de violencia pueden recibir seguridad, orientación, ayuda y prevención'],						['Êtes-vous victime de violence faite aux femmes?, appelez le 123, 01-8001-12137, ou WhatsApp 300-7551-846, et demandez l\'accompagnement de la patrouille violette', 'Avec la patrouille violette, les femmes victimes de violence peuvent recevoir sécurité, accompagnement, aide et prévention'],															['당신은 여성에 대한 폭력의 피해자입니까?, 123, 01-8001-12137, 또는 WhatsApp 300-7551-846, 으로 전화하여 보라색 순찰대 동행을 요청하십시오', '보라색 순찰을 통해 폭력의 피해자인 여성들은 안전, 지도, 도움 및 예방을 받을 수 있습니다']]
,[6, ['Invitation to boys, girls and young people to musical training', 'with the National Batuta Foundation and being part of the local Orchestral Center'],																																									['Invitación a niños, niñas y jóvenes de la localidad a la formación musical', 'con La Fundación Nacional Batuta y ser parte del Centro Orquestal de la localidad'],																																						['Invitation aux garçons, filles et jeunes à la formation musicale', 'avec la Fondation Nationale Batuta et faisant partie du Centre Orchestral local'],																																																		['소년, 소녀, 청소년을 음악 교육에 초대', 'National Batuta Foundation과 지역 오케스트라 센터의 일원이 됨']]
,[7, ['Si tienes entre 18 a 28 años, te invitamos a ser parte del programa Parceros Por Bogotá, incluye cursos,  actividades de ciudad y la posibilidad de recibir 500 mil pesos al mes', 'te invitamos a inscribirte el viernes 19 de mayo, lugar: Parque Dalias, calle 4 número 54-01, barrio Galán; Hora: 15:00 a 17:00'],	['Si tienes entre 18 a 28 años, te invitamos a ser parte del programa Parceros Por Bogotá, incluye cursos,  actividades de ciudad y la posibilidad de recibir 500 mil pesos al mes', 'te invitamos a inscribirte el viernes 19 de mayo, lugar: Parque Dalias, calle 4 número 54-01, barrio Galán; Hora: 15:00 a 17:00'],	['Si vous avez entre 18 et 28 ans, nous vous invitons à faire partie du programme Parceros Por Bogotá, qui comprend des cours, des activités de la ville et la possibilité de recevoir 500 000 pesos par mois,', 'Nous vous invitons à vous inscrire le vendredi 19 mai, lieu : Parque Dalias, 4e rue numéro 54-01, quartier Galán ; Heure : 15h00 à 17h00'],	['18세에서 28세 사이인 경우 코스, 도시 활동 및 매월 500,000페소를 받을 수 있는 가능성이 포함된 Parceros Por Bogotá 프로그램에 귀하를 초대합니다', '5월 19일 금요일, 장소: Parque Dalias, 4번가 54-01, Galán 지역; 시간: 15:00~17:00']]
,[8, ['Local Impulse delivers between 1 to 3 million pesos to strengthen and grow local businesses', 'Register now at https://bit.ly/ImpulsoLocal or visit https://www.bogotalocal.gov.co/bogotaproductiva.html'],																												['Impulso Local entrega entre 1 a 3 millones de pesos para fortalecer y hacer crecer los emprendimientos locales', 'Regístrate ahora en https://bit.ly/ImpulsoLocal o visita https://www.bogotalocal.gov.co/bogotaproductiva.html'],																						['Local Impulse fournit entre 1 et 3 millions de pesos pour renforcer et développer les entreprises locales', 'Inscrivez-vous maintenant sur https://bit.ly/ImpulsoLocal ou visitez https://www.bogotalocal.gov.co/bogotaproductiva.html'],																														['Local Impulse는 지역 비즈니스를 강화하고 성장시키기 위해 100만 ~ 300만 달러의 페소를 제공합니다', '지금 https://bit.ly/ImpulsoLocal에 등록하거나 https://www.bogotalocal.gov.co/bogotaproductiva.html을 방문하세요']]
];
/**A4 */


/**RETO unificar mIc003B1AZ
 * [' id ', '1 0:Imag,1:Icon,2:Texto,3ImagenA,4VideoA', '2 id de la Imag, Icon o Texto', '3 onclick function,vacio=NO PERMITIDA(INFO)/id"apuntador"', '4 Visible 1:SI 0:no', '5 0:FotI 1:Vide 2:FotM 3:Text 4:In 5:Out', '6 id Video([5]1) o id foto([5]0/2)', '7 id Texto Icono', '8 ids Iconos Capa1', '9 ids Iconos Capa2', '10 Capa3 Estado 0: 1:/ 2:_ 3: ? 4: -'
* /
var mIc003B1AZ =[[1 	,[3, 1, 3, 3, 3, 3, 3, 3],[31, 3, 16, 12, 13, 8, 9, 10],0,1,[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0]]
/**fin RETO */

/**A3 */
var mIc003A1 =[['Casillas', 1, 2, 3, 4]
,[1, ['', 'here you can find out about the activities published by local leaders, contact us: ilifebogota@gmail.com', 'on this website you will find information accessible through seven modes', 'Navigation, to navigate there are 6 navigation buttons, on the screen they go from top to bottom', 'there are 3 buttons on the left side, the square menu button, the diagonal button to cancel or exit and the triangle button up to go up or back', 'and on the right side there are 3 other buttons, the vertical quick information bar button, the round button to accept or enter and the down triangle button to go down or go forward', 'To enable navigation buttons on a physical keyboard, turn on caps lock button', 'square button is 7 or N, diagonal button is 4 or M, triangle up button is 1 or comma, the vertical bar button is 9 or V, the round button is 6, C or space, and the down triangle button is 3, X or tab'],['', 'aquí podrás conocer las actividades publicadas por los líderes locales, contáctanos: ilifebogota@gmail.com', 'en este sitio web encontrará información accesible a través de siete modos', 'Navegación, para navegar hay 6 botones de navegación, en pantalla van desde arriba hacia abajo', 'hay 3 botones al lado izquierdo, el botón cuadrado de menú, el botón diagonal para cancelar o salir y el botón de triángulo hacia arriba para subir o retroceder', 'y al lado derecho hay otros 3 botones, el botón barra vertical de información rápida, el botón redondo para aceptar o ingresar y el botón de triángulo hacia abajo para ir abajo o avanzar', 'Para habilitar los botones de navegación en un teclado físico, active el botón de bloqueo de mayúsculas', 'el botón cuadrado es el 7 o la N, el botón diagonal es el 4 o la M, el botón de triángulo hacia arriba es el 1 o la coma, el botón barra vertical es el 9 o la V, el botón redondo es el 6, la C o el espacio, y el botón de triángulo hacia abajo es el 3, la X o el tabulador'],['', 'ici vous pouvez découvrir les activités publiées par les dirigeants locaux, contactez-nous : ilifebogota@gmail.com', "sur ce site vous trouverez des informations accessibles à travers sept modes", "Navigation, pour naviguer il y a 6 boutons de navigation, sur l'écran ils vont de haut en bas", "il y a 3 boutons sur le côté gauche, le bouton menu carré, le bouton diagonal pour annuler ou sortir et le bouton triangle haut pour monter ou dos", "et sur le côté droit il y a 3 autres boutons, le bouton barre d'information rapide verticale, le bouton rond pour accepter ou entrer et le bouton triangle bas pour descendre ou avancer", "Pour activer les boutons de navigation sur un clavier physique, activez le bouton de verrouillage des majuscules", "le bouton carré est 7 ou N, le bouton diagonal est 4 ou M, le bouton triangle vers le haut est 1 ou virgule, le bouton de la barre verticale est 9 ou V, le bouton rond est 6, C ou espace, et le bouton triangle vers le bas est 3, X ou tabulation"],['', '여기에서 지역 지도자들이 발표한 활동에 대해 알아볼 수 있습니다. ilifebogota@gmail.com으로 문의하세요.', "이 웹사이트에서 7가지 모드를 통해 액세스할 수 있는 정보를 찾을 수 있습니다", "탐색, 탐색을 위해 화면에서 위에서 아래로 이동하는 6개의 탐색 버튼이 있습니다.", "왼쪽에는 사각형 메뉴 버튼, 취소 또는 종료를 위한 대각선 버튼, 위로 또는 뒤로 가기를 위한 위쪽 삼각형 버튼 3개의 버튼이 있습니다.", "오른쪽에는 3개의 다른 버튼이 있습니다. 세로 빠른 정보 표시줄 버튼, 수락 또는 입력을 위한 원형 버튼, 아래로 이동 또는 앞으로 이동을 위한 아래쪽 삼각형 버튼입니다.", "실제 키보드에서 탐색 버튼을 활성화하려면 Caps Lock 버튼을 켜십시오.", "사각형 버튼은 7 또는 N, 대각선 버튼은 4 또는 M, 삼각형 위쪽 버튼은 1 또는 쉼표, 세로 막대 버튼은 9 또는 V, 둥근 버튼은 6 , C 또는 스페이스, 아래쪽 삼각형 버튼은 3, X, 또는 탭"]]
,[2, ['Come dance salsa, merengue and bachata!', "Idartes invites you to have fun in the dance halls of the Felicidad Chapinero Center. We'll dance, move, and take care of our health.", 'Dates: June 13, 20, and 27. Time: 5 to 7 p.m. Location: Dance Classroom, Felicidad Chapinero Center. Calle 82 número 10-69'],['¡Ven a bailar salsa, merengue y bachata!', 'Idartes te invita a divertirte en los salones de baile del Centro Felicidad Chapinero. Bailamos, nos movemos y cuidamos nuestra salud.', 'Fechas: 13, 20 y 27 de junio. Hora: de 5 a 7 de la tarde. Lugar: Aula de Danza, Centro Felicidad Chapinero. Calle 82 número 10-69'],['Venez danser la salsa, le merengue et la bachata !', 'Idartes vous invite à vous amuser dans les salles de danse du Centre Felicidad Chapinero. Dansons, bougeons et prenons soin de notre santé.', 'Dates : 13, 20 et 27 juin. Heure : 17 h à 19 h. Lieu : Salle de danse, Centre Felicidad Chapinero. Calle 82 número 10-69'],['살사, 메렝게, 바차타를 즐겨보세요!', '이다르테스가 펠리시다드 차피네로 센터의 댄스홀에서 즐거운 시간을 보내도록 초대합니다. 춤추고, 움직이고, 건강도 챙기세요.', '날짜: 6월 13일, 20일, 27일. 시간: 오후 5시~7시. 장소: 펠리시다드 차피네로 센터 댄스 교실. Calle 82 número 10-69']]
,[3, ['Learn to take care of your neighborhood! Educational Workshop: Waste Disposal in Chapinero', 'We invite you to an educational talk to learn how to properly dispose of waste and avoid problems in the community.', 'Date: June 25, 2025. Time: 2:00 p.m. Location: Community Hall of the El Paraíso neighborhood. Address: Transversal 1 Bis Este # 40D - 11, Chapinero'],['¡Aprende a cuidar tu barrio!  Taller Educativo: Disposición de Residuos en Chapinero', 'Te invitamos a una charla educativa para conocer cómo disponer correctamente los residuos y evitar problemas en la comunidad.', 'Fecha: 25 de junio de 2025. Hora: 2:00 p.m. Lugar: Salón Comunal del barrio El Paraíso. Dirección: Transversal 1 Bis Este # 40D - 11, Chapinero'],['Apprenez à prendre soin de votre quartier ! Atelier pédagogique : Élimination des déchets à Chapinero', 'Nous vous invitons à une conférence éducative pour apprendre à éliminer correctement les déchets et éviter les problèmes dans la communauté.', 'Date : 25 juin 2025. Heure : 14 h. Lieu : Salle communautaire du quartier El Paraíso. Adresse : Transversal 1 Bis Este # 40D - 11, Chapinero.'],['이웃을 돌보는 법을 배우세요! 교육 워크숍: 차피네로의 폐기물 처리', '지역 사회에서 발생하는 문제를 피하고 폐기물을 올바르게 처리하는 방법을 배울 수 있는 교육 강연에 여러분을 초대합니다.', '날짜: 2025년 6월 25일. 시간: 오후 2시. 장소: 엘 파라이소 지역 커뮤니티 홀. 주소: Transversal 1 Bis Este # 40D - 11, Chapinero']]
,[4, ['Are you a woman caregiver or a victim of violence? We invite you to register at the Chapinero Care Block at 47b-45 East 3 Bis intersection, Bogotá, or call 3015080526, or email cborrero@sdmujer.gov.co.', 'In the Manzana del Cuidado you can train with SENA, learn to create your own business, enjoy physical activity classes, bike school, and more', 'while the elderly and people with disabilities who are under your care are cared for by caregivers from the Mayor\'s Office'],['¿Eres mujer cuidadora o víctima de la violencia? Te invitamos a inscribirte en la Manzana del Cuidado de Chapinero en la transversal 3 Bis Este número 47b - 45, de Bogotá, o llamar al número 3015080526, e-mail: cborrero@sdmujer.gov.co', 'en la Manzana del Cuidado podrás capacitarse con el SENA, aprender a crear su propio negocio, disfrutar clases de actividad física, escuela de la bici, y más', 'mientras que las personas mayores y las personas con discapacidad que están bajo su cuidado son cuidadas por cuidadoras de la Alcaldía'],["Êtes-vous une femme aidante ou victime de violence ? Nous vous invitons à vous inscrire au Chapinero Care Block, à l'intersection 47b-45 East 3 Bis, à Bogotá, ou à appeler le 3015080526, ou à envoyer un courriel à cborrero@sdmujer.gov.co.", "Dans la Manzana del Cuidado, vous pouvez vous entraîner avec SENA, apprendre à créer votre propre entreprise, profiter de cours d'activité physique, d'une école de vélo, et plus encore", "tandis que les personnes âgées et les personnes handicapées dont vous avez la charge sont pris en charge par les soignants de la mairie"],["여성 간병인이거나 폭력 피해자이신가요? 보고타 47b-45 East 3 Bis 교차로에 위치한 Chapinero Care Block에서 등록하시거나, 3015080526으로 전화하시거나, cborrero@sdmujer.gov.co로 이메일을 보내주세요.", "Manzana del Cuidado에서는 SENA와 함께 훈련하고, 자신만의 비즈니스를 만드는 방법을 배우고, 신체 활동 수업, 자전거 학교 등을 즐길 수 있습니다", "당신이 돌보고 있는 노인과 장애인은 시장실에서 돌보고 있습니다"]]
,[5, ['Do you have an emergency? Call 123', '123 is the telephone line that gathers all the security and emergency numbers: Police, Mobility, Fire, Risk Management and Ministry of Health'],																																	['¿Tienes una emergencia?, llama al 123', 'el 123 es la línea telefónica que reúne todos los números de seguridad y emergencias: Policía, Movilidad, Bomberos, Gestión de Riesgos y Secretaría de Salud'],																													['Vous avez une urgence, appelez le 123', 'Le 123 est la ligne téléphonique qui regroupe tous les numéros de sécurité et d\'urgence : Police, Mobilité, Pompiers, Gestion des Risques et Ministère de la Santé'],																																				['급한 일이 있으신가요? 123번으로 전화하세요', '123은 경찰, 교통, 소방, 위험 관리 및 보건부와 같은 모든 보안 및 비상 전화 번호를 통합하는 전화선입니다']]
,[6, ['Are you a victim of violence against women?, call 123, 01-8001-12137, or WhatsApp 300-7551-846, and request the accompaniment of the purple patrol', 'With the purple patrol, women who are victims of violence can receive security, guidance, help and prevention'],													['¿Eres víctima de violencia contra las mujeres?, llama al 123, al 01-8001-12137, o al WhatsApp 300-7551-846, y solicita el acompañamiento de la patrulla púrpura', 'con la patrulla púrpura las mujeres que sean víctimas de violencia pueden recibir seguridad, orientación, ayuda y prevención'],						['Êtes-vous victime de violence faite aux femmes?, appelez le 123, 01-8001-12137, ou WhatsApp 300-7551-846, et demandez l\'accompagnement de la patrouille violette', 'Avec la patrouille violette, les femmes victimes de violence peuvent recevoir sécurité, accompagnement, aide et prévention'],															['당신은 여성에 대한 폭력의 피해자입니까?, 123, 01-8001-12137, 또는 WhatsApp 300-7551-846, 으로 전화하여 보라색 순찰대 동행을 요청하십시오', '보라색 순찰을 통해 폭력의 피해자인 여성들은 안전, 지도, 도움 및 예방을 받을 수 있습니다']]

];
/**A4 */


//CONTROLAR anuncios
//CONTROL HAY ANUNCIOS
/**B1 * /
var mIc003B = liZtBObject;
/**B2 * /
/**B3 */
//kTapa0 imagenes..
var mIc003B0 =[['Recursos/Casillas', '1 0:Imag,1:Icon,2:Texto,3ImagenA,4VideoA', '2 id de la Imag, Icon o Texto', '3 onclick function,vacio=NO PERMITIDA(INFO)/id"apuntador"', '4 Visible 1:SI 0:no', '5 0:FotI 1:Vide 2:FotM 3:Text 4:In 5:Out', '6 id Video([5]1) o id foto([5]0/2)', '7 id Texto Icono', '8 ids Iconos Capa1', '9 ids Iconos Capa2', '10 Capa3 Estado 0: 1:/ 2:_ 3: ? 4: -']
,[1 	,[3, 1, 3, 3, 3, 3, 3, 3],[31, 3, 16, 12, 13, 8, 9, 10],0,1,[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0]]
,[2 	,[3, 3, 3],[82, 82, 82],0,1,[0, 0, 0],[0, 0, 0],[0, 0, 0],[0, 0, 0],[0, 0, 0],[0, 0, 0]]
,[3 	,[3, 3, 3],[90, 91, 92],0,1,[0, 0, 0],[0, 0, 0],[0, 0, 0],[0, 0, 0],[0, 0, 0],[0, 0, 0]]
,[4 	,[3, 3],[88, 88],0,1,[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0]]
,[5 	,[3, 3],[84, 84],0,1,[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0]]
,[6 	,[3, 3],[85, 85],0,1,[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0]]
,[7 	,[3, 3],[89, 89],0,1,[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0]]
,[8 	,[3, 3],[93, 93],0,1,[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0]]
];
/**B4 */
/**B3 */
var mIc003B1 =[['Recursos/Casillas', '1 0:Imag,1:Icon,2:Texto,3ImagenA,4VideoA', '2 id de la Imag, Icon o Texto', '3 onclick function,vacio=NO PERMITIDA(INFO)/id"apuntador"', '4 Visible 1:SI 0:no', '5 0:FotI 1:Vide 2:FotM 3:Text 4:In 5:Out', '6 id Video([5]1) o id foto([5]0/2)', '7 id Texto Icono', '8 ids Iconos Capa1', '9 ids Iconos Capa2', '10 Capa3 Estado 0: 1:/ 2:_ 3: ? 4: -']
,[1 	,[3, 1, 3, 3, 3, 3, 3, 3],[31, 3, 16, 12, 13, 8, 9, 10],0,1,[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0]]
,[2 	,[3, 3, 3],[95, 95, 95],0,1,[0, 0, 0],[0, 0, 0],[0, 0, 0],[0, 0, 0],[0, 0, 0],[0, 0, 0]]
,[3 	,[3, 3, 3],[94, 94, 94],0,1,[0, 0, 0],[0, 0, 0],[0, 0, 0],[0, 0, 0],[0, 0, 0],[0, 0, 0]]
,[4 	,[3, 3, 3],[92, 91, 92],0,1,[0, 0, 0],[0, 0, 0],[0, 0, 0],[0, 0, 0],[0, 0, 0],[0, 0, 0]]
,[5 	,[3, 3],[88, 88],0,1,[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0]]
,[6 	,[3, 3],[84, 84],0,1,[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0]]
];
/**B4 */


/*
var c003B = [['Recursos/ Casillas..', 1, 2, 3, 4, 5, 6, 7, 8],
['1 0:Imag,1:Icon,2:Texto,3ImagenA,4VideoA', [3, 1, 3, 3, 3, 3, 3, 3], [3, 3, 3], [3, 3, 3], [3, 3], [3, 3], [3, 3], [3, 3], [3, 3]],
['2 id de la Imag, Icon o Texto', [31, 3, 16, 12, 13, 8, 9, 10], [82, 82, 82], [90, 91, 92], [88, 88], [84, 84], [85, 85], [89, 89], [93, 93]],
['3 onclick function,vacio=NO PERMITIDA(INFO)/id"apuntador"', 0, 0, 0, 0, 0, 0, 0, 0],
['4 Visible 1:SI 0:no', 1, 1, 1, 1, 1, 1, 1, 1],
['5 0:FotI 1:Vide 2:FotM 3:Text 4:In 5:Out', [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
['6 id Video([5]1) o id foto([5]0/2)', [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
['7 id Texto Icono', [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
['8 ids Iconos Capa1', [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
['9 ids Iconos Capa2', [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
['10 Capa3 Estado 0: 1:/ 2:_ 3: ? 4: -', [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
];
*/
/*
const 	c003B		=[	['Recursos/ Casillas..'											,1			,2			,3		,4			,5],
							['1 0:Imag,1:Icon,2:Texto,3ImagenA,4VideoA'					,[3,1,3]	,[2,2,3] 	,[2]	,[2,1,1]	,[3,2]],
							['2 id de la Imag, Icon o Texto'							,[18,16,4]	,[33,35,5] 	,[31]	,[37,15,16]	,[3,36]],
							['3 onclick function,vacio=NO PERMITIDA(INFO)/id"apuntador"',0			,0 			,0		,0			,0],
							['4 Visible 1:SI 0:no'										,1			,1 			,1		,1			,1],
							['5 0:FotI 1:Vide 2:FotM 3:Text 4:In 5:Out'					,[0,0,0]	,[0,0,0] 	,[0]	,[0,0,0]	,[0,0]],
							['6 id Video([5]1) o id foto([5]0/2)'						,[0,0,0]	,[0,0,0] 	,[0]	,[0,0,0]	,[0,0]],
							['7 id Texto Icono'											,[0,0,0]	,[0,0,0] 	,[0]	,[0,0,0]	,[0,0]],
							['8 ids Iconos Capa1'										,[0,0,0]	,[0,0,0] 	,[0]	,[0,0,0]	,[0,0]],
							['9 ids Iconos Capa2'										,[0,0,0]	,[0,0,0] 	,[0]	,[0,0,0]	,[0,0]],
							['10 Capa3 Estado 0: 1:/ 2:_ 3: ? 4: -'						,[0,0,0]	,[0,0,0] 	,[0]	,[0,0,0]	,[0,0]]
						];
*/

//DESCRIBIR TITULARES E INFO LOCAL texto alternativo para imagen
//IMAGENES HAY ANUNCIOS
/**C1 * /
var mIc003Z = liZtZObject;
/**C2 * /
/**C3 */
var mIc003Z0 =[['Casillas', 1, 2, 3, 4]
,[1,['photography of the place', 'reading person icon', 'There are four blue icons: wheelchair person, deaf ear, blind eye and the last one is an icon with 2 faces', 'In front of a laptop is an adult man without his right arm, the man looks at the screen and holds his glasses with his left hand', '', '', '', ''],['fotografía del lugar', 'icono de persona leyendo', 'Hay cuatro iconos azules: persona en silla de ruedas, oído sordo, ojo ciego y el último es un icono con 2 caras', 'Frente a una computadora portátil hay un hombre adulto sin su brazo derecho, el hombre mira la pantalla y sostiene sus anteojos con la mano izquierda', '', '', '', ''],['photographie du lieu', 'icône de la personne qui lit', "Il y a quatre icônes bleues : personne en fauteuil roulant, sourde oreille, aveugle et la dernière est une icône à 2 visages", "Devant un ordinateur portable se trouve un homme adulte sans son bras droit, l'homme regarde l'écran et tient ses lunettes avec sa main gauche", '', '', '', ''],['장소의 사진', '읽는 사람 아이콘', "Il y a quatre icônes bleues : personne en fauteuil roulant, sourde oreille, aveugle et la dernière est une icône à 2 visages", "Devant un ordinateur portable se trouve un homme adulte sans son bras droit, l'homme regarde l'écran et tient ses lunettes avec sa main gauche", '', '', '', '']]
,[2,['smiling woman', 'smiling woman', 'smiling woman'],['mujer sonriente', 'mujer sonriente', 'mujer sonriente'],['femme souriante', 'femme souriante', 'femme souriante'],['웃는 여자', '웃는 여자', '웃는 여자']]
,[3,['Hike Ciud', 'Meeting ', 'Free '],['Bus de la alcaldía', 'Actividad física', 'Mujer cuidando una niña'],["Randonnée ", "Point de", "Inscr"],["Ciudad ", "만남의 장소", "Inscr"]]
,[4,['logo 123', 'logo 123'],['logo 123', 'logo 123'],['logo 123', 'logo 123'],['로고 123', '로고 123']]
,[5,['purple patrol drawing', 'purple patrol drawing'],['dibujo de la patrulla púrpura', 'dibujo de la patrulla púrpura'],['dessin de patrouille violette', 'dessin de patrouille violette'],['보라색 순찰 그림', '보라색 순찰 그림']]
,[6,['invitation ', 'abece 1'],['niños y jovenes tocando música', 'niños y jovenes tocando música'],['invitation ', 'abece'],['총회 초대,   ', 'abece']]
,[7,['young man smiling', 'young man smiling'],['Joven sonriendo', 'Joven sonriendo'],['jeune homme souriant', 'jeune homme souriant'],['웃는 청년', '웃는 청년']]
,[8,['emprendimiento', 'empre2'],['emprendedora', 'emprendedora'],['emprendimiento', 'empre2'],['emprendimiento', 'empre2']]
];
/**C4 */

/**C3 */
var mIc003Z1 =[['Casillas', 1, 2, 3, 4]
,[1,['photography of the place', 'reading person icon', 'There are four blue icons: wheelchair person, deaf ear, blind eye and the last one is an icon with 2 faces', 'In front of a laptop is an adult man without his right arm, the man looks at the screen and holds his glasses with his left hand', '', '', '', ''],['fotografía del lugar', 'icono de persona leyendo', 'Hay cuatro iconos azules: persona en silla de ruedas, oído sordo, ojo ciego y el último es un icono con 2 caras', 'Frente a una computadora portátil hay un hombre adulto sin su brazo derecho, el hombre mira la pantalla y sostiene sus anteojos con la mano izquierda', '', '', '', ''],['photographie du lieu', 'icône de la personne qui lit', "Il y a quatre icônes bleues : personne en fauteuil roulant, sourde oreille, aveugle et la dernière est une icône à 2 visages", "Devant un ordinateur portable se trouve un homme adulte sans son bras droit, l'homme regarde l'écran et tient ses lunettes avec sa main gauche", '', '', '', ''],['장소의 사진', '읽는 사람 아이콘', "Il y a quatre icônes bleues : personne en fauteuil roulant, sourde oreille, aveugle et la dernière est une icône à 2 visages", "Devant un ordinateur portable se trouve un homme adulte sans son bras droit, l'homme regarde l'écran et tient ses lunettes avec sa main gauche", '', '', '', '']]
,[2,['Hike Ciud', 'Meeting ', 'Free '],['Pies de personas bailando', 'Pies de personas bailando', 'Pies de personas bailando'],["Randonnée ", "Point de", "Inscr"],["Ciudad ", "만남의 장소", "Inscr"]]
,[3,['Hike Ciud', 'Meeting ', 'Free '],['Depósito de residuos', 'Depósito de residuos', 'Depósito de residuos'],["Randonnée ", "Point de", "Inscr"],["Ciudad ", "만남의 장소", "Inscr"]]
,[4,['Hike Ciud', 'Meeting ', 'Free '],['Mujer cuidando una niña', 'Actividad física', 'Mujer cuidando una niña'],["Randonnée ", "Point de", "Inscr"],["Ciudad ", "만남의 장소", "Inscr"]]
,[5,['logo 123', 'logo 123'],['logo 123', 'logo 123'],['logo 123', 'logo 123'],['로고 123', '로고 123']]
,[6,['purple patrol drawing', 'purple patrol drawing'],['dibujo de la patrulla púrpura', 'dibujo de la patrulla púrpura'],['dessin de patrouille violette', 'dessin de patrouille violette'],['보라색 순찰 그림', '보라색 순찰 그림']]
];
/**C4 */
/*
var c003Z = [['Casillas', 1, 2, 3, 4, 5, 6, 7, 8],
[1, ['photography of the place', 'reading person icon', 'There are four blue icons: wheelchair person, deaf ear, blind eye and the last one is an icon with 2 faces', 'In front of a laptop is an adult man without his right arm, the man looks at the screen and holds his glasses with his left hand', '', '', '', ''], ['smiling woman', 'smiling woman', 'smiling woman'], ['Hike Ciud', 'Meeting ', 'Free '], ['logo 123', 'logo 123'], ['purple patrol drawing', 'purple patrol drawing'], ['invitation ', 'abece 1'], ['young man smiling', 'young man smiling'], ['emprendimiento', 'empre2']],
[2, ['fotografía del lugar', 'icono de persona leyendo', 'Hay cuatro iconos azules: persona en silla de ruedas, oído sordo, ojo ciego y el último es un icono con 2 caras', 'Frente a una computadora portátil hay un hombre adulto sin su brazo derecho, el hombre mira la pantalla y sostiene sus anteojos con la mano izquierda', '', '', '', ''], ['mujer sonriente', 'mujer sonriente', 'mujer sonriente'], ['Bus de la alcaldía', 'Actividad física', 'Mujer cuidando una niña'], ['logo 123', 'logo 123'], ['dibujo de la patrulla púrpura', 'dibujo de la patrulla púrpura'], ['niños y jovenes tocando música', 'niños y jovenes tocando música'], ['Joven sonriendo', 'Joven sonriendo'], ['emprendedora', 'emprendedora']],
[3, ['photographie du lieu', 'icône de la personne qui lit', "Il y a quatre icônes bleues : personne en fauteuil roulant, sourde oreille, aveugle et la dernière est une icône à 2 visages", "Devant un ordinateur portable se trouve un homme adulte sans son bras droit, l'homme regarde l'écran et tient ses lunettes avec sa main gauche", '', '', '', ''], ['femme souriante', 'femme souriante', 'femme souriante'], ["Randonnée ", "Point de", "Inscr"], ['logo 123', 'logo 123'], ['dessin de patrouille violette', 'dessin de patrouille violette'], ['invitation ', 'abece'], ['jeune homme souriant', 'jeune homme souriant'], ['emprendimiento', 'empre2']],
[4, ['장소의 사진', '읽는 사람 아이콘', "Il y a quatre icônes bleues : personne en fauteuil roulant, sourde oreille, aveugle et la dernière est une icône à 2 visages", "Devant un ordinateur portable se trouve un homme adulte sans son bras droit, l'homme regarde l'écran et tient ses lunettes avec sa main gauche", '', '', '', ''], ['웃는 여자', '웃는 여자', '웃는 여자'], ["Ciudad ", "만남의 장소", "Inscr"], ['로고 123', '로고 123'], ['보라색 순찰 그림', '보라색 순찰 그림'], ['총회 초대,   ', 'abece'], ['웃는 청년', '웃는 청년'], ['emprendimiento', 'empre2']]
];
*/
/*
const 	c003Z		=[	['Casillas'		,1																																																													,2																																																																												,3																				,4																					,5],
							[1			,['person walking up the mountain'		,'Be part of our ecological walks, and discover places that will help you connect with nature.'							,' This Sunday the appointment is in Ciudad Bolívar, Casona and Sierra Morena.'	]	,['Hike Ciudad Bolívar, Casona and Sierra Morena. Sunday, January 29, 9:00 a.m. to 11:00 a.m.'	,' Meeting point: In front of the Francisco José de Caldas District University, calle 68 bis A sur #49F-70.'	,'Free registration, more information at www.idrd.gov.co and on our social networks' 		]	,['invitation to sports event, physical activity, blah, blah, blah, blah']		,['invitation to General Assembly, blah, blah, blah, blah', 'abece 1','abece 2']	,['open calls by the ICT Ministry for university students, teachers, women, people with disabilities, companies and entrepreneurs in the country'								,'Those interested should enter the ministry\'s website www.mintic.gov.co to consult the details of each project and the closing of the calls.']					],
							[2			,['persona caminando por la montaña'	,'Sé parte de nuestras caminatas ecológicas, y conoce lugares que te ayudarán a conectarte con la naturaleza.'			,'Este domingo la cita es en Ciudad Bolívar, Casona y Sierra Morena.'			]	,['Caminata Ciudad Bolívar, Casona y Sierra Morena. Domingo 29 de enero, 9:00 a 11:00 a.m.'		,'Punto de encuentro: Frente a la Universidad Distrital Francisco José de Caldas, calle 68 bis A sur #49F-70.'	,'Inscripción gratuita, mayor información en www.idrd.gov.co y en nuestras redes sociales'	] 	,['invitación a evento deportivo, actividad física, bla, bla, bla, bla']		,['invitación a Asamblea General, bla, bla, bla, bla' ,'abece 1','abece 2']			,['convocatorias abiertas por el MinTIC para universitarios, docentes, mujeres, personas con discapacidad, empresas y emprendedores del país'									,'Los interesados deberán ingresar a la página web del ministerio www.mintic.gov.co a consultar los detalles de cada proyecto y los cierres de las convocatorias.']	],
							[3			,['personne qui monte la montagne'		,'Faites partie de nos promenades écologiques et découvrez des lieux qui vous aideront à vous connecter avec la nature.','Ce dimanche, le rendez-vous est à Ciudad Bolívar, Casona et Sierra Morena.'   ]	,["Randonnée Ciudad Bolívar, Casona et Sierra Morena. Dimanche 29 janvier de 9h00 à 11h00"		," Point de rencontre : Devant l'Université du district Francisco José de Caldas, calle 68 bis A sur #49F-70."	,"Inscription gratuite, plus d'informations sur www.idrd.gov.co et sur nos réseaux sociaux"	]	,['invitation à un événement sportif, activité physique, bla, bla, bla, bla']	,['invitation à l\'Assemblée générale, bla, bla, bla, bla','abece','abece']			,['appels ouverts du ministère des TIC pour les étudiants universitaires, les enseignants, les femmes, les personnes handicapées, les entreprises et les entrepreneurs du pays'	,'Les personnes intéressées doivent entrer sur le site Web du ministère www.mintic.gov.co pour consulter les détails de chaque projet et la clôture des appels.']	],
							[4			,['산을 오르는 사람'						,'Faites partie de nos promenades écologiques et découvrez des lieux qui vous aideront à vous connecter avec la nature.','Ce dimanche, le rendez-vous est à Ciudad Bolívar, Casona et Sierra Morena.'   ]	,["Randonnée Ciudad Bolívar, Casona et Sierra Morena. Dimanche 29 janvier de 9h00 à 11h00"		," Point de rencontre : Devant l'Université du district Francisco José de Caldas, calle 68 bis A sur #49F-70."	,"Inscription gratuite, plus d'informations sur www.idrd.gov.co et sur nos réseaux sociaux"	]	,['invitation à un événement sportif, activité physique, bla, bla, bla, bla']	,['invitation à l\'Assemblée générale, bla, bla, bla, bla','abece','abece']			,['appels ouverts du ministère des TIC pour les étudiants universitaires, les enseignants, les femmes, les personnes handicapées, les entreprises et les entrepreneurs du pays'	,'Les personnes intéressées doivent entrer sur le site Web du ministère www.mintic.gov.co pour consulter les détails de chaque projet et la clôture des appels.']	]
						];
*/


//INFORMAR CABEZOTE ANUNCIOS Y no hay anuncios para publicar
//GUION ANUNCIO VACIO 1/3 para cuando no hay anuncios..
//const mIo00#* GUION ANUNCIO VACIO 1/3 para cuando no hay anuncios???  se puede quitar?????..
const mIo003A =/**/[['Casillas', 1, 2, 3, 4],//la D es de default cuando no hay ningun anuncio
['Head',['','Here you can find out the information published by local leaders, contact us: ilifebogota@gmail.com', 'on this website you will find information accessible through seven modes', 'Navigation, to navigate there are 6 navigation buttons, on the screen they go from top to bottom', 'there are 3 buttons on the left side, the square menu button, the diagonal button to cancel or exit and the triangle button up to go up or back', 'and on the right side there are 3 other buttons, the vertical quick information bar button, the round button to accept or enter and the down triangle button to go down or go forward', 'To enable navigation buttons on a physical keyboard, turn on caps lock button', 'square button is 7 or N, diagonal button is 4 or M, triangle up button is 1 or comma, the vertical bar button is 9 or V, the round button is 6, C or space, and the down triangle button is 3, X or tab'],['','Aquí podrás conocer la información publicada por los líderes locales, contáctanos: ilifebogota@gmail.com', 'en este sitio web encontrará información accesible a través de siete modos', 'Navegación, para navegar hay 6 botones de navegación, en pantalla van desde arriba hacia abajo', 'hay 3 botones al lado izquierdo, el botón cuadrado de menú, el botón diagonal para cancelar o salir y el botón de triángulo hacia arriba para subir o retroceder', 'y al lado derecho hay otros 3 botones, el botón barra vertical de información rápida, el botón redondo para aceptar o ingresar y el botón de triángulo hacia abajo para ir abajo o avanzar', 'Para habilitar los botones de navegación en un teclado físico, active el botón de bloqueo de mayúsculas', 'el botón cuadrado es el 7 o la N, el botón diagonal es el 4 o la M, el botón de triángulo hacia arriba es el 1 o la coma, el botón barra vertical es el 9 o la V, el botón redondo es el 6, la C o el espacio, y el botón de triángulo hacia abajo es el 3, la X o el tabulador'],['','Retrouvez ici les informations publiées par les dirigeants locaux, contactez-nous : ilifebogota@gmail.com', "sur ce site vous trouverez des informations accessibles à travers sept modes", "Navigation, pour naviguer il y a 6 boutons de navigation, sur l'écran ils vont de haut en bas", "il y a 3 boutons sur le côté gauche, le bouton menu carré, le bouton diagonal pour annuler ou sortir et le bouton triangle haut pour monter ou dos", "et sur le côté droit il y a 3 autres boutons, le bouton barre d'information rapide verticale, le bouton rond pour accepter ou entrer et le bouton triangle bas pour descendre ou avancer", "Pour activer les boutons de navigation sur un clavier physique, activez le bouton de verrouillage des majuscules", "le bouton carré est 7 ou N, le bouton diagonal est 4 ou M, le bouton triangle vers le haut est 1 ou virgule, le bouton de la barre verticale est 9 ou V, le bouton rond est 6, C ou espace, et le bouton triangle vers le bas est 3, X ou tabulation"],['','여기에서 지역 지도자들이 게시한 정보를 확인할 수 있습니다. ilifebogota@gmail.com으로 문의하세요.', "이 웹사이트에서 7가지 모드를 통해 액세스할 수 있는 정보를 찾을 수 있습니다", "탐색, 탐색을 위해 화면에서 위에서 아래로 이동하는 6개의 탐색 버튼이 있습니다.", "왼쪽에는 사각형 메뉴 버튼, 취소 또는 종료를 위한 대각선 버튼, 위로 또는 뒤로 가기를 위한 위쪽 삼각형 버튼 3개의 버튼이 있습니다.", "오른쪽에는 3개의 다른 버튼이 있습니다. 세로 빠른 정보 표시줄 버튼, 수락 또는 입력을 위한 원형 버튼, 아래로 이동 또는 앞으로 이동을 위한 아래쪽 삼각형 버튼입니다.", "실제 키보드에서 탐색 버튼을 활성화하려면 Caps Lock 버튼을 켜십시오.", "사각형 버튼은 7 또는 N, 대각선 버튼은 4 또는 M, 삼각형 위쪽 버튼은 1 또는 쉼표, 세로 막대 버튼은 9 또는 V, 둥근 버튼은 6 , C 또는 스페이스, 아래쪽 삼각형 버튼은 3, X, 또는 탭"]],
['Others',['Vacio'],['Vacio'],['Vacio'],['Vacio']]
];

//CONTROLAR CABEZOTE ANUNCIOS Y no hay anuncios para publicar
//CONTROL ANUNCIO VACIO 3/3 para cuando no hay anuncios..
const mIo003B = [['Recursos/Casillas', '1 0:Imag,1:Icon,2:Texto,3ImagenA,4VideoA', '2 id de la Imag, Icon o Texto', '3 onclick function,vacio=NO PERMITIDA(INFO)/id"apuntador"', '4 Visible 1:SI 0:no', '5 0:FotI 1:Vide 2:FotM 3:Text 4:In 5:Out', '6 id Video([5]1) o id foto([5]0/2)', '7 id Texto Icono', '8 ids Iconos Capa1', '9 ids Iconos Capa2', '10 Capa3 Estado 0: 1:/ 2:_ 3: ? 4: -'],
['Head',	[3, 1, 3, 3, 3, 3, 3, 3],[31, 3, 16, 12, 13, 8, 9, 10],0,1,[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0]],
['Others',	[1],[82],0,1,[0],[0],[0],[0],[0],[0]]
]

//trabajar de la mano con g00VARS[11][2]::LÍNEA(S)DeLectura:0TodasLasLíneas,1Texto,2Morse,3Braille,4Señas
//['1 0:Imagen,1:Icono,2:Texto,3ImagenAlta,4VideoAlto,5Texto+Icono,6Icono+Icono serie
//['5 0:FotoIcono 1:VideoMulti 2:FotoMulti 3:TextoMulti 4:InEntrada 5:OutSalida
//['10 0:Normal sin nada, 1:Deshabilitado o Deseleccionado /slash, 2:Campo Vacio obligatorio ?pregunta, 3:Campo con info o Respuesta _RayaInferior, 4:Campo vacio opcional -GuionMedio 	
/*
const o003B = [['Recursos/ Casillas..', 'Head', 'Others'],//la D es de default cuando no hay ningun anuncio
['1 0:Imag,1:Icon,2:Texto,3ImagenA,4VideoA', [3, 1, 3, 3, 3, 3, 3, 3], [1]],
['2 id de la Imag, Icon o Texto', [31, 3, 16, 12, 13, 8, 9, 10], [82]],//82 83 54
['3 onclick function,vacio=NO PERMITIDA(INFO)/id"apuntador"', 0, 0],
['4 Visible 1:SI 0:no', 1, 1],
['5 0:FotI 1:Vide 2:FotM 3:Text 4:In 5:Out', [0, 0, 0, 0, 0, 0, 0, 0], [0]],
['6 id Video([5]1) o id foto([5]0/2)', [0, 0, 0, 0, 0, 0, 0, 0], [0]],
['7 id Texto Icono', [0, 0, 0, 0, 0, 0, 0, 0], [0]],
['8 ids Iconos Capa1', [0, 0, 0, 0, 0, 0, 0, 0], [0]],
['9 ids Iconos Capa2', [0, 0, 0, 0, 0, 0, 0, 0], [0]],
['10 Capa3 Estado 0: 1:/ 2:_ 3: ? 4: -', [0, 0, 0, 0, 0, 0, 0, 0], [0]]
];
*/
/*
const 	o003B		=[		['Recursos/ Casillas..'										],//la D es de default cuando no hay ningun anuncio
							['1 0:Imag,1:Icon,2:Texto,3ImagenA,4VideoA'					,[1]],
							['2 id de la Imag, Icon o Texto'							,[82]],//82 83 54
							['3 onclick function,vacio=NO PERMITIDA(INFO)/id"apuntador"',0],
							['4 Visible 1:SI 0:no'										,1],
							['5 0:FotI 1:Vide 2:FotM 3:Text 4:In 5:Out'					,[0]],
							['6 id Video([5]1) o id foto([5]0/2)'						,[0]],
							['7 id Texto Icono'											,[0]],
							['8 ids Iconos Capa1'										,[0]],
							['9 ids Iconos Capa2'										,[0]],
							['10 Capa3 Estado 0: 1:/ 2:_ 3: ? 4: -'						,[0]]
						];
*/

//IMAGEN NO hay anuncios..
//DESCRIBIR CABEZOTE ANUNCIOS Y no hay anuncios para publicar - texto alternativo para imagen
const mIo003Z =/**/[['Casillas', 1, 2, 3, 4],
[1, ['photography of the place', 'reading person icon', 'There are four blue icons: wheelchair person, deaf ear, blind eye and the last one is an icon with 2 faces', 'In front of a laptop is an adult man without his right arm, the man looks at the screen and holds his glasses with his left hand', '', '', '', ''],['fotografía del lugar', 'icono de persona leyendo', 'Hay cuatro iconos azules: persona en silla de ruedas, oído sordo, ojo ciego y el último es un icono con 2 caras', 'Frente a una computadora portátil hay un hombre adulto sin su brazo derecho, el hombre mira la pantalla y sostiene sus anteojos con la mano izquierda', '', '', '', ''],['photographie du lieu', 'icône de la personne qui lit', "Il y a quatre icônes bleues : personne en fauteuil roulant, sourde oreille, aveugle et la dernière est une icône à 2 visages", "Devant un ordinateur portable se trouve un homme adulte sans son bras droit, l'homme regarde l'écran et tient ses lunettes avec sa main gauche", '', '', '', ''],['장소의 사진', '읽는 사람 아이콘', "Il y a quatre icônes bleues : personne en fauteuil roulant, sourde oreille, aveugle et la dernière est une icône à 2 visages", "Devant un ordinateur portable se trouve un homme adulte sans son bras droit, l'homme regarde l'écran et tient ses lunettes avec sa main gauche", '', '', '', '']],
[2, ['Satellite'],['Satelite'],['Satellite'],['위성']]
];
/*
const 	o003Z		=[	['Casillas'	],//la D es de default cuando no hay ningun anuncio
							[1		,['Satellite']],
							[2		,['Satelite']],
							[3		,['Satellite']],
							[4		,['위성']]
						];
*/
//INFORMAR ANUNCIOS..
//GUIONES ANUNCIOS  -- qué hace?? es sólo para guíon del texto???, se puede quitar??
var mIr003A =/**/[['Casillas', 1, 2, 3, 4],//la D es de default cuando no hay ningun anuncio
['Head',['', 'here you can find out about the activities published by local leaders, contact us: ilifebogota@gmail.com', 'on this website you will find information accessible through seven modes', 'Navigation, to navigate there are 6 navigation buttons, on the screen they go from top to bottom', 'there are 3 buttons on the left side, the square menu button, the diagonal button to cancel or exit and the triangle button up to go up or back', 'and on the right side there are 3 other buttons, the vertical quick information bar button, the round button to accept or enter and the down triangle button to go down or go forward', 'To enable navigation buttons on a physical keyboard, turn on caps lock button', 'square button is 7 or N, diagonal button is 4 or M, triangle up button is 1 or comma, the vertical bar button is 9 or V, the round button is 6, C or space, and the down triangle button is 3, X or tab'],['', 'aquí podrás conocer las actividades publicadas por los líderes locales, contáctanos: ilifebogota@gmail.com', 'en este sitio web encontrará información accesible a través de siete modos', 'Navegación, para navegar hay 6 botones de navegación, en pantalla van desde arriba hacia abajo', 'hay 3 botones al lado izquierdo, el botón cuadrado de menú, el botón diagonal para cancelar o salir y el botón de triángulo hacia arriba para subir o retroceder', 'y al lado derecho hay otros 3 botones, el botón barra vertical de información rápida, el botón redondo para aceptar o ingresar y el botón de triángulo hacia abajo para ir abajo o avanzar', 'Para habilitar los botones de navegación en un teclado físico, active el botón de bloqueo de mayúsculas', 'el botón cuadrado es el 7 o la N, el botón diagonal es el 4 o la M, el botón de triángulo hacia arriba es el 1 o la coma, el botón barra vertical es el 9 o la V, el botón redondo es el 6, la C o el espacio, y el botón de triángulo hacia abajo es el 3, la X o el tabulador'],['', 'ici vous pouvez découvrir les activités publiées par les dirigeants locaux, contactez-nous : ilifebogota@gmail.com', "sur ce site vous trouverez des informations accessibles à travers sept modes", "Navigation, pour naviguer il y a 6 boutons de navigation, sur l'écran ils vont de haut en bas", "il y a 3 boutons sur le côté gauche, le bouton menu carré, le bouton diagonal pour annuler ou sortir et le bouton triangle haut pour monter ou dos", "et sur le côté droit il y a 3 autres boutons, le bouton barre d'information rapide verticale, le bouton rond pour accepter ou entrer et le bouton triangle bas pour descendre ou avancer", "Pour activer les boutons de navigation sur un clavier physique, activez le bouton de verrouillage des majuscules", "le bouton carré est 7 ou N, le bouton diagonal est 4 ou M, le bouton triangle vers le haut est 1 ou virgule, le bouton de la barre verticale est 9 ou V, le bouton rond est 6, C ou espace, et le bouton triangle vers le bas est 3, X ou tabulation"],['','여기에서 지역 지도자들이 발표한 활동에 대해 알아볼 수 있습니다. ilifebogota@gmail.com으로 문의하세요.', "이 웹사이트에서 7가지 모드를 통해 액세스할 수 있는 정보를 찾을 수 있습니다", "탐색, 탐색을 위해 화면에서 위에서 아래로 이동하는 6개의 탐색 버튼이 있습니다.", "왼쪽에는 사각형 메뉴 버튼, 취소 또는 종료를 위한 대각선 버튼, 위로 또는 뒤로 가기를 위한 위쪽 삼각형 버튼 3개의 버튼이 있습니다.", "오른쪽에는 3개의 다른 버튼이 있습니다. 세로 빠른 정보 표시줄 버튼, 수락 또는 입력을 위한 원형 버튼, 아래로 이동 또는 앞으로 이동을 위한 아래쪽 삼각형 버튼입니다.", "실제 키보드에서 탐색 버튼을 활성화하려면 Caps Lock 버튼을 켜십시오.", "사각형 버튼은 7 또는 N, 대각선 버튼은 4 또는 M, 삼각형 위쪽 버튼은 1 또는 쉼표, 세로 막대 버튼은 9 또는 V, 둥근 버튼은 6 , C 또는 스페이스, 아래쪽 삼각형 버튼은 3, X, 또는 탭"]],
['Others',['Vacio'],['Vacio'],['Vacio'],['Vacio']],
['Others',['Vacio'],['Vacio'],['Vacio'],['Vacio']],
['Others',['Vacio'],['Vacio'],['Vacio'],['Vacio']],
['Others',['Vacio'],['Vacio'],['Vacio'],['Vacio']]
];

//CONTROL ANUNCIOS
//CONTROLAR anuncios
var mIr003B =/**/[['Recursos/Casillas', '1 0:Imag,1:Icon,2:Texto,3ImagenA,4VideoA', '2 id de la Imag, Icon o Texto', '3 onclick function,vacio=NO PERMITIDA(INFO)/id"apuntador"', '4 Visible 1:SI 0:no', '5 0:FotI 1:Vide 2:FotM 3:Text 4:In 5:Out', '6 id Video([5]1) o id foto([5]0/2)', '7 id Texto Icono', '8 ids Iconos Capa1', '9 ids Iconos Capa2', '10 Capa3 Estado 0: 1:/ 2:_ 3: ? 4: -'],
['Head' 	,[3, 1, 3, 3, 3, 3, 3, 3],[31, 3, 16, 12, 13, 8, 9, 10],0,1,[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0]],
['Others' 	,[1],[84],0,1,[0],[0],[0],[0],[0],[0]],
['' 		,[0],[0],0,0,[0],[0],[0],[0],[0],[0]],
['' 		,[0],[0],0,0,[0],[0],[0],[0],[0],[0]],
['' 		,[0],[0],0,0,[0],[0],[0],[0],[0],[0]]
]
/*
var r003B = [['Recursos/ Casillas..', 'Head', 'Others'],
['1 0:Imag,1:Icon,2:Texto,3ImagenA,4VideoA', [3, 1, 3, 3, 3, 3, 3, 3], [1]],
['2 id de la Imag, Icon o Texto', [31, 3, 16, 12, 13, 8, 9, 10], [84]],
['3 onclick function,vacio=NO PERMITIDA(INFO)/id"apuntador"', 0, 0],
['4 Visible 1:SI 0:no', 1, 1],
['5 0:FotI 1:Vide 2:FotM 3:Text 4:In 5:Out', [0, 0, 0, 0, 0, 0, 0, 0], [0]],
['6 id Video([5]1) o id foto([5]0/2)', [0, 0, 0, 0, 0, 0, 0, 0], [0]],
['7 id Texto Icono', [0, 0, 0, 0, 0, 0, 0, 0], [0]],
['8 ids Iconos Capa1', [0, 0, 0, 0, 0, 0, 0, 0], [0]],
['9 ids Iconos Capa2', [0, 0, 0, 0, 0, 0, 0, 0], [0]],
['10 Capa3 Estado 0: 1:/ 2:_ 3: ? 4: -', [0, 0, 0, 0, 0, 0, 0, 0], [0]]
];
*/
/*
const 	r003B		=[	['Recursos/ Casillas..'										,1			,2			,3		,4			,5],
							['1 0:Imag,1:Icon,2:Texto,3ImagenA,4VideoA'					,[3,1,3]	,[3,1,3] 	,[1]	,[1,1,1]	,[3]],
							['2 id de la Imag, Icon o Texto'							,[6,16,4]	,[7,15,5] 	,[11]	,[12,15,16]	,[3]],
							['3 onclick function,vacio=NO PERMITIDA(INFO)/id"apuntador"',0			,0 			,0		,0			,0],
							['4 Visible 1:SI 0:no'										,1			,1 			,1		,1			,1],
							['5 0:FotI 1:Vide 2:FotM 3:Text 4:In 5:Out'					,[0,0,0]	,[0,0,0] 	,[0]	,[0,0,0]	,[0]],
							['6 id Video([5]1) o id foto([5]0/2)'						,[0,0,0]	,[0,0,0] 	,[0]	,[0,0,0]	,[0]],
							['7 id Texto Icono'											,[0,0,0]	,[0,0,0] 	,[0]	,[0,0,0]	,[0]],
							['8 ids Iconos Capa1'										,[0,0,0]	,[0,0,0] 	,[0]	,[0,0,0]	,[0]],
							['9 ids Iconos Capa2'										,[0,0,0]	,[0,0,0] 	,[0]	,[0,0,0]	,[0]],
							['10 Capa3 Estado 0: 1:/ 2:_ 3: ? 4: -'						,[0,0,0]	,[0,0,0] 	,[0]	,[0,0,0]	,[0]]
						];
*/
/*
var 	r003B		=[		['Recursos/ Casillas..'										],
							['1 0:Imag,1:Icon,2:Texto,3ImagenA,4VideoA'					,[1]],
							['2 id de la Imag, Icon o Texto'							,[84]],
							['3 onclick function,vacio=NO PERMITIDA(INFO)/id"apuntador"',0],
							['4 Visible 1:SI 0:no'										,1],
							['5 0:FotI 1:Vide 2:FotM 3:Text 4:In 5:Out'					,[0]],
							['6 id Video([5]1) o id foto([5]0/2)'						,[0]],
							['7 id Texto Icono'											,[0]],
							['8 ids Iconos Capa1'										,[0]],
							['9 ids Iconos Capa2'										,[0]],
							['10 Capa3 Estado 0: 1:/ 2:_ 3: ? 4: -'						,[0]]
						];
*/
//QUITAR?? QUE ES PARA LOS TIEMPOS, SI NO SERIA PARA EL/LOS ID'S∫ DE LAS IMAGENES QUE INTERVIENEN
//VER r003C y r003D
/*
const 	r003C 		=	[	[0		,1		,2		],
							[1		,1		,2		],
							[2		,[18,34,47,22,17,15,30,93,33,34,22,30,18,30,47,34,32,38,33,30,100,93,7,47,34,23,30,93,23,8,24,14,31,34,47,7,100,93,31,41,30,100,93,31,41,30,100,93,31,41,30,100,93,31,41,30]		,2		],
							[3		,1		,2		]
						];

const 	r003D 		=	[	[0		,1		,2		],
							[1		,1		,2		],
							[2		,['P','E','R','S','O','N','A',' ','D','E','S','A','P','A','R','E','C','I','D','A',',',' ','G','R','E','T','A',' ','T','H','U','M','B','E','R','G',',',' ','B','L','A',',',' ','B','L','A',',',' ','B','L','A',',',' ','B','L','A']		,2		],
							[3		,1		,2		]
						];
*/
/*DESCRIBIR TITULARES E INFO LOCAL texto alternativo para imagen*/
//IMAGENES DE ANUNCIOS
var mIr003Z =/**/[['Casillas', 1, 2, 3, 4],
[1,['photography of the place', 'reading person icon', 'There are four blue icons: wheelchair person, deaf ear, blind eye and the last one is an icon with 2 faces', 'In front of a laptop is an adult man without his right arm, the man looks at the screen and holds his glasses with his left hand', '', '', '', ''],['fotografía del lugar', 'icono de persona leyendo', 'Hay cuatro iconos azules: persona en silla de ruedas, oído sordo, ojo ciego y el último es un icono con 2 caras', 'Frente a una computadora portátil hay un hombre adulto sin su brazo derecho, el hombre mira la pantalla y sostiene sus anteojos con la mano izquierda', '', '', '', ''],['photographie du lieu', 'icône de la personne qui lit', "Il y a quatre icônes bleues : personne en fauteuil roulant, sourde oreille, aveugle et la dernière est une icône à 2 visages", "Devant un ordinateur portable se trouve un homme adulte sans son bras droit, l'homme regarde l'écran et tient ses lunettes avec sa main gauche", '', '', '', ''],['장소의 사진', '읽는 사람 아이콘', "Il y a quatre icônes bleues : personne en fauteuil roulant, sourde oreille, aveugle et la dernière est une icône à 2 visages", "Devant un ordinateur portable se trouve un homme adulte sans son bras droit, l'homme regarde l'écran et tient ses lunettes avec sa main gauche", '', '', '', '']],
[2,['Moving satellite'],['Satélite en movimiento'],['satellite en mouvement'],['움직이는 위성']],
[3,['1'],[''],[''],['']],
[4,['2'],[''],[''],['']],
[5,['3'],[''],[''],['']]
];
/*
var r003Z = [['Casillas', 'Head', 'Others'],
[1, ['photography of the place', 'reading person icon', 'There are four blue icons: wheelchair person, deaf ear, blind eye and the last one is an icon with 2 faces', 'In front of a laptop is an adult man without his right arm, the man looks at the screen and holds his glasses with his left hand', '', '', '', ''], ['Moving satellite']],
[2, ['fotografía del lugar', 'icono de persona leyendo', 'Hay cuatro iconos azules: persona en silla de ruedas, oído sordo, ojo ciego y el último es un icono con 2 caras', 'Frente a una computadora portátil hay un hombre adulto sin su brazo derecho, el hombre mira la pantalla y sostiene sus anteojos con la mano izquierda', '', '', '', ''], ['Satélite en movimiento']],
[3, ['photographie du lieu', 'icône de la personne qui lit', "Il y a quatre icônes bleues : personne en fauteuil roulant, sourde oreille, aveugle et la dernière est une icône à 2 visages", "Devant un ordinateur portable se trouve un homme adulte sans son bras droit, l'homme regarde l'écran et tient ses lunettes avec sa main gauche", '', '', '', ''], ['satellite en mouvement']],
[4, ['장소의 사진', '읽는 사람 아이콘', "Il y a quatre icônes bleues : personne en fauteuil roulant, sourde oreille, aveugle et la dernière est une icône à 2 visages", "Devant un ordinateur portable se trouve un homme adulte sans son bras droit, l'homme regarde l'écran et tient ses lunettes avec sa main gauche", '', '', '', ''], ['움직이는 위성']]
];
*/
/*
//IMAGENES DE ANUNCIOS
var 	r003Z		=[	['Casillas'	],
							[1		,['Moving points']],
							[2		,['Satélite en movimiento']],
							[3		,['satellite en mouvement']],
							[4		,['움직이는 위성']]
						];
*/

//INFORMAR CABEZOTE ANUNCIOS Y BUSCANDO ANUNCIOS..
//GUION BUSCANDO ANUNCIOS..
//mIres3 es el texto que sale al dar clic en el cabezote (Primer botón de los anuncios).. "aquí podrás bla,bla,bla", se utiliza tanto para cuando hay anuncios o cuando se ve el satelite de la busqueda de anuncios o no hay anuncios..
//const res#* aquí__podrás GUION ANUNCIO VACIO 1/3 para cuando hay anuncios, ese texto es el mismo que sale en pantalla apenas se va el satelite de la busqueda de anuncios..
const mIres3A =/**/[['Casillas', 1, 2, 3, 4],//la D es de default cuando no hay ningun anuncio
['Head',['', 'here you can find out about the activities published by local leaders, contact us: ilifebogota@gmail.com', 'on this website you will find information accessible through seven modes', 'Navigation, to navigate there are 6 navigation buttons, on the screen they go from top to bottom', 'there are 3 buttons on the left side, the square menu button, the diagonal button to cancel or exit and the triangle button up to go up or back', 'and on the right side there are 3 other buttons, the vertical quick information bar button, the round button to accept or enter and the down triangle button to go down or go forward', 'To enable navigation buttons on a physical keyboard, turn on caps lock button', 'square button is 7 or N, diagonal button is 4 or M, triangle up button is 1 or comma, the vertical bar button is 9 or V, the round button is 6, C or space, and the down triangle button is 3, X or tab'],['', 'aquí podrás conocer las actividades publicadas por los líderes locales, contáctanos: ilifebogota@gmail.com', 'en este sitio web encontrará información accesible a través de siete modos', 'Navegación, para navegar hay 6 botones de navegación, en pantalla van desde arriba hacia abajo', 'hay 3 botones al lado izquierdo, el botón cuadrado de menú, el botón diagonal para cancelar o salir y el botón de triángulo hacia arriba para subir o retroceder', 'y al lado derecho hay otros 3 botones, el botón barra vertical de información rápida, el botón redondo para aceptar o ingresar y el botón de triángulo hacia abajo para ir abajo o avanzar', 'Para habilitar los botones de navegación en un teclado físico, active el botón de bloqueo de mayúsculas', 'el botón cuadrado es el 7 o la N, el botón diagonal es el 4 o la M, el botón de triángulo hacia arriba es el 1 o la coma, el botón barra vertical es el 9 o la V, el botón redondo es el 6, la C o el espacio, y el botón de triángulo hacia abajo es el 3, la X o el tabulador'],['', 'ici vous pouvez découvrir les activités publiées par les dirigeants locaux, contactez-nous : ilifebogota@gmail.com', "sur ce site vous trouverez des informations accessibles à travers sept modes", "Navigation, pour naviguer il y a 6 boutons de navigation, sur l'écran ils vont de haut en bas", "il y a 3 boutons sur le côté gauche, le bouton menu carré, le bouton diagonal pour annuler ou sortir et le bouton triangle haut pour monter ou dos", "et sur le côté droit il y a 3 autres boutons, le bouton barre d'information rapide verticale, le bouton rond pour accepter ou entrer et le bouton triangle bas pour descendre ou avancer", "Pour activer les boutons de navigation sur un clavier physique, activez le bouton de verrouillage des majuscules", "le bouton carré est 7 ou N, le bouton diagonal est 4 ou M, le bouton triangle vers le haut est 1 ou virgule, le bouton de la barre verticale est 9 ou V, le bouton rond est 6, C ou espace, et le bouton triangle vers le bas est 3, X ou tabulation"],['','여기에서 지역 지도자들이 발표한 활동에 대해 알아볼 수 있습니다. ilifebogota@gmail.com으로 문의하세요.', "이 웹사이트에서 7가지 모드를 통해 액세스할 수 있는 정보를 찾을 수 있습니다", "탐색, 탐색을 위해 화면에서 위에서 아래로 이동하는 6개의 탐색 버튼이 있습니다.", "왼쪽에는 사각형 메뉴 버튼, 취소 또는 종료를 위한 대각선 버튼, 위로 또는 뒤로 가기를 위한 위쪽 삼각형 버튼 3개의 버튼이 있습니다.", "오른쪽에는 3개의 다른 버튼이 있습니다. 세로 빠른 정보 표시줄 버튼, 수락 또는 입력을 위한 원형 버튼, 아래로 이동 또는 앞으로 이동을 위한 아래쪽 삼각형 버튼입니다.", "실제 키보드에서 탐색 버튼을 활성화하려면 Caps Lock 버튼을 켜십시오.", "사각형 버튼은 7 또는 N, 대각선 버튼은 4 또는 M, 삼각형 위쪽 버튼은 1 또는 쉼표, 세로 막대 버튼은 9 또는 V, 둥근 버튼은 6 , C 또는 스페이스, 아래쪽 삼각형 버튼은 3, X, 또는 탭"]],
['Others',['Vacio'],['Vacio'],['Vacio'],['Vacio']]
];

//CONTROLAR CABEZOTE ANUNCIOS Y BUSCANDO ANUNCIOS
//CONTROL BUSCANDO ANUNCIOS..
const mIres3B =/**/[['Recursos/Casillas', '1 0:Imag,1:Icon,2:Texto,3ImagenA,4VideoA', '2 id de la Imag, Icon o Texto', '3 onclick function,vacio=NO PERMITIDA(INFO)/id"apuntador"', '4 Visible 1:SI 0:no', '5 0:FotI 1:Vide 2:FotM 3:Text 4:In 5:Out', '6 id Video([5]1) o id foto([5]0/2)', '7 id Texto Icono', '8 ids Iconos Capa1', '9 ids Iconos Capa2', '10 Capa3 Estado 0: 1:/ 2:_ 3: ? 4: -'],
['Head' 	,[3, 1, 3, 3, 3, 3, 3, 3],[31, 3, 16, 12, 13, 8, 9, 10],0,1,[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0]],
['Others' 	,[1],[84],0,1,[0],[0],[0],[0],[0],[0]]
];
/*
const res3B = [['Recursos/ Casillas..', 'Head', 'Others'],//la D es de default cuando no hay ningun anuncio
['1 0:Imag,1:Icon,2:Texto,3ImagenA,4VideoA', [3, 1, 3, 3, 3, 3, 3, 3], [1]],
['2 id de la Imag, Icon o Texto', [31, 3, 16, 12, 13, 8, 9, 10], [84]],//82 83 54
['3 onclick function,vacio=NO PERMITIDA(INFO)/id"apuntador"', 0, 0],
['4 Visible 1:SI 0:no', 1, 1],
['5 0:FotI 1:Vide 2:FotM 3:Text 4:In 5:Out', [0, 0, 0, 0, 0, 0, 0, 0], [0]],
['6 id Video([5]1) o id foto([5]0/2)', [0, 0, 0, 0, 0, 0, 0, 0], [0]],
['7 id Texto Icono', [0, 0, 0, 0, 0, 0, 0, 0], [0]],
['8 ids Iconos Capa1', [0, 0, 0, 0, 0, 0, 0, 0], [0]],
['9 ids Iconos Capa2', [0, 0, 0, 0, 0, 0, 0, 0], [0]],
['10 Capa3 Estado 0: 1:/ 2:_ 3: ? 4: -', [0, 0, 0, 0, 0, 0, 0, 0], [0]]
];
*/
/*
const 	res3B		=[		['Recursos/ Casillas..'										],//la D es de default cuando no hay ningun anuncio
							['1 0:Imag,1:Icon,2:Texto,3ImagenA,4VideoA'					,[1]],
							['2 id de la Imag, Icon o Texto'							,[84]],//82 83 54
							['3 onclick function,vacio=NO PERMITIDA(INFO)/id"apuntador"',0],
							['4 Visible 1:SI 0:no'										,1],
							['5 0:FotI 1:Vide 2:FotM 3:Text 4:In 5:Out'					,[0]],
							['6 id Video([5]1) o id foto([5]0/2)'						,[0]],
							['7 id Texto Icono'											,[0]],
							['8 ids Iconos Capa1'										,[0]],
							['9 ids Iconos Capa2'										,[0]],
							['10 Capa3 Estado 0: 1:/ 2:_ 3: ? 4: -'						,[0]]
						];
*/
//DESCRIBIR CABEZOTE ANUNCIOS Y BUSCANDO ANUNCIOS - texto alternativo para imagen
//IMAGEN BUSCANDO ANUNCIOS
const mIres3Z =/**/[['Casillas', 1, 2, 3, 4],
[1,['photography of the place', 'reading person icon', 'There are four blue icons: wheelchair person, deaf ear, blind eye and the last one is an icon with 2 faces', 'In front of a laptop is an adult man without his right arm, the man looks at the screen and holds his glasses with his left hand', '', '', '', ''],['fotografía del lugar', 'icono de persona leyendo', 'Hay cuatro iconos azules: persona en silla de ruedas, oído sordo, ojo ciego y el último es un icono con 2 caras', 'Frente a una computadora portátil hay un hombre adulto sin su brazo derecho, el hombre mira la pantalla y sostiene sus anteojos con la mano izquierda', '', '', '', ''],['photographie du lieu', 'icône de la personne qui lit', "Il y a quatre icônes bleues : personne en fauteuil roulant, sourde oreille, aveugle et la dernière est une icône à 2 visages", "Devant un ordinateur portable se trouve un homme adulte sans son bras droit, l'homme regarde l'écran et tient ses lunettes avec sa main gauche", '', '', '', ''],['장소의 사진', '읽는 사람 아이콘', "Il y a quatre icônes bleues : personne en fauteuil roulant, sourde oreille, aveugle et la dernière est une icône à 2 visages", "Devant un ordinateur portable se trouve un homme adulte sans son bras droit, l'homme regarde l'écran et tient ses lunettes avec sa main gauche", '', '', '', '']],
[2,['Moving satellite'],['Satélite en movimiento'],['satellite en mouvement'],['움직이는 위성']]
];
/*
const res3Z = [['Casillas', 'Head', 'Others'],
[1, ['photography of the place', 'reading person icon', 'There are four blue icons: wheelchair person, deaf ear, blind eye and the last one is an icon with 2 faces', 'In front of a laptop is an adult man without his right arm, the man looks at the screen and holds his glasses with his left hand', '', '', '', ''], ['Moving satellite']],
[2, ['fotografía del lugar', 'icono de persona leyendo', 'Hay cuatro iconos azules: persona en silla de ruedas, oído sordo, ojo ciego y el último es un icono con 2 caras', 'Frente a una computadora portátil hay un hombre adulto sin su brazo derecho, el hombre mira la pantalla y sostiene sus anteojos con la mano izquierda', '', '', '', ''], ['Satélite en movimiento']],
[3, ['photographie du lieu', 'icône de la personne qui lit', "Il y a quatre icônes bleues : personne en fauteuil roulant, sourde oreille, aveugle et la dernière est une icône à 2 visages", "Devant un ordinateur portable se trouve un homme adulte sans son bras droit, l'homme regarde l'écran et tient ses lunettes avec sa main gauche", '', '', '', ''], ['satellite en mouvement']],
[4, ['장소의 사진', '읽는 사람 아이콘', "Il y a quatre icônes bleues : personne en fauteuil roulant, sourde oreille, aveugle et la dernière est une icône à 2 visages", "Devant un ordinateur portable se trouve un homme adulte sans son bras droit, l'homme regarde l'écran et tient ses lunettes avec sa main gauche", '', '', '', ''], ['움직이는 위성']]
];
*/
/*
//IMAGEN BUSCANDO ANUNCIOS
const 	res3Z		=[	['Casillas'	],//la D es de default cuando no hay ningun anuncio
							[1		,['Moving satellite']],
							[2		,['Satélite en movimiento']],
							[3		,['Satellite en mouvement']],
							[4		,['움직이는 위성']]
						];
*/
//ANUNCIOS CON JSON.. usando rrr3* y mIrrr3* desde r003* y mIr003*
var mIrrr3A = mIr003A;
var mIrrr3B = mIr003B;
var mIrrr3Z = mIr003Z;

//RUTA 3 BASE DE DATOS PARA PASAR AL SERVIDOR EN FORMATO JSON Y CUANDO SE SOLICITE DEBE MOSTRARSE EN EL NAVEGADOR
//ANUNCIOS, INFORMACIÓN INCLUYENTE Y LOCALIZADA, INFO COMUNITARIA, pública, Libro comunitario
//const 	mIr003A  y r003B ver/buscar aquí al final en MONGODB
//NOTA LA RUTA 3 
//CON LAS CONSTANTES (const) mIr003A r003B r003C r003D y r003Z
//NO APARECEN AQUI PORQUE SE VAN A PASAR AL SERVIDOR EN FORMATO JSON
//POR ELLO SE TRANSLADARON AL COMIENZO DE ESTE ARCHIVO
//const jAds = //*colección 7i1i8i4 de los anuncios JSON
//'[{"iads": "7i1i8i4","r3A1": ["participate this Sunday, January 29, in an ecological walk in Ciudad Bolívar, IDRD, invites you"	,"Be part of our ecological walks, and discover places that will help you connect with nature."								,"This Sunday the appointment is in Ciudad Bolívar, Casona and Sierra Morena"	],"r3A2": ["..participa este domingo 29 de enero en una caminata ecológica en Ciudad Bolívar, IDRD, te invita"	,"Sé parte de nuestras caminatas ecológicas, y conoce lugares que te ayudarán a conectarte con la naturaleza."				,"Este domingo la cita es en Ciudad Bolívar, Casona y Sierra Morena"			],"r3A3": ["participez ce dimanche 29 janvier à une promenade écologique à Ciudad Bolívar, IDRD vous invite"	,"Faites partie de nos promenades écologiques et découvrez des lieux qui vous aideront à vous connecter avec la nature."	,"Ce dimanche, le rendez-vous est à Ciudad Bolívar, Casona et Sierra Morena"   	],"r3A4": ["1월 29일 일요일, IDRD의 Ciudad Bolívar에서 열리는 생태 산책에 여러분을 초대합니다."							,"생태 산책에 참여하고 자연과 연결하는 데 도움이 되는 장소를 발견하세요."																		,"이번 일요일 약속은 Ciudad Bolívar, Casona 및 Sierra Morena에 있습니다."   			],"r3Z1":	["person walking up the mountain"			,"person walking up the mountain"	,"person walking up the mountain"	],"r3Z2":	["persona caminando por la montaña"			,"persona caminando por la montaña"	,"persona caminando por la montaña"	],"r3Z3":	["personne qui monte la montagne"			,"personne qui monte la montagne"	,"personne qui monte la montagne"	],"r3Z4": ["산을 오르는 사람"								,"산을 오르는 사람"						,"산을 오르는 사람"						],"r3B1": [3,1,3],"r3B2": [18,16,4],"r3B3": 0,"r3B4": 1,"r3B5": [0,0,0],"r3B6": [0,0,0],"r3B7": [0,0,0],"r3B8": [0,0,0],"r3B9": [0,0,0],"r3B10": [0,0,0]},{"iads": "7i1i8i4","r3A1": ["Hike Ciudad Bolívar, Casona and Sierra Morena. Sunday, January 29, 9:00 a.m. to 11:00 a.m."	,"Meeting point: In front of the Francisco José de Caldas District University, calle 68 bis A sur #49F-70"		,"Free registration, more information at www.idrd.gov.co and on our social networks" 		],"r3A2": ["..Caminata Ciudad Bolívar, Casona y Sierra Morena. Domingo 29 de enero, 9:00 a 11:00 a.m."		,"Punto de encuentro: Frente a la Universidad Distrital Francisco José de Caldas, calle 68 bis A sur #49F-70"	,"Inscripción gratuita, mayor información en www.idrd.gov.co y en nuestras redes sociales"	],"r3A3": ["Randonnée Ciudad Bolívar, Casona et Sierra Morena. Dimanche 29 janvier de 9h00 à 11h00"		,"Point de rencontre: Devant l\'Université du district Francisco José de Caldas, calle 68 bis A sur #49F-70"	,"Inscription gratuite, plus d\'informations sur www.idrd.gov.co et sur nos réseaux sociaux"	],"r3A4": ["Ciudad Bolívar, Casona 및 Sierra Morena를 하이킹하십시오. 1월 29일 일요일 오전 9시 ~ 오전 11시"			,"만남의 장소: Francisco José de Caldas District University 앞, calle 68 bis A sur #49F-70."						,"Inscription gratuite, plus d\'informations sur www.idrd.gov.co et sur nos réseaux sociaux"	],"r3Z1":	["Hike Ciudad Bolívar, Casona and Sierra Morena. Sunday, January 29, 9:00 a.m. to 11:00 a.m."	," Meeting point: In front of the Francisco José de Caldas District University, calle 68 bis A sur #49F-70."	,"Free registration, more information at www.idrd.gov.co and on our social networks" 		],"r3Z2":	["Caminata Ciudad Bolívar, Casona y Sierra Morena. Domingo 29 de enero, 9:00 a 11:00 a.m."		,"Punto de encuentro: Frente a la Universidad Distrital Francisco José de Caldas, calle 68 bis A sur #49F-70."	,"Inscripción gratuita, mayor información en www.idrd.gov.co y en nuestras redes sociales"	],"r3Z3":	["Randonnée Ciudad Bolívar, Casona et Sierra Morena. Dimanche 29 janvier de 9h00 à 11h00"		," Point de rencontre: Devant l\'Université du district Francisco José de Caldas, calle 68 bis A sur #49F-70."	,"Inscription gratuite, plus d\'informations sur www.idrd.gov.co et sur nos réseaux sociaux"	],"r3Z4": ["Randonnée Ciudad Bolívar, Casona et Sierra Morena. Dimanche 29 janvier de 9h00 à 11h00"		," Point de rencontre: Devant l\'Université du district Francisco José de Caldas, calle 68 bis A sur #49F-70."	,"Inscription gratuite, plus d\'informations sur www.idrd.gov.co et sur nos réseaux sociaux"	],"r3B1": [2,2,3],"r3B2": [33,35,5],"r3B3": 0,"r3B4": 1,"r3B5": [0,0,0],"r3B6": [0,0,0],"r3B7": [0,0,0],"r3B8": [0,0,0],"r3B9": [0,0,0],"r3B10": [0,0,0]},{"iads": "7i1i8i4","r3A1": ["invitation to sports event, physical activity, blah, blah, blah, blah"],"r3A2": ["..invitación a evento deportivo, actividad física, bla, bla, bla, bla"],"r3A3": ["invitation à un événement sportif, activité physique, bla, bla, bla, bla"],"r3A4": ["스포츠 행사 초대, 신체 활동, 어쩌구 저쩌구 어쩌구 저쩌구"],"r3Z1":	["invitation to sports event, physical activity, blah, blah, blah, blah"],"r3Z2":	["invitación a evento deportivo, actividad física, bla, bla, bla, bla"],"r3Z3":	["invitation à un événement sportif, activité physique, bla, bla, bla, bla"],"r3Z4": ["invitation à un événement sportif, activité physique, bla, bla, bla, bla"],"r3B1": [2],"r3B2": [31],"r3B3": 0,"r3B4": 1,"r3B5": [0],"r3B6": [0],"r3B7": [0],"r3B8": [0],"r3B9": [0],"r3B10": [0]},{"iads": "7i1i8i4","r3A1": ["invitation to General Assembly, blah, blah, blah"	,"abece 1"	,"abece 2"],"r3A2": ["..invitación a Asamblea General, bla, bla, bla" 		,"abece 1"	,"abece 2"],"r3A3": ["invitation à l\'Assemblée générale, bla, bla, bla"	,"abece"	,"abece"],"r3A4": ["총회 초대, 어쩌구 저쩌구"									,"abece"	,"abece"],"r3Z1":	["invitation to General Assembly, blah, blah, blah, blah", "abece 1","abece 2"],"r3Z2":	["invitación a Asamblea General, bla, bla, bla, bla" ,"abece 1","abece 2"],"r3Z3":	["invitation à l\'Assemblée générale, bla, bla, bla, bla","abece","abece"],"r3Z4": ["invitation à l\'Assemblée générale, bla, bla, bla, bla","abece","abece"],"r3B1": [2,1,1],"r3B2": [37,15,16],"r3B3": 0,"r3B4": 1,"r3B5": [0,0,0],"r3B6": [0,0,0],"r3B7": [0,0,0],"r3B8": [0,0,0],"r3B9": [0,0,0],"r3B10": [0,0,0]},{"iads": "7i1i8i4","r3A1": ["open calls by the ICT Ministry for university students, teachers, women, people with disabilities, companies and entrepreneurs in the country"								,"Those interested should enter the ministry\'s website www.mintic.gov.co to consult the details of each project and the closing of the calls."],"r3A2": ["..convocatorias abiertas por el MinTIC para universitarios, docentes, mujeres, personas con discapacidad, empresas y emprendedores del país"									,"Los interesados deberán ingresar a la página web del ministerio www.mintic.gov.co a consultar los detalles de cada proyecto y los cierres de las convocatorias."],"r3A3": ["appels ouverts du ministère des TIC pour les étudiants universitaires, les enseignants, les femmes, les personnes handicapées, les entreprises et les entrepreneurs du pays"	,"Les personnes intéressées doivent entrer sur le site Web du ministère www.mintic.gov.co pour consulter les détails de chaque projet et la clôture des appels."],"r3A4": ["국내 대학생, 교사, 여성, 장애인, 기업 및 기업가를 대상으로 정보통신부가 공개 모집"																												,"Les personnes intéressées doivent entrer sur le site Web du ministère www.mintic.gov.co pour consulter les détails de chaque projet et la clôture des appels."],"r3Z1":	["open calls by the ICT Ministry for university students, teachers, women, people with disabilities, companies and entrepreneurs in the country"								,"Those interested should enter the ministry\'s website www.mintic.gov.co to consult the details of each project and the closing of the calls."],"r3Z2":	["convocatorias abiertas por el MinTIC para universitarios, docentes, mujeres, personas con discapacidad, empresas y emprendedores del país"									,"Los interesados deberán ingresar a la página web del ministerio www.mintic.gov.co a consultar los detalles de cada proyecto y los cierres de las convocatorias."],"r3Z3":	["appels ouverts du ministère des TIC pour les étudiants universitaires, les enseignants, les femmes, les personnes handicapées, les entreprises et les entrepreneurs du pays"	,"Les personnes intéressées doivent entrer sur le site Web du ministère www.mintic.gov.co pour consulter les détails de chaque projet et la clôture des appels."],"r3Z4": ["appels ouverts du ministère des TIC pour les étudiants universitaires, les enseignants, les femmes, les personnes handicapées, les entreprises et les entrepreneurs du pays"	,"Les personnes intéressées doivent entrer sur le site Web du ministère www.mintic.gov.co pour consulter les détails de chaque projet et la clôture des appels."],"r3B1": [3,2],"r3B2": [3,36],"r3B3": 0,"r3B4": 1,"r3B5": [0,0],"r3B6": [0,0],"r3B7": [0,0],"r3B8": [0,0],"r3B9": [0,0],"r3B10": [0,0]}]';
const jAds = //*colección 7i1i8i4 de los anuncios JSON
	`[ 	
	{
		"iads": "7i1i8i4",
		"r3A1": ["participate this Sunday, January 29, in an ecological walk in Ciudad Bolívar, IDRD, invites you"	,"Be part of our ecological walks, and discover places that will help you connect with nature."								,"This Sunday the appointment is in Ciudad Bolívar, Casona and Sierra Morena"	],
		"r3A2": ["..participa este domingo 29 de enero en una caminata ecológica en Ciudad Bolívar, IDRD, te invita"	,"Sé parte de nuestras caminatas ecológicas, y conoce lugares que te ayudarán a conectarte con la naturaleza."				,"Este domingo la cita es en Ciudad Bolívar, Casona y Sierra Morena"			],
		"r3A3": ["participez ce dimanche 29 janvier à une promenade écologique à Ciudad Bolívar, IDRD vous invite"	,"Faites partie de nos promenades écologiques et découvrez des lieux qui vous aideront à vous connecter avec la nature."	,"Ce dimanche, le rendez-vous est à Ciudad Bolívar, Casona et Sierra Morena"   	],
		"r3A4": ["1월 29일 일요일, IDRD의 Ciudad Bolívar에서 열리는 생태 산책에 여러분을 초대합니다."							,"생태 산책에 참여하고 자연과 연결하는 데 도움이 되는 장소를 발견하세요."																		,"이번 일요일 약속은 Ciudad Bolívar, Casona 및 Sierra Morena에 있습니다."   			],
		"r3Z1":	["person walking up the mountain"			,"person walking up the mountain"	,"person walking up the mountain"	],
		"r3Z2":	["persona caminando por la montaña"			,"persona caminando por la montaña"	,"persona caminando por la montaña"	],
		"r3Z3":	["personne qui monte la montagne"			,"personne qui monte la montagne"	,"personne qui monte la montagne"	],
		"r3Z4": ["산을 오르는 사람"								,"산을 오르는 사람"						,"산을 오르는 사람"						],
		"r3B1": [3,1,3],
		"r3B2": [18,16,4],
		"r3B3": 0,
		"r3B4": 1,
		"r3B5": [0,0,0],
		"r3B6": [0,0,0],
		"r3B7": [0,0,0],
		"r3B8": [0,0,0],
		"r3B9": [0,0,0],
		"r3B10": [0,0,0]
	},
	{
		"iads": "7i1i8i4",
		"r3A1": ["Hike Ciudad Bolívar, Casona and Sierra Morena. Sunday, January 29, 9:00 a.m. to 11:00 a.m."	,"Meeting point: In front of the Francisco José de Caldas District University, calle 68 bis A sur #49F-70"		,"Free registration, more information at www.idrd.gov.co and on our social networks" 		],
		"r3A2": ["..Caminata Ciudad Bolívar, Casona y Sierra Morena. Domingo 29 de enero, 9:00 a 11:00 a.m."		,"Punto de encuentro: Frente a la Universidad Distrital Francisco José de Caldas, calle 68 bis A sur #49F-70"	,"Inscripción gratuita, mayor información en www.idrd.gov.co y en nuestras redes sociales"	],
		"r3A3": ["Randonnée Ciudad Bolívar, Casona et Sierra Morena. Dimanche 29 janvier de 9h00 à 11h00"		,"Point de rencontre: Devant l\'Université du district Francisco José de Caldas, calle 68 bis A sur #49F-70"	,"Inscription gratuite, plus d\'informations sur www.idrd.gov.co et sur nos réseaux sociaux"	],
		"r3A4": ["Ciudad Bolívar, Casona 및 Sierra Morena를 하이킹하십시오. 1월 29일 일요일 오전 9시 ~ 오전 11시"			,"만남의 장소: Francisco José de Caldas District University 앞, calle 68 bis A sur #49F-70."						,"Inscription gratuite, plus d\'informations sur www.idrd.gov.co et sur nos réseaux sociaux"	],
		"r3Z1":	["Hike Ciudad Bolívar, Casona and Sierra Morena. Sunday, January 29, 9:00 a.m. to 11:00 a.m."	," Meeting point: In front of the Francisco José de Caldas District University, calle 68 bis A sur #49F-70."	,"Free registration, more information at www.idrd.gov.co and on our social networks" 		],
		"r3Z2":	["Caminata Ciudad Bolívar, Casona y Sierra Morena. Domingo 29 de enero, 9:00 a 11:00 a.m."		,"Punto de encuentro: Frente a la Universidad Distrital Francisco José de Caldas, calle 68 bis A sur #49F-70."	,"Inscripción gratuita, mayor información en www.idrd.gov.co y en nuestras redes sociales"	],
		"r3Z3":	["Randonnée Ciudad Bolívar, Casona et Sierra Morena. Dimanche 29 janvier de 9h00 à 11h00"		," Point de rencontre: Devant l\'Université du district Francisco José de Caldas, calle 68 bis A sur #49F-70."	,"Inscription gratuite, plus d\'informations sur www.idrd.gov.co et sur nos réseaux sociaux"	],
		"r3Z4": ["Randonnée Ciudad Bolívar, Casona et Sierra Morena. Dimanche 29 janvier de 9h00 à 11h00"		," Point de rencontre: Devant l\'Université du district Francisco José de Caldas, calle 68 bis A sur #49F-70."	,"Inscription gratuite, plus d\'informations sur www.idrd.gov.co et sur nos réseaux sociaux"	],
		"r3B1": [2,2,3],
		"r3B2": [33,35,5],
		"r3B3": 0,
		"r3B4": 1,
		"r3B5": [0,0,0],
		"r3B6": [0,0,0],
		"r3B7": [0,0,0],
		"r3B8": [0,0,0],
		"r3B9": [0,0,0],
		"r3B10": [0,0,0] 
	},
	{
		"iads": "7i1i8i4",
		"r3A1": ["invitation to sports event, physical activity, blah, blah, blah, blah"],
		"r3A2": ["..invitación a evento deportivo, actividad física, bla, bla, bla, bla"],
		"r3A3": ["invitation à un événement sportif, activité physique, bla, bla, bla, bla"],
		"r3A4": ["스포츠 행사 초대, 신체 활동, 어쩌구 저쩌구 어쩌구 저쩌구"],
		"r3Z1":	["invitation to sports event, physical activity, blah, blah, blah, blah"],
		"r3Z2":	["invitación a evento deportivo, actividad física, bla, bla, bla, bla"],
		"r3Z3":	["invitation à un événement sportif, activité physique, bla, bla, bla, bla"],
		"r3Z4": ["invitation à un événement sportif, activité physique, bla, bla, bla, bla"],
		"r3B1": [2],
		"r3B2": [31],
		"r3B3": 0,
		"r3B4": 1,
		"r3B5": [0],
		"r3B6": [0],
		"r3B7": [0],
		"r3B8": [0],
		"r3B9": [0],
		"r3B10": [0]
	},
	{
		"iads": "7i1i8i4",
		"r3A1": ["invitation to General Assembly, blah, blah, blah"	,"abece 1"	,"abece 2"],
		"r3A2": ["..invitación a Asamblea General, bla, bla, bla" 		,"abece 1"	,"abece 2"],
		"r3A3": ["invitation à l\'Assemblée générale, bla, bla, bla"	,"abece"	,"abece"],
		"r3A4": ["총회 초대, 어쩌구 저쩌구"									,"abece"	,"abece"],
		"r3Z1":	["invitation to General Assembly, blah, blah, blah, blah", "abece 1","abece 2"],
		"r3Z2":	["invitación a Asamblea General, bla, bla, bla, bla" ,"abece 1","abece 2"],
		"r3Z3":	["invitation à l\'Assemblée générale, bla, bla, bla, bla","abece","abece"],
		"r3Z4": ["invitation à l\'Assemblée générale, bla, bla, bla, bla","abece","abece"],
		"r3B1": [2,1,1],
		"r3B2": [37,15,16],
		"r3B3": 0,
		"r3B4": 1,
		"r3B5": [0,0,0],
		"r3B6": [0,0,0],
		"r3B7": [0,0,0],
		"r3B8": [0,0,0],
		"r3B9": [0,0,0],
		"r3B10": [0,0,0]
	},
	{
		"iads": "7i1i8i4",
		"r3A1": ["open calls by the ICT Ministry for university students, teachers, women, people with disabilities, companies and entrepreneurs in the country"								,"Those interested should enter the ministry\'s website www.mintic.gov.co to consult the details of each project and the closing of the calls."],
		"r3A2": ["..convocatorias abiertas por el MinTIC para universitarios, docentes, mujeres, personas con discapacidad, empresas y emprendedores del país"									,"Los interesados deberán ingresar a la página web del ministerio www.mintic.gov.co a consultar los detalles de cada proyecto y los cierres de las convocatorias."],
		"r3A3": ["appels ouverts du ministère des TIC pour les étudiants universitaires, les enseignants, les femmes, les personnes handicapées, les entreprises et les entrepreneurs du pays"	,"Les personnes intéressées doivent entrer sur le site Web du ministère www.mintic.gov.co pour consulter les détails de chaque projet et la clôture des appels."],
		"r3A4": ["국내 대학생, 교사, 여성, 장애인, 기업 및 기업가를 대상으로 정보통신부가 공개 모집"																												,"Les personnes intéressées doivent entrer sur le site Web du ministère www.mintic.gov.co pour consulter les détails de chaque projet et la clôture des appels."],
		"r3Z1":	["open calls by the ICT Ministry for university students, teachers, women, people with disabilities, companies and entrepreneurs in the country"								,"Those interested should enter the ministry\'s website www.mintic.gov.co to consult the details of each project and the closing of the calls."],
		"r3Z2":	["convocatorias abiertas por el MinTIC para universitarios, docentes, mujeres, personas con discapacidad, empresas y emprendedores del país"									,"Los interesados deberán ingresar a la página web del ministerio www.mintic.gov.co a consultar los detalles de cada proyecto y los cierres de las convocatorias."],
		"r3Z3":	["appels ouverts du ministère des TIC pour les étudiants universitaires, les enseignants, les femmes, les personnes handicapées, les entreprises et les entrepreneurs du pays"	,"Les personnes intéressées doivent entrer sur le site Web du ministère www.mintic.gov.co pour consulter les détails de chaque projet et la clôture des appels."],
		"r3Z4": ["appels ouverts du ministère des TIC pour les étudiants universitaires, les enseignants, les femmes, les personnes handicapées, les entreprises et les entrepreneurs du pays"	,"Les personnes intéressées doivent entrer sur le site Web du ministère www.mintic.gov.co pour consulter les détails de chaque projet et la clôture des appels."],
		"r3B1": [3,2],
		"r3B2": [3,36],
		"r3B3": 0,
		"r3B4": 1,
		"r3B5": [0,0],
		"r3B6": [0,0],
		"r3B7": [0,0],
		"r3B8": [0,0],
		"r3B9": [0,0],
		"r3B10": [0,0]
	}
]`;
//Detectar el tipo de dato y su tamaño
console.log(' typeof iads =', typeof jAds);//string
//Convertir una cadena del JSON en un objeto, para ello se usa el metodo parse: 
const jsAds = JSON.parse(jAds); 
console.log(' typeof iadsJS =', typeof jsAds);//object
console.log(' .. typeof iadsJS.length =', jsAds.length);//234
console.log('jsAds.length===',jsAds.length);
//Convertir el objeto JS en 3 arrays
for (var i = 0; i < jsAds.length; i++) {
	mIrrr3A[i+1][1] = jsAds[i].r3A1;
	mIrrr3A[i+1][2] = jsAds[i].r3A2;
	mIrrr3A[i+1][3] = jsAds[i].r3A3;
	mIrrr3A[i+1][4] = jsAds[i].r3A4;
	mIrrr3Z[i+1][1] = jsAds[i].r3Z1;
	mIrrr3Z[i+1][2] = jsAds[i].r3Z2;
	mIrrr3Z[i+1][3] = jsAds[i].r3Z3;
	mIrrr3Z[i+1][4] = jsAds[i].r3Z4;
	mIrrr3B[i+1][1] = jsAds[i].r3B1;
	mIrrr3B[i+1][2] = jsAds[i].r3B2;
	mIrrr3B[i+1][3] = jsAds[i].r3B3;
	mIrrr3B[i+1][4] = jsAds[i].r3B4;
	mIrrr3B[i+1][5] = jsAds[i].r3B5;
	mIrrr3B[i+1][6] = jsAds[i].r3B6;
	mIrrr3B[i+1][7] = jsAds[i].r3B7;
	mIrrr3B[i+1][8] = jsAds[i].r3B8;
	mIrrr3B[i+1][9] = jsAds[i].r3B9;
	mIrrr3B[i+1][10] = jsAds[i].r3B10;
}
/** /
for (var i = 0; i < jsAds.length; i++) {
	rrr3A[1][i] = jsAds[i].r3A1;
	rrr3A[2][i] = jsAds[i].r3A2;
	rrr3A[3][i] = jsAds[i].r3A3;
	rrr3A[4][i] = jsAds[i].r3A4;
	rrr3Z[1][i] = jsAds[i].r3Z1;
	rrr3Z[2][i] = jsAds[i].r3Z2;
	rrr3Z[3][i] = jsAds[i].r3Z3;
	rrr3Z[4][i] = jsAds[i].r3Z4;
	rrr3B[1][i] = jsAds[i].r3B1;
	rrr3B[2][i] = jsAds[i].r3B2;
	rrr3B[3][i] = jsAds[i].r3B3;
	rrr3B[4][i] = jsAds[i].r3B4;
	rrr3B[5][i] = jsAds[i].r3B5;
	rrr3B[6][i] = jsAds[i].r3B6;
	rrr3B[7][i] = jsAds[i].r3B7;
	rrr3B[8][i] = jsAds[i].r3B8;
	rrr3B[9][i] = jsAds[i].r3B9;
	rrr3B[10][i] = jsAds[i].r3B10;
}
/**/

























///inicio traidos desde _


/////////////////////////////////////
//OTROS

/*LISTA DE IDIOMAS "DISPONIBLES"
1-Ingles,2-Español,3-Francés,4-Portugués,5-Alemán,6-Árabe,7-Chino,8-Coreano,9-Japonés,10-Ruso,11-Turco
1-ASL,2-LSC,3-
*/

const mIkBoton =/**/[['Casillas', 1, 2, 3, 4],//Nota: si usa un teclado físico y habilita el bloqueo de mayúsculas, puede usar la tecla 1 o la tecla coma, para subir, la tecla 3 o la tecla ce, para bajar, la tecla 4 o la tecla eme, para el menú, la tecla 6 o la tecla ve pequeña, para aceptar, la tecla 7 o la tecla ene, para cancelar y la tecla 9 o la tecla be grande, para información
[1, 'Caps lock:','Bloque de mayúsculas:','Verrouillage des majuscules:','캡 블록:'],
[2, 'enabled.','habilitado.','activée.','가능합니다.'],
[3, 'disabled.','deshabilitado.','désactivé.','장애가 있는.'],
[4, 'Window reader:','Lector de ventana:','Lecteur de fenêtre:','윈도우 리더:'],
[5, 'Vibrator:','Vibrador:','Vibreur:','진동기:'],
[6, 'Window:','Ventana:','Fenêtre:','창문:'],
[7, 'minimized.','minimizada.','minimisée.','최소화.'],
[8, 'maximized.','maximizada.','maximisée.','최대화.'],
[9, '','','',''],
[10,'','','','']
];
/*
const kBoton =[[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],//Nota: si usa un teclado físico y habilita el bloqueo de mayúsculas, puede usar la tecla 1 o la tecla coma, para subir, la tecla 3 o la tecla ce, para bajar, la tecla 4 o la tecla eme, para el menú, la tecla 6 o la tecla ve pequeña, para aceptar, la tecla 7 o la tecla ene, para cancelar y la tecla 9 o la tecla be grande, para información
[1, 'Caps lock:', 'enabled.', 'disabled.', 'Window reader:', 'Vibrator:', 'Window:', 'minimized.', 'maximized.', '', ''],
[2, 'Bloque de mayúsculas:', 'habilitado.', 'deshabilitado.', 'Lector de ventana:', 'Vibrador:', 'Ventana:', 'minimizada.', 'maximizada.', '', ''],
[3, 'Verrouillage des majuscules:', 'activée.', 'désactivé.', 'Lecteur de fenêtre:', 'Vibreur:', 'Fenêtre:', 'minimisée.', 'maximisée.', '', ''],
[4, '캡 블록:', '가능합니다.', '장애가 있는.', '윈도우 리더:', '진동기:', '창문:', '최소화.', '최대화.', '', ''],
[5, '', '', ''],
];
*/

var mIkComun =/**/[[0, 1, 2, 3, 4],
['Comunidades', 'the localidad of Chapinero','la localidad de Chapinero','la localidad de Chapinero','차피네로 마을'],
[2, 			'TecnoParque Colombia','TecnoParque Colombia','TecnoParque Colombia','TecnoParque Colombia'],
[3, 			'Sena from Calle 52','Sena de la Calle 52','Sena de Calle 52','Sena de Calle 52']
];
/*
const kComun =[[0, 'Comunidades', 2, 3],
[1, 'the localidad of Chapinero', 'TecnoParque Colombia', 'Sena from Calle 52'],
[2, 'la Localidad de Chapinero', 'TecnoParque Colombia', 'Sena de la Calle 52'],
[3, 'la localidad de Chapinero', 'TecnoParque Colombia', 'Sena de Calle 52'],
[4, '차피네로 마을', 'TecnoParque Colombia', 'Sena de Calle 52']
];
*/

//CONTROL DE kTapaI
const mIkControl =/**/[[0, 1, 2, 3, 4],
['1hx/0xh', 			1,1,1,1],
['1LeftToR,0RightTL', 	1,1,1,1]
];
/*
const kControl =[[0, '1hx/0xh', '1LeftToR,0RightTL'],
[1, 1, 1],
[2, 1, 1],
[3, 1, 1],
[4, 1, 1]
];
*/

/*
const kIntro =[[0, 1, 2],
[1, 'To exit this alert: click on the center of this window, or click the round accept button.', 'To repeat this alert: click on the vertical info button.'],
[2, 'Para salir de esta alerta: de clic en el centro de esta ventana, o clic en el botón redondo de aceptar.', 'Para repetir esta alerta: clic en el botón vertical de info.'],
[3, 'Pour sortir de cette alerte : cliquez au centre de cette fenêtre, ou cliquez sur le bouton rond accepter.', 'Pour répéter cette alerte : cliquez sur le bouton d\'information verticale.'],
[4, 'Pour sortir de cette alerte : cliquez au centre de cette fenêtre, ou cliquez sur le bouton rond accepter.', 'Pour répéter cette alerte : cliquez sur le bouton d\'information verticale.']
];
const mIkIntro =[[0, 1, 2, 3, 4],
[1, 'To exit this alert: click on the center of this window, or click the round accept button.','Para salir de esta alerta: de clic en el centro de esta ventana, o clic en el botón redondo de aceptar.','Pour sortir de cette alerte : cliquez au centre de cette fenêtre, ou cliquez sur le bouton rond accepter.','Pour sortir de cette alerte : cliquez au centre de cette fenêtre, ou cliquez sur le bouton rond accepter.'],
[2, 'To repeat this alert: click on the vertical info button.','Para repetir esta alerta: clic en el botón vertical de info.','Pour répéter cette alerte : cliquez sur le bouton d\'information verticale.','Pour répéter cette alerte : cliquez sur le bouton d\'information verticale.']
];
*/

/*
const kLugar = [[0, 'lugares'],
[1, 'Bogota, Cundinamarca, Colombia'],
[2, 'Bogotá, Cundinamarca, Colombia'],
[3, 'Bogota, Cundinamarca, Colombia'],
[4, 'B보고타, 쿤디나마르카, 콜롬비아']
];
*/

/*
//alertas
const mIkTapaA =[['Casillas', 1, 2, 3, 4],
[1, 'Attention:','Atención:','Attention:','Attention:'],
[2, 'keyboard connected','teclado conectado','clavier connecté','clavier connecté'],
[3, 'keyboard off','teclado desconectado','clavier éteint','clavier éteint'],
[4, 'the ground moves, your life may be in danger, find a safe place and stay safe','el suelo se mueve, su vida puede estar en peligro, busque un lugar seguro y pongase a salvo','le sol bouge, votre vie peut être en danger, trouvez un endroit sûr et restez en sécurité','le sol bouge, votre vie peut être en danger, trouvez un endroit sûr et restez en sécurité']
];
const kTapaA =[[0, 1, 2, 3, 4],
[1, 'Attention:', 'keyboard connected', 'keyboard off', 'the ground moves, your life may be in danger, find a safe place and stay safe'],
[2, 'Atención:', 'teclado conectado', 'teclado desconectado', 'el suelo se mueve, su vida puede estar en peligro, busque un lugar seguro y pongase a salvo'],
[3, 'Attention:', 'clavier connecté', 'clavier éteint', 'le sol bouge, votre vie peut être en danger, trouvez un endroit sûr et restez en sécurité'],
[4, 'Attention:', 'clavier connecté', 'clavier éteint', 'le sol bouge, votre vie peut être en danger, trouvez un endroit sûr et restez en sécurité']
];
*/

/*
//Imagen del Visor de Alertas???
const kTapaB = [['Recursos/ Casillas..', 1, 2, 3],
['1 0:Imag,1:Icon,2:Texto,3ImagenA,4VideoA', 1, 1, 1],
['2 id de la Imag, Icon o Texto', 55, 58, 59],
['3', 0, 0, 0]
];
*/

//Se controla desde kControl la glosa se encuentra en kTapaITG  -- Nota - Párrafo - Texto
const mIkTapaI =/**/[['Casillas', 1, 2, 3, 4],
[1, 'Hour: ', 'Hora: ', 'Heure: ', '시간: '],
[2, 'Parent path: ', 'Ruta padre: ', 'Chemin parent: ', '상위 경로: '],
[3, '. ', '. ', '. ', '. '],
[4, ', go back', ', regresar', ', retourner', ', 돌아가다'],
[5, ', change', ', cambiar', ', changer', ', 변경'],
[6, 'You are on: ', 'Estás en: ', 'Vous êtes dans:', '너는 ~에있다:'],
[7, 'selected', 'seleccionado', 'choisi', 'choisi'],
[8, 'with out select', 'sin seleccionar', 'sans choisir', 'sans choisir'],
[9, '', '', '', ''],
[10, 'up', 'arriba', 'en haut', '~ 위에'],
[11, 'down', 'abajo', 'vers le bas', '아래에'],
[12, 'video', 'vídeo', 'vidéo', 'vidéo'],
[13, 'image', 'imagén', 'image', 'image'],
[14, 'writing', 'escrito', 'écriture', '쓴'],
[15, 'input', 'entrada', 'entrée', 'entrée'],
[16, 'exit', 'salida', 'sortie', 'sortie'],
[17, 'Element:','Elemento:','Élément:','요소:'],
[18, 'of', 'de', 'sur', '~의'],
[19, 'menu', 'menú', 'menu', '메뉴'],
[20, 'attention, maximize the window', 'atención, maximizar la ventana', 'attention, maximiser la fenêtre', 'attention, maximiser la fenêtre'],
[21, ', continue', ', continuar', ', continuer', ', 계속하다'],
[22, 'Reading ', 'Lectura ', 'Lecture ', '독서 '],
[23, 'In the picture: ', 'En la imagen: ', 'Dans l\'image: ', '사진 속에: '],
[24, 'welcome to ', 'Bienvenidos a ', 'Bienvenue à', '에 오신 것을 환영합니다 '],
[25, 'Information: ', 'Información: ', 'Information: ', '정보: '],
[26, 'Offers: to find out about local offers', 'Ofertas: para conocer las ofertas locales', 'Offres : pour connaître les offres locales', '제안: 지역 제안에 대해 알아보기'],
[27, 'Place', 'Lugar', 'Lieu', '장소'],
[28, 'announcements, place ', 'anuncios, lugar ', 'annonces, lieu ', '광고, 장소 '],
[29, ': To know the local announcements', ': Para conocer los anuncios locales', ': Pour connaître les annonces locales', ': 지역 공지 사항에 대해 알고 싶습니다.'],
[30, 'Here, there are no notes to publish', 'Aquí, no hay notas para publicar', "Ici, il n'y a aucune note à poster", '여기에는 게시할 메모가 없습니다.'],
[31, 'Looking for information...', 'Buscando información...', "À la recherche d'informations...", '정보를 찾는 중...']
];
/*
const kTapaI =[[0, 'h', 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
[1, 'Hour: ', 'Parent path: ', '. ', ', go back', ', change'		, 'You are on: ', 'selected', 'with out select', '', 'up', 'down', 'video', 'image', 'writing', 'input', 'exit', 'Element:', 'of', 'menu', 'attention, maximize the window', ', continue', 'Reading ', 'In the picture: ', 'welcome to '								, 'Information: ', 'Offers: to find out about local offers', 'Place', 'announcements, place ', ': To know the local announcements', 'Here, there are no notes to publish', 'Looking for information...'],
[2, 'Hora: ', 'Ruta padre: ', '. ', ', regresar', ', cambiar'		, 'Estás en: ', 'seleccionado', 'sin seleccionar', '', 'arriba', 'abajo', 'vídeo', 'imagén', 'escrito', 'entrada', 'salida', 'Elemento:', 'de', 'menú', 'atención, maximizar la ventana', ', continuar', 'Lectura ', 'En la imagen: ', 'Bienvenidos a '				, 'Información: ', 'Ofertas: para conocer las ofertas locales', 'Lugar', 'anuncios, lugar ', ': Para conocer los anuncios locales', 'Aquí, no hay notas para publicar', 'Buscando información...'],
[3, 'Heure: ', 'Chemin parent: ', '. ', ', retourner', ', changer'	, 'Vous êtes dans:', 'choisi', 'sans choisir', ''	, 'en haut'	 , 'vers le bas', 'vidéo', 'image', 'écriture', 'entrée', 'sortie', 'Élément:', 'sur', 'menu', 'attention, maximiser la fenêtre', ', continuer', 'Lecture ', 'Dans l\'image: ', 'Bienvenue à'        , 'Information: ', 'Offres : pour connaître les offres locales', 'Lieu', 'annonces, lieu ', ': Pour connaître les annonces locales', "Ici, il n'y a aucune note à poster", "À la recherche d'informations..."],
[4, '시간: ', '상위 경로: '		, '. '	, ', 돌아가다' , ', 변경'		, '너는 ~에있다:'	, 'choisi', 'sans choisir', ''	, '~ 위에'		, '아래에', 'vidéo'      , 'image', '쓴'      , 'entrée', 'sortie', '요소:', '~의', '메뉴', 'attention, maximiser la fenêtre', ', 계속하다'	, '독서 '	, '사진 속에: '		  , '에 오신 것을 환영합니다 ', '정보: '     , '제안: 지역 제안에 대해 알아보기'                   , '장소', '광고, 장소 '        , ': 지역 공지 사항에 대해 알고 싶습니다.'       , '여기에는 게시할 메모가 없습니다.', '정보를 찾는 중...'],
];
*/


//RUTA 4 MENÚ PRINCIPAL
//INFORMAR MENÚ
const mIr004A =/**/[['Casillas', 1, 2, 3, 4],
[1, '','','',''],
[2, 'settings: to adjust the mode','ajustes: para ajustar el modo','réglages: pour ajuster le mode','설정: 모드 조정'],
[3, 'maximized window, change','ventana maximizada, cambiar','fenêtre maximisée, changer','korean'],
[4, 'minimized window, change','ventana minimizada, cambiar','fenêtre réduite, changer','korean'],
[5, 'user account','cuenta de usuario','compte d\'utilisateur','compte d\'utilisateur'],
[6, 'language and place: to adjust the site','idioma y lugar: para ajustar el sitio','langue et lieu: pour ajuster le site','언어와 장소: 사이트 조정'],
[7, 'Chapinero community, change','comunidad Chapinero, cambiar','communauté Chapinero, changement','Chapinero 커뮤니티, 변화'],
[8, 'settings 3: To filter the information','ajustes 3: Para filtrar la información','réglages 3 : Pour filtrer les informations','설정 3: 정보를 필터링하려면'],
[9, 'help','ayuda','aider','지원'],
[10,'Information: To find out about local activities and offers','Información: Para conocer las actividades y ofertas locales','Information: Pour connaître les activités et les offres locales','정보: 활동 및 제공되는 로케일에 대한 정보'],
[11,'offers: to find out about local offers','ofertas: para conocer las ofertas locales','offres : pour connaître les offres locales','제안: 지역 제안에 대해 알아보기'],
[12,'local contacts','contactos locales','contacts locaux','contacts locaux'],
[13,'post an invite','publicar una invitación','publier une invitation','publier une invitation'],
[14,'posts','mensajes','des postes','des postes'],
[15,'personal contacts','contactos personales','contacts personnels','contacts personnels'],
[16,'seeker','buscador','chercheur','korean'],
[17,'advice request, deactivated, change','solicitud de asesoría, desactivado, cambiar','demande de conseil, désactivé, changer','korean'],
[18,'menu rating good, change','calificación del menú buena, cambiar','bonne note de menu, changer' ,'korean'],
[19,'headlines: to see or listen to the audiovisual summary of the information','titulares: para ver o escuchar el resumen audiovisual de la información','titres : pour voir ou écouter le résumé audiovisuel de l\'information','헤드라인: 정보의 시청각 요약을 보거나 듣는 것'],
[20,'i bogota QR code','código QR de i bogota','i bogota QR code','i 스캔할 보고타 QR'],
[21,'frequently asked questions: to find answers','preguntas frecuentes: para encontrar respuestas','Questions fréquemment posées: pour trouver des réponses','자주 묻는 질문: 답변 찾기'],
[22,'action, restart to exit and reload the application','acción, reiniciar para salir y volver a cargar la aplicación','action, redémarrer pour quitter et recharger l\'application','작업, 다시 시작 응용 프로그램을 종료하고 다시 로드합니다.']
];
/*
const r004A =[['Casillas', 1,    2,                          3,                          4,              5,                                        6,                              7,                                      8,      9,                                                                 10,                                      11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
[1, '', 'settings: to adjust the mode', 'maximized window, change', 'minimized window, change', 'user account', 'language and place: to adjust the site', 'Chapinero community, change', 'settings 3: To filter the information', 'help', 'Information: To find out about local activities and offers', 'offers: to find out about local offers', 'local contacts', 'post an invite', 'posts', 'personal contacts', 'seeker', 'advice request, deactivated, change', 'menu rating good, change'																			, 'headlines: to see or listen to the audiovisual summary of the information', 'i bogota QR code', 'frequently asked questions: to find answers', 'action, restart to exit and reload the application'],
[2, '', 'ajustes: para ajustar el modo', 'ventana maximizada, cambiar', 'ventana minimizada, cambiar', 'cuenta de usuario', 'idioma y lugar: para ajustar el sitio', 'comunidad Chapinero, cambiar', 'ajustes 3: Para filtrar la información', 'ayuda', 'Información: Para conocer las actividades y ofertas locales'             , 'ofertas: para conocer las ofertas locales', 'contactos locales', 'publicar una invitación', 'mensajes', 'contactos personales', 'buscador', 'solicitud de asesoría, desactivado, cambiar', 'calificación del menú buena, cambiar'	, 'titulares: para ver o escuchar el resumen audiovisual de la información', 'código QR de i bogota', 'preguntas frecuentes: para encontrar respuestas', 'acción, reiniciar para salir y volver a cargar la aplicación'],
[3, '', 'réglages: pour ajuster le mode', 'fenêtre maximisée, changer', 'fenêtre réduite, changer', 'compte d\'utilisateur', 'langue et lieu: pour ajuster le site', 'communauté Chapinero, changement', 'réglages 3 : Pour filtrer les informations', 'aider', 'Information: Pour connaître les activités et les offres locales', 'offres : pour connaître les offres locales', 'contacts locaux', 'publier une invitation', 'des postes', 'contacts personnels', 'chercheur', 'demande de conseil, désactivé, changer', 'bonne note de menu, changer' 	   			, 'titres : pour voir ou écouter le résumé audiovisuel de l\'information', 'i bogota QR code', 'Questions fréquemment posées: pour trouver des réponses', 'action, redémarrer pour quitter et recharger l\'application'],
[4, '', '설정: 모드 조정'					, 'korean'					, 'korean'					, 'compte d\'utilisateur', '언어와 장소: 사이트 조정'				    , 'Chapinero 커뮤니티, 변화'           , '설정 3: 정보를 필터링하려면'                      , '지원'  , '정보: 활동 및 제공되는 로케일에 대한 정보'                                    , '제안: 지역 제안에 대해 알아보기'                  , 'contacts locaux', 'publier une invitation', 'des postes', 'contacts personnels', 'korean'   , 'korean'                                , 'korean'                      	         , '헤드라인: 정보의 시청각 요약을 보거나 듣는 것'    								, 'i 스캔할 보고타 QR'	, '자주 묻는 질문: 답변 찾기'									, '작업, 다시 시작 응용 프로그램을 종료하고 다시 로드합니다.']
];
*/
/*
const 	r004A		=	[	['Casillas'	,1											,2										,3								,4								,5							,6											,7									,8												,9				,10													,11						,12								,13				,14							,15				,16												,17											,18																				,19							,20																,21																],
							[1			,'hall: to receive the information'			,'settings: to adjust the mode'			,'maximized window, change'		,'minimized window, change'		,'user account'				,'language and place: to adjust the site'	,'Chapinero community, change'		,'settings 3: To filter the information'		,'help'			,'announcements: to know the local announcements'	,'local contacts'		,'post an invite'				,'posts'		,'personal contacts'		,'seeker'		,'advice request, deactivated, change'			,'menu rating good, change'					,'headlines: to see or listen to the audiovisual summary of the announcements'	,'i bogota QR code'			,'frequently asked questions: to find answers'					,'action, restart to exit and reload the application'			],
							[2			,'sala: para recibir la información'		,'ajustes: para ajustar el modo'		,'ventana maximizada, cambiar'	,'ventana minimizada, cambiar'	,'cuenta de usuario'		,'idioma y lugar: para ajustar el sitio'	,'comunidad Chapinero, cambiar'		,'ajustes 3: Para filtrar la información'		,'ayuda'		,'anuncios: Para conocer los anuncios locales'		,'contactos locales'	,'publicar una invitación'		,'mensajes'		,'contactos personales'		,'buscador'		,'solicitud de asesoría, desactivado, cambiar'	,'calificación del menú buena, cambiar'		,'titulares: para ver o escuchar el resumen audiovisual de los anuncios'		,'código QR de i bogota'	,'preguntas frecuentes: para encontrar respuestas'				,'acción, reiniciar para salir y volver a cargar la aplicación'	],
							[3			,'salle: pour recevoir les informations'	,'réglages: pour ajuster le mode'		,'fenêtre maximisée, changer'	,'fenêtre réduite, changer'		,'compte d\'utilisateur'	,'langue et lieu: pour ajuster le site'		,'communauté Chapinero, changement'	,'réglages 3 : Pour filtrer les informations'	,'aider'		,'annonces: pour connaître les annonces locales'	,'contacts locaux'		,'publier une invitation'		,'des postes'	,'contacts personnels'		,'chercheur'	,'demande de conseil, désactivé, changer'		,'bonne note de menu, changer'				,'titres : pour voir ou écouter le résumé audiovisuel des annonces'				,'i bogota QR code'			,'Questions fréquemment posées: pour trouver des réponses'		,'action, redémarrer pour quitter et recharger l\'application'	],
							[4			,'입구: 정보를 받기 위해'						,'설정: 모드 조정'							,'korean'						,'korean'						,'compte d\'utilisateur'	,'언어와 장소: 사이트 조정'						,'Chapinero 커뮤니티, 변화'				,'설정 3: 정보를 필터링하려면'							,'지원'			,'광고: 지역 공지 사항에 대해 알고 싶습니다.'					,'contacts locaux'		,'publier une invitation'		,'des postes'	,'contacts personnels'		,'korean'		,'korean'										,'korean'									,'헤드라인: 공지 사항의 시청각 요약을 보거나 듣기 위해'										,'i 스캔할 보고타 QR'			,'자주 묻는 질문: 답변 찾기'											,'작업, 다시 시작 응용 프로그램을 종료하고 다시 로드합니다.']
						];
*/
//TRADUCCION A GLOSA MANUAL DE r004A
const mIr004ATG =/**/[['0senias','1UNIVER','2LSC','3ASL'],
[1, 0,0,0],
[2, 0,0,0],
[3, 0,0,0],
[4, 0,0,0],
[5, 0,0,0],
[6, 0,'ajustes',0],
[7, 0,0,0],
[8, 0,0,0],
[9, 0,0,0],
[10,0,0,0],
[11,0,0,0],
[12,0,0,0],
[13,0,0,0],
[14,0,0,0],
[15,0,0,0],
[16,0,0,0],
[17,0,0,0],
[18,0,0,0],
[19,0,0,0],
[20,0,0,0],
[21,0,0,0],
[22,0,0,0]
];
/*
const r004ATG =[['0senias', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
['1UNIVER', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//	['2LSC'		,'acceso'	,'estilo'	,0								,0								,0							,'ajustes'	,'Chapinero comunidad'				,0				,'anuncios'			,0						,0								,0					,0				,0							,0				,0							,0												,0											,'reiniciar'	,'i bogota QR capturar'	,''],
['2LSC', 0, 0, 0, 0, 0, 'ajustes', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
['3ASL', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
*/

//trabajar de la mano con g00VARS[11][2]::LÍNEA(S)DeLectura:0TodasLasLíneas,1Texto,2Morse,3Braille,4Señas
//['1 0:Imagen,1:Icono,2:Texto,3ImagenAlta,4VideoAlto,5Texto+Icono,6Icono+Icono serie
//['5 0:FotoIcono 1:VideoMulti 2:FotoMulti 3:TextoMulti 4:InEntrada 5:OutSalida
//['10 0:Normal sin nada, 1:Deshabilitado o Deseleccionado /slash, 2:Campo Vacio obligatorio ?pregunta, 3:Campo con info o Respuesta _RayaInferior, 4:Campo vacio opcional -GuionMedio

//CONTROLAR menu
const mIr004B =/**/[['Recursos/ Casillas..', '1 0:Imag,1:Icon,2:Texto,3ImagenA,4VideoA', '2 id de la Imag, Icon o Texto', '3 onclick function, vacio=NO PERMITIDA(INFO)', '4 Visible 1:SI 0:no', '5 0:FotI 1:Vide 2:FotM 3:Text 4:In 5:Out', '6 id Video([5]1) o id foto([5]0/2)', '7 id Texto Icono', '8 ids Iconos Capa1', '9 ids Iconos Capa2', '10 Capa3 Estado 0: 1:/ 2:_ 3: ? 4: -'],
[1, 1,56,5,1,0,0,0,0,0,0],
[2, 1,2,9,1,0,0,0,0,0,0],
[3, 1,28,36,0,0,0,0,0,0,0],
[4, 1,27,35,0,0,0,0,0,0,0],
[5, 1,19,6,0,0,0,0,0,0,0],
[6, 1,50,7,1,0,0,0,0,0,0],
[7, 1,77,112,0,0,0,0,0,0,0],
[8, 1,76,6,0,0,0,0,0,0,0],
[9, 1,10,6,0,0,0,0,0,0,0],
[10,1,3,8,1,0,0,0,0,0,0],
[11,1,86,8,0,0,0,0,0,0,0],
[12,1,18,6,0,0,0,0,0,0,0],
[13,1,16,6,0,0,0,0,0,0,0],
[14,1,17,6,0,0,0,0,0,0,0],
[15,1,7,6,0,0,0,0,0,0,0],
[16,1,20,6,0,0,0,0,0,0,0],
[17,1,22,6,0,0,0,0,0,0,0],
[18,1,23,6,0,0,0,0,0,0,0],
[19,1,69,71,1,0,0,0,0,0,0],
[20,0,5,6,1,0,0,0,0,0,0],
[21,1,74,98,1,0,0,0,0,0,0],
[22,1,24,99,1,0,0,0,0,0,0]
];
/*
const r004B =[['Recursos/ Casillas..', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
['1 0:Imag,1:Icon,2:Texto,3Image,4Vid,5TI,6II', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
['2 id de la Imag, Icon o Texto', 56, 2, 28, 27, 19, 50, 77, 76, 10, 3, 86, 18, 16, 17, 7, 20, 22, 23, 69, 5, 74, 24],
['3 onclick function, vacio=NO PERMITIDA(INFO)', 5, 9, 36, 35, 6, 7, 112, 6, 6, 8, 8, 6, 6, 6, 6, 6, 6, 6, 71, 6, 98, 99],
['4 Visible 1:SI 0:no', 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
['5 0:FotI 1:Vide 2:FotM 3:Text 4:In 5:Out', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
['6 id Video([5]1) o id foto([5]0/2)', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
['7 id Texto Icono', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
['8 ids Iconos Capa1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
['9 ids Iconos Capa2', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
['10 Capa3 Estado 0: 1:/ 2:_ 3: ? 4: -', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
*/

/*texto alternativo para imagen de menu*/
const mIr004Z =/**/[['Casillas', 1, 2, 3, 4],
[1, 'icon of a person next to a gear','icono de una persona junto a un engranaje','icône d\'une personne à côté d\'un engrenage','기어 옆에 있는 사람 아이콘'],
[2, 'gear','engranaje','engrenage','기어'],
[3, 'maximized window, change','ventana maximizada, cambiar','fenêtre maximisée, changer','korean'],
[4, 'minimized window, change','ventana minimizada, cambiar','fenêtre réduite, changer','korean'],
[5, 'user account','cuenta de usuario','compte d\'utilisateur','compte d\'utilisateur'],
[6, 'tourist sign','señal turística','signe touristique','관광 표지판'],
[7, 'flag','bandera','drapeau','깃발'],
[8, 'funnel','embudo','entonnoir','깔때기'],
[9, 'help','ayuda','aider','aider'],
[10,'ads: to know the local news','icono persona leyendo','annonces: pour connaître l\'actualité locale','annonces'],
[11,'ads: to know the local news','icono apretón de manos','annonces: pour connaître l\'actualité locale','annonces'],
[12,'local contacts','contactos locales','contacts locaux','contacts locaux'],
[13,'post an invite','publicar una invitación','publier une invitation','publier une invitation'],
[14,'posts','mensajes','des postes','des postes'],
[15,'personal contacts','contactos personales','contacts personnels','contacts personnels'],
[16,'seeker','buscador','chercheur','korean'],
[17,'advice request, deactivated, change','solicitud de asesoría, desactivado, cambiar','demande de conseil, désactivé, changer','korean'],
[18,'menu rating good, change','calificación del menú buena, cambiar','bonne note de menu, changer','korean'],
[19,'headlines: to see the audiovisual summary of the news','icono pantalla de monitor','titres: pour voir le résumé audiovisuel de l\'actualité','헤드라인: 뉴스의 시청각 요약 보기'],
[20,'i bogota QR code','código QR de i bogota','i bogota QR code','i 스캔할 보고타 QR'],
[21,'frequently asked questions: to find answers','icono de pregunta','Questions fréquemment posées: pour trouver des réponses','자주 묻는 질문: 답변 찾기'],
[22,'restart: to exit and reload the application','icono de reiniciar','redémarrer: pour quitter et recharger l\'application','다시 시작: 응용 프로그램을 종료하고 다시 로드합니다.']
];
/*
const r004Z = [['Casillas', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
[1, 'icon of a person next to a gear', 'gear', 'maximized window, change', 'minimized window, change', 'user account', 'tourist sign', 'flag', 'funnel', 'help', 'ads: to know the local news', 'ads: to know the local news', 'local contacts', 'post an invite', 'posts', 'personal contacts', 'seeker', 'advice request, deactivated, change', 'menu rating good, change', 'headlines: to see the audiovisual summary of the news', 'i bogota QR code', 'frequently asked questions: to find answers', 'restart: to exit and reload the application'],
[2, 'icono de una persona junto a un engranaje', 'engranaje', 'ventana maximizada, cambiar', 'ventana minimizada, cambiar', 'cuenta de usuario', 'señal turística', 'bandera', 'embudo', 'ayuda', 'icono persona leyendo', 'icono apretón de manos', 'contactos locales', 'publicar una invitación', 'mensajes', 'contactos personales', 'buscador', 'solicitud de asesoría, desactivado, cambiar', 'calificación del menú buena, cambiar', 'icono pantalla de monitor', 'código QR de i bogota', 'icono de pregunta', 'icono de reiniciar'],
[3, 'icône d\'une personne à côté d\'un engrenage', 'engrenage', 'fenêtre maximisée, changer', 'fenêtre réduite, changer', 'compte d\'utilisateur', 'signe touristique', 'drapeau', 'entonnoir', 'aider', 'annonces: pour connaître l\'actualité locale', 'annonces: pour connaître l\'actualité locale', 'contacts locaux', 'publier une invitation', 'des postes', 'contacts personnels', 'chercheur', 'demande de conseil, désactivé, changer', 'bonne note de menu, changer', 'titres: pour voir le résumé audiovisuel de l\'actualité', 'i bogota QR code', 'Questions fréquemment posées: pour trouver des réponses', 'redémarrer: pour quitter et recharger l\'application'],
[4, '기어 옆에 있는 사람 아이콘', '기어', 'korean', 'korean', 'compte d\'utilisateur', '관광 표지판', '깃발', '깔때기', 'aider', 'annonces', 'annonces', 'contacts locaux', 'publier une invitation', 'des postes', 'contacts personnels', 'korean', 'korean', 'korean', '헤드라인: 뉴스의 시청각 요약 보기', 'i 스캔할 보고타 QR', '자주 묻는 질문: 답변 찾기', '다시 시작: 응용 프로그램을 종료하고 다시 로드합니다.']
];
*/

/*
//RUTA 5 MULTIMEDIA: DESCRIPCION DE IMAGENES, GUÍONES DE VIDEO O INFOGRAMAS
//const 	r005A y r005B ver/buscar aquí al final en MONGODB
//RUTA 5 MULTIMEDIA: DESCRIPCION DE IMAGENES, GUÍONES DE VIDEO O INFOGRAMAS
const r005A =[['Casillas', 1, 2, 3],
[1, '', 'in the image Greta Thunberg, a young girl, with white skin, light eyes, long blonde hair with a braid, blue short-sleeved cotton shirt', 'a tutorial is a method of knowledge transfer or an instructional system of short duration and based on self-learning, and can be part of a larger learning process.'],
[2, '', 'en la imagen Greta Thunberg, una chica joven, de piel blanca, ojos claros, el cabello largo y rubio con una trenza, camiza azúl de manga corta en algodón', 'un tutorial es un método de transferencia de conocimiento o un sistema instructivo de corta duración y basado en el autoaprendizaje, pudiendo ser parte de un proceso de aprendizaje mayor.'],
[3, '', 'dans l\'image Greta Thunberg, une jeune fille, à la peau blanche, aux yeux clairs, aux longs cheveux blonds avec une tresse, chemise bleue en coton à manches courtes', 'un tutoriel est une méthode de transfert de connaissances ou un système d\'enseignement de courte durée et basé sur l\'auto-apprentissage, et peut faire partie d\'un processus d\'apprentissage plus large.']
];
//trabajar de la mano con g00VARS[11][2]::LÍNEA(S)DeLectura:0TodasLasLíneas,1Texto,2Morse,3Braille,4Señas
//['1 0:Imagen,1:Icono,2:Texto,3ImagenAlta,4VideoAlto,5Texto+Icono,6Icono+Icono serie
//['5 0:FotoIcono 1:VideoMulti 2:FotoMulti 3:TextoMulti 4:InEntrada 5:OutSalida
//['10 0:Normal sin nada, 1:Deshabilitado o Deseleccionado /slash, 2:Campo Vacio obligatorio ?pregunta, 3:Campo con info o Respuesta _RayaInferior, 4:Campo vacio opcional -GuionMedio 	
const r005B =[['Recursos/ Casillas..', 1, 2, 3],
['1 0:Imag,1:Icon,2:Texto,3ImagenA,4VideoA', 0, 0, 0],
['2 id de la Imag, Icon o Texto', 1, 1, 1],
['3 onclick function, vacio=NO PERMITIDA(INFO)', 17, 12, 12],
['4 Visible 1:SI 0:no', 1, 1, 1],
['5 0:FotI 1:Vide 2:FotM 3:Text 4:In 5:Out', 1, 1, 1],//,1 	,2 	,3 	],  - 0k 0,0,0
['6 id Video([5]1) o id foto([5]0/2)', 1, 2, 0],
['7 id Texto Icono', 0, 0, 0],
['8 ids Iconos Capa1', 0, 0, 0],
['9 ids Iconos Capa2', 0, 0, 0],
['10 Capa3 Estado 0: 1:/ 2:_ 3: ? 4: -', 0, 0, 0]
];
//NOTA COMO LA RUTA 5 NUNCA SE LLAMA LA r005Z no se creo Y no se generan errores por consola
*/

/*
//RUTA 6 LIBRE accesibilidad999 ??
const 	r006A		=  [	['Casillas'	,1				,2			,3				,4				,5		,6		,7		   		,8						,9				,10											],
							[1			,'text'			,'Morse'	,'Braille'		,'signs'		,''		,''		,'language'		,'sign language'		,'community'	,'multimedia, accessibility tutorial'		],
							[2			,'texto'		,'Morse'	,'Braille'		,'señas'		,''		,''		,'idioma'		,'lengua de señas'		,'comunidad'	,'multimedia, tutoríal de accesibilidad'	],
							[3			,'texte'		,'Morse'	,'Braille'		,'signes'		,''		,''		,'langue'		,'langue des signes'	,'communauté'	,'multimédia, tutoriel de accessibilité'	]
						];
//trabajar de la mano con g00VARS[11][2]::LÍNEA(S)DeLectura:0TodasLasLíneas,1Texto,2Morse,3Braille,4Señas,5Tuto
//['1 0:Imagen,1:Icono,2:Texto,3ImagenAlta,4VideoAlto,5Texto+Icono,6Icono+Icono serie
//['5 0:FotoIcono 1:VideoMulti 2:FotoMulti 3:TextoMulti 4:InEntrada 5:OutSalida
//['10 0:Normal sin nada, 1:Deshabilitado o Deseleccionado /slash, 2:Campo Vacio obligatorio ?pregunta, 3:Campo con info o Respuesta _RayaInferior, 4:Campo vacio opcional -GuionMedio 	
const 	r006B		=  [	['Recursos/ Casillas..'							,1	,2	,3	,4	,5	,6	,7	,8	,9	,10	],
							['1 0:Imag,1:Icon,2:Texto,3ImagenA,4VideoA'		,2 	,2	,2	,1	,1	,1	,1 	,1	,1	,1	],
							['2 id de la Imag, Icon o Texto'				,3 	,1	,2	,6	,0	,0	,25 ,26	,15	,9	],//35-31,34-36
							['3 onclick function, vacio=NO PERMITIDA(INFO)'	,1 	,2	,3	,4	,0	,0	,6 	,6	,6	,6	],
							['4 Visible 1:SI 0:no'							,1 	,1	,1	,1	,0	,0	,1 	,1	,0	,0	],
							['5 0:FotI 1:Vide 2:FotM 3:Text 4:In 5:Out'		,0 	,0	,0	,0	,0	,0	,0 	,0	,0	,0	],
							['6 id Video([5]1) o id foto([5]0/2)'			,0 	,0	,0	,0	,0	,0	,0 	,0	,0	,0	],
							['7 id Texto Icono'								,0 	,0	,0	,0	,0	,0	,0  ,0  ,0  ,0  ],
							['8 ids Iconos Capa1'							,0 	,0	,0	,0	,0	,0	,0  ,0  ,0  ,0  ],
							['9 ids Iconos Capa2'							,0 	,0	,0	,0	,0	,0	,0  ,0  ,0  ,0  ],
							['10 Capa3 Estado 0: 1:/ 2:_ 3: ? 4: -'			,0 	,0	,0	,0	,0	,0	,0  ,0  ,0  ,0  ]
						];
*/
//Hola! vas a recibir anunciós locales, estás en el menú de entrada, abajo encontrarás 9 botones con diferentes recursos: texto mínimo, vibración, audio texto, texto, y hay otras 5 más, selecciona el recurso más apropiado para recibir los anunciós 
//Hello! You are going to receive local announcements, you are in the technology menu, below you will find 9 buttons with different technologies: minimal text, vibration, audio text, text, and there are 5 more, select the most appropriate technology to receive the announcements and that's it

/*
//LAS siguientes lineas funcionaban biien pero se ocultan por prueba.. y gRuta 7 desaparece

//RUTA 7 FORMATO - ACCESO - PRESENTACIÓN
const 	r007A		=[	['Casillas'	,1																																																																																																																																																																																																																																																																																																																																																																																																									,2													,3																			,4													,5																,6		   											,7																,8												,9																	,10																	,11						],
							[1			,['Hello! you are going to receive local ads, you are at the hall, below this reading you will find several resources, select the most appropriate resource to receive the ads'										,'on this website you will find accessible information through several resources'			,'the resources are miniature, vibrator, audio text, glasses, giant, black background, signs, braille and american'			,'To access the information, select the resource of your preference by clicking on the element, if that element has the focus, you can also click the round button, or the 6 key. For more information on the round button or the 6 key, keep reading...'								,'Navigation, to navigate there are 6 navigation buttons, on the screen they go from top to bottom'		,'there are 3 buttons on the left side, the square menu button, the diagonal button to cancel or exit and the triangle button up to go up or back'					,'and on the right side there are 3 other buttons, the vertical quick information bar button, the round button to accept or enter and the down triangle button to go down or go forward'		,'To enable navigation buttons on a physical keyboard, turn on caps lock button'										,'square button is 7 or N, diagonal button is 4 or M, triangle up button is 1 or comma, the vertical bar button is 9 or V, the round button is 6, C or space, and the down triangle button is 3, X or tab']																					,'miniature: to see everything smaller, choose'		,'vibrator: to receive vibrations of dots and dashes, choose'				,'audio text: to listen to the texts, choose'		,'glasses: for large print and no audio, choose'				,'giant:to see everything bigger, choose'			,'black background: to see the text in yellow, choose'			,'signs: to see the interpreter, choose'		,'braille: to display braille and activate audio, choose'			,'American: for English and Sign Language, choose'					,'count, choose'		],
							[2			,['¡Hola! vas a recibir anuncios locales, estás en la sala, debajo de esta lectura encontrarás varios recursos, selecciona el recurso más adecuado para recibir los anuncios'										,'en esta web encontrarás información accesible a través de varios recursos'				,'los recursos son miniatura, vibrador, audio texto, lentes, gigante, fondo negro, señas, braille y americano'	 			,'Para acceder a la información, seleccione el recurso de su preferencia haciendo clic en el elemento, si ese elemento tiene el foco, también puede hacer clic en el botón redondo, o en la tecla 6. Para más información sobre el botón redondo o la tecla 6, sigue leyendo...'		,'Navegación, para navegar hay 6 botones de navegación, en pantalla van desde arriba hacia abajo'		,'hay 3 botones al lado izquierdo, el botón cuadrado de menú, el botón diagonal para cancelar o salir y el botón de triángulo hacia arriba para subir o retroceder'	,'y al lado derecho hay otros 3 botones, el botón barra vertical de información rápida, el botón redondo para aceptar o ingresar y el botón de triángulo hacia abajo para ir abajo o avanzar'	,'Para habilitar los botones de navegación en un teclado físico, active el botón de bloqueo de mayúsculas'				,'el botón cuadrado es el 7 o la N, el botón diagonal es el 4 o la M, el botón de triángulo hacia arriba es el 1 o la coma, el botón barra vertical es el 9 o la V, el botón redondo es el 6, la C o el espacio, y el botón de triángulo hacia abajo es el 3, la X o el tabulador']			,'miniatura: para ver todo más pequeño, elegir'		,'vibrador: para recibir vibraciones de puntos y rayas, elegir'				,'audio texto: para escuchar los textos, elegir'	,'lentes: para letra grande y sin audio, elegir'				,'gigante: para ver todo más grande, elegir'		,'fondo negro: para ver el texto en color amarillo, elegir'		,'señas: para ver el interprete, elegir'		,'braille: para mostrar el braille y activar audio, elegir'			,'Americano: para inglés y lengua de señas, elegir'					,'cuenta, elegir'		],
							[3			,['Salut! vous allez recevoir des annonces locales, vous êtes à la salle, en dessous de cette lecture vous trouverez plusieurs ressources, sélectionnez la ressource la plus appropriée pour recevoir les annonces'	,"Sur ce site, vous trouverez des informations accessibles à travers plusieurs ressources"	,"les ressources sont miniature, vibreur, texte audio, lunettes, géant, fond noir, signes, braille et américain"			,"Pour accéder aux informations, sélectionnez la ressource de votre choix en cliquant sur l'élément, si cet élément a le focus, vous pouvez également cliquer sur le bouton rond, ou sur la touche 6. Pour plus d'informations sur le bouton rond ou la touche 6, continue de lire..."	,"Navigation, pour naviguer il y a 6 boutons de navigation, sur l'écran ils vont de haut en bas"		,"il y a 3 boutons sur le côté gauche, le bouton menu carré, le bouton diagonal pour annuler ou sortir et le bouton triangle haut pour monter ou dos"				,"et sur le côté droit il y a 3 autres boutons, le bouton barre d'information rapide verticale, le bouton rond pour accepter ou entrer et le bouton triangle bas pour descendre ou avancer"		,"Pour activer les boutons de navigation sur un clavier physique, activez le bouton de verrouillage des majuscules"		,"le bouton carré est 7 ou N, le bouton diagonal est 4 ou M, le bouton triangle vers le haut est 1 ou virgule, le bouton de la barre verticale est 9 ou V, le bouton rond est 6, C ou espace, et le bouton triangle vers le bas est 3, X ou tabulation"]									,'miniature: pour tout voir plus petit, choisir'	,'vibreur: pour recevoir des vibrations de points et de tirets, choisir'	,'texte audio: pour écouter les textes, choisir'	,'lunettes: pour les gros caractères et pas de son, choisir'	,'géant: pour tout voir en plus grand, choisir'		,'fond noir: pour voir le texte en jaune, choisir'				,'signes: pour voir l\'interprète, choisir'		,'braille: pour afficher le braille et activer le son, choisir'		,'Américain: pour l\'anglais et la langue des signes, choisir'		,'compte, choisir'		],
							[4			,['안녕하세요! 지역 공지사항을 수신할 예정입니다. 방에 있습니다. 이 판독값 아래에 여러 리소스가 있습니다. 공지사항을 수신할 가장 적절한 리소스를 선택하세요.'																								,"이 웹 사이트에서 다양한 리소스를 통해 액세스할 수 있는 정보를 찾을 수 있습니다."								,"리소스는 미니어처, 진동기, 오디오 텍스트, 안경, 거인, 검정색 배경, 표지판, 점자 및 미국식입니다."												,"정보에 액세스하려면 요소를 클릭하여 원하는 리소스를 선택하고 해당 요소에 포커스가 있는 경우 둥근 버튼 또는 6 키를 클릭할 수도 있습니다. 둥근 버튼 또는 6 키에 대한 자세한 내용은 계속 읽으세요..."																																,"탐색, 탐색을 위해 화면에서 위에서 아래로 이동하는 6개의 탐색 버튼이 있습니다."											,"왼쪽에는 사각형 메뉴 버튼, 취소 또는 종료를 위한 대각선 버튼, 위로 또는 뒤로 가기를 위한 위쪽 삼각형 버튼 3개의 버튼이 있습니다."																,"오른쪽에는 3개의 다른 버튼이 있습니다. 세로 빠른 정보 표시줄 버튼, 수락 또는 입력을 위한 원형 버튼, 아래로 이동 또는 앞으로 이동을 위한 아래쪽 삼각형 버튼입니다."																	,"실제 키보드에서 탐색 버튼을 활성화하려면 Caps Lock 버튼을 켜십시오."																,"사각형 버튼은 7 또는 N, 대각선 버튼은 4 또는 M, 삼각형 위쪽 버튼은 1 또는 쉼표, 세로 막대 버튼은 9 또는 V, 둥근 버튼은 6 , C 또는 스페이스, 아래쪽 삼각형 버튼은 3, X, 또는 탭"]																																			,'세밀화: 모든 것을 더 작게 보려면, 선택하다'					,'진동기: 도트 및 대시 진동을 수신하려면, 선택하다'										,'오디오 텍스트: 텍스트를 들으려면, 선택하다'					,'안경: 큰 활자 및 오디오 없음의 경우 선택, 선택하다'						,'거대한: 전체를 더 크게 보려면, 선택하다'					,'검은색 배경: 텍스트를 노란색으로 보려면, 선택하다'						,'징후: 통역사를 보려면 다음을 선택하십시오, 선택하다'		,'점자: 점자를 표시하고 오디오를 활성화하려면, 선택하다'							,'미국: 영어 및 수화용, 선택하다'											,'경쟁, 선택하다'			]
						];

const 	r007Z		=[	['Casillas'	,1																																																																																																																																																																																																																																																																																																																,2															,3																,4																		,5															,6		   		,7																,8																	,9													,10																		,11																			],
							[1			,['Young woman in white sweater, headphones and microphone.'	,'Blind young woman with hearing aids, using her cell phone'							,'There are four blue icons: wheelchair person, deaf ear, blind eye and the last one is an icon with 2 faces'					,'In front of a woman in a wheelchair, there is a man who holds her hands'			,'In front of a laptop is an adult man without his right arm, the man looks at the screen and holds his glasses with his left hand'								,'there are 3 buttons on the left side, the square menu button, the diagonal button to cancel or exit and the triangle button up to go up or back'					,'and on the right side there are 3 other buttons, the vertical quick information bar button, the round button to accept or enter and the down triangle button to go down or go forward.'			,'To enable navigation buttons on a physical keyboard, turn on caps lock button'										,'square button is 7 or N, diagonal button is 4 or M, triangle up button is 1 or comma, the vertical bar button is 9 or V, the round button is 6, C or space, and the down triangle button is 3, X or tab']																			,'minimun height: to see everything smaller, select'			,'to receive vibrations of dots and dashes, select'						,'audio text: to listen to the texts, select'			,'glasses'		,'max text:to see everything bigger, select'					,'black background: to see the text in yellow, select'				,'signs: to see the interpreter, select'			,'braille: to display braille and hear the text, select'				,'to see the english translation, select'			,'count, select'		],
							[2			,['Mujer joven con sueter blanco, auriculares y micrófono'		,'Mujer joven ciega con audífonos, usando su teléfono celular'							,'Hay cuatro iconos azules: persona en silla de ruedas, oído sordo, ojo ciego y el último es un icono con 2 caras'	 			,'Frente a una mujer en silla de ruedas, hay un hombre que le toma las manos'		,'Frente a una computadora portátil hay un hombre adulto sin su brazo derecho, el hombre mira la pantalla y sostiene sus anteojos con la mano izquierda'		,'hay 3 botones al lado izquierdo, el botón cuadrado de menú, el botón diagonal para cancelar o salir y el botón de triángulo hacia arriba para subir o retroceder'	,'y al lado derecho hay otros 3 botones, el botón barra vertical de información rápida, el botón redondo para aceptar o ingresar y el botón de triángulo hacia abajo para ir abajo o avanzar.'		,'Para habilitar los botones de navegación en un teclado físico, active el botón de bloqueo de mayúsculas'				,'el botón cuadrado es el 7 o la N, el botón diagonal es el 4 o la M, el botón de triángulo hacia arriba es el 1 o la coma, el botón barra vertical es el 9 o la V, el botón redondo es el 6, la C o el espacio, y el botón de triángulo hacia abajo es el 3, la X o el tabulador']	,'altura mínima: para ver todo más pequeño, seleccionar'		,'icono de un corazón con pulsaciones'									,'audio texto: para escuchar los textos, seleccionar'	,'lentes'		,'altura máxima: para ver todo más grande, seleccionar'			,'fondo negro: para ver el texto en color amarillo, seleccionar'	,'señas: para ver el interprete, seleccionar'		,'braille: para mostrar el braille y escuchar el texto, seleccionar'	,'para ver la traducción al ingles, seleccionar'	,'cuenta, seleccionar'	],
							[3			,['Jeune femme en pull blanc, casque et microphone.'			,"Jeune femme aveugle avec des prothèses auditives, à l'aide de son téléphone portable"	,"Il y a quatre icônes bleues : personne en fauteuil roulant, sourde oreille, aveugle et la dernière est une icône à 2 visages"	,"Devant une femme en fauteuil roulant, il y a un homme qui lui tient les mains"	,"Devant un ordinateur portable se trouve un homme adulte sans son bras droit, l'homme regarde l'écran et tient ses lunettes avec sa main gauche"				,"il y a 3 boutons sur le côté gauche, le bouton menu carré, le bouton diagonal pour annuler ou sortir et le bouton triangle haut pour monter ou dos"				,"et sur le côté droit il y a 3 autres boutons, le bouton barre d'information rapide verticale, le bouton rond pour accepter ou entrer et le bouton triangle bas pour descendre ou avancer."		,"Pour activer les boutons de navigation sur un clavier physique, activez le bouton de verrouillage des majuscules"		,"le bouton carré est 7 ou N, le bouton diagonal est 4 ou M, le bouton triangle vers le haut est 1 ou virgule, le bouton de la barre verticale est 9 ou V, le bouton rond est 6, C ou espace, et le bouton triangle vers le bas est 3, X ou tabulation"]							,'hauteur minimale: pour tout voir plus petit, sélectionner'	,'pour recevoir des vibrations de points et de tirets, sélectionner'	,'texte audio: pour écouter les textes, sélectionner'	,'lunettes'		,'hauteur maximale: pour tout voir en plus grand, sélectionner'	,'fond noir: pour voir le texte en jaune, sélectionner'				,'signes: pour voir l\'interprète, sélectionner'	,'braille: pour afficher le braille et entendre le texte, sélectionner'	,'pour voir la traduction en anglais, sélectionner'	,'compte, sélectionner'	],
							[4			,['흰색 스웨터, 헤드폰 및 마이크를 가진 젊은 여자'							,"Jeune femme aveugle avec des prothèses auditives, à l'aide de son téléphone portable"	,"Il y a quatre icônes bleues : personne en fauteuil roulant, sourde oreille, aveugle et la dernière est une icône à 2 visages"	,"Devant une femme en fauteuil roulant, il y a un homme qui lui tient les mains"	,"Devant un ordinateur portable se trouve un homme adulte sans son bras droit, l'homme regarde l'écran et tient ses lunettes avec sa main gauche"				,"il y a 3 boutons sur le côté gauche, le bouton menu carré, le bouton diagonal pour annuler ou sortir et le bouton triangle haut pour monter ou dos"				,"et sur le côté droit il y a 3 autres boutons, le bouton barre d'information rapide verticale, le bouton rond pour accepter ou entrer et le bouton triangle bas pour descendre ou avancer."		,"Pour activer les boutons de navigation sur un clavier physique, activez le bouton de verrouillage des majuscules"		,"le bouton carré est 7 ou N, le bouton diagonal est 4 ou M, le bouton triangle vers le haut est 1 ou virgule, le bouton de la barre verticale est 9 ou V, le bouton rond est 6, C ou espace, et le bouton triangle vers le bas est 3, X ou tabulation"]							,'hauteur minimale: pour tout voir plus petit, sélectionner'	,'pour recevoir des vibrations de points et de tirets, sélectionner'	,'texte audio: pour écouter les textes, sélectionner'	,'안경'			,'hauteur maximale: pour tout voir en plus grand, sélectionner'	,'fond noir: pour voir le texte en jaune, sélectionner'				,'signes: pour voir l\'interprète, sélectionner'	,'braille: pour afficher le braille et entendre le texte, sélectionner'	,'pour voir la traduction en anglais, sélectionner'	,'compte, sélectionner'	]
						];

//Do you want to receive local and accessible news?
//¿Quieres recibir noticias locales y accesibles?
						//hola, estás en el sitio web que hace que la información sea accesible para la mayoría de las personas. Para ello los usuarios cuentan con 9 estilos: 
//trabajar de la mano con g00VARS[11][2]::LÍNEA(S)DeLectura:0TodasLasLíneas,1Texto,2Morse,3Braille,4Señas,5Tuto
//['1 0:Imagen,1:Icono,2:Texto,3ImagenAlta,4VideoAlto,5Texto+Icono,6Icono+Icono serie
//['5 0:FotoIcono 1:VideoMulti 2:FotoMulti 3:TextoMulti 4:InEntrada 5:OutSalida
//['10 0:Normal sin nada, 1:Deshabilitado o Deseleccionado /slash, 2:Campo Vacio obligatorio ?pregunta, 3:Campo con info o Respuesta _RayaInferior, 4:Campo vacio opcional -GuionMedio 	
const 	r007B		=[	['Recursos/ Casillas..'							,1								,2	,3	,4	,5	,6	,7	,8	,9	,10	,11	],
							['1 0:Imag,1:Icon,2:Texto,3Image,4Vid,5TI,6II'	,[3	,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ]	,6 	,6	,9	,9	,8	,7	,6 	,6	,6	,6	],
							['2 id de la Imag, Icon o Texto'				,[15,11,16,17,12,13,8 ,9 ,10]	,27 ,46	,52	,64	,57	,61	,6  ,49 ,79	,53	],//64  48
							['3 onclick function, vacio=NO PERMITIDA(INFO)'	,0								,50 ,51	,54	,53	,56	,57	,58 ,59	,60	,60	],
							['4 Visible 1:SI 0:no'							,1								,1 	,1	,1	,1	,1	,1	,1 	,1	,1	,0	],
							['5 0:FotI 1:Vide 2:FotM 3:Text 4:In 5:Out'		,[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ]	,0 	,0	,0	,0	,0	,0	,0 	,0	,0	,0	],
							['6 id Video([5]1) o id foto([5]0/2)'			,[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ]	,0 	,0	,0	,0	,0	,0	,0 	,0	,0	,0	],
							['7 id Texto Icono (cuando es 5 en 1)'			,[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ]	,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ],
							['8 ids Iconos Capa1'							,[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ]	,0 	,0	,0	,0	,0	,0	,0  ,0  ,0  ,0  ],
							['9 ids Iconos Capa2'							,[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ]	,0 	,0	,0	,0	,0	,0	,0  ,0  ,0  ,0  ],
							['10 Capa3 Estado 0: 1:/ 2:_ 3: ? 4: -'			,[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ]	,0 	,0	,0	,0	,0	,0	,0  ,0  ,0  ,0  ]
						];

const 	r007B		=[	['Recursos/ Casillas..'								,1								,2	,3	,4	,5	,6	,7	,8	,9	,10	,11	],
							['1 0:Imag,1:Icon,2:Texto,3Image,4Vid,5TI,6II'	,[3	,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ]	,6 	,6	,9	,9	,8	,7	,6 	,6	,6	,6	],
							['2 id de la Imag, Icon o Texto'				,[15,11,16,17,12,13,8 ,9 ,10]	,27 ,46	,52	,64	,57	,61	,6  ,49 ,79	,53	],//64  48
							['3 onclick function, vacio=NO PERMITIDA(INFO)'	,0								,0 	,0	,0	,0	,0	,0	,0 	,0	,0	,0	],
							['4 Visible 1:SI 0:no'							,1								,1 	,1	,1	,1	,1	,1	,1 	,1	,1	,0	],
							['5 0:FotI 1:Vide 2:FotM 3:Text 4:In 5:Out'		,[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ]	,0 	,0	,0	,0	,0	,0	,0 	,0	,0	,0	],
							['6 id Video([5]1) o id foto([5]0/2)'			,[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ]	,0 	,0	,0	,0	,0	,0	,0 	,0	,0	,0	],
							['7 id Texto Icono (cuando es 5 en 1)'			,[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ]	,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ],
							['8 ids Iconos Capa1'							,[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ]	,0 	,0	,0	,0	,0	,0	,0  ,0  ,0  ,0  ],
							['9 ids Iconos Capa2'							,[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ]	,0 	,0	,0	,0	,0	,0	,0  ,0  ,0  ,0  ],
							['10 Capa3 Estado 0: 1:/ 2:_ 3: ? 4: -'			,[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ]	,0 	,0	,0	,0	,0	,0	,0  ,0  ,0  ,0  ]
						];

*/

//RUTA 8 AYUDAS ver 1969 mIr003A - DOCUMENTOS - TUTORIAL Guía de servicios - Recursos - Documentación - Documentos
const mIr008A =/**/[['Casillas', 1, 2, 3, 4],
[1, ['What is all this and what is it for?', 'You are on a website, which serves to offer local information to people without or with a certain degree of disability', 'it has accessible elements that facilitate the use and access to information, for example, audio text, vibrator, signs, géant, black background, braille and large buttons'],['¿Qué es todo esto y para qué sirve?', 'Estás en un sitio web, que sirve para ofrecer información local a personas sin o con cierto grado de discapacidad', 'cuenta con elementos accesibles que facilitan el uso y acceso a la información, por ejemplo, audio texto, vibrador, señas, gigante, fondo negro, braille y botones grandes'],["C'est quoi tout ça et à quoi ça sert ?", "Vous êtes sur un site Web, qui sert à offrir des informations locales aux personnes sans ou avec un certain degré de handicap", "il a des éléments accessibles qui facilitent l'utilisation et l'accès à l'information, par exemple, texte audio, vibreur, signes, giant, fond noir, braille et gros boutons"],["이 모든 것이 무엇이며 무엇을 위한 것입니까?", "귀하는 특정 정도의 장애가 있거나 없는 사람들에게 지역 정보를 제공하는 웹사이트에 있습니다.", "예를 들어 오디오 텍스트, 진동기, 표지판, 거대한 배경, 검은색 배경, 점자 및 큰 버튼과 같이 정보에 대한 사용 및 액세스를 용이하게 하는 액세스 가능한 요소가 있습니다."]],
[2, ['How to navigate?', 'to navigate, in the window there are 6 navigation buttons that go from top to bottom', 'there are 3 buttons on the left side, the square menu button, the diagonal button to cancel or exit and the triangle button up to go up or back', 'and on the right side there are 3 other buttons, the vertical quick information bar button, the round button to accept or enter and the down triangle button to go down or go forward.'],['¿Cómo navegar?', 'para navegar, en la ventana hay 6 botones de navegación que van desde arriba hacia abajo', 'hay 3 botones al lado izquierdo, el botón cuadrado de menú, el botón diagonal para cancelar o salir y el botón de triángulo hacia arriba para subir o retroceder', 'y al lado derecho hay otros 3 botones, el botón barra vertical de información rápida, el botón redondo para aceptar o ingresar y el botón de triángulo hacia abajo para ir abajo o avanzar.'],["Comment naviguer?", "pour naviguer, dans la fenêtre il y a 6 boutons de navigation qui vont de haut en bas", "il y a 3 boutons sur le côté gauche, le bouton menu carré, le bouton diagonal pour annuler ou sortir et le bouton triangle haut pour monter ou dos", "et sur le côté droit il y a 3 autres boutons, le bouton barre d'information rapide verticale, le bouton rond pour accepter ou entrer et le bouton triangle bas pour descendre ou avancer."],["탐색하는 방법?", "pour naviguer, dans la fenêtre il y a 6 boutons de navigation qui vont de haut en bas", "il y a 3 boutons sur le côté gauche, le bouton menu carré, le bouton diagonal pour annuler ou sortir et le bouton triangle haut pour monter ou dos", "et sur le côté droit il y a 3 autres boutons, le bouton barre d'information rapide verticale, le bouton rond pour accepter ou entrer et le bouton triangle bas pour descendre ou avancer."]],
[3, ['How to navigate using a physical keyboard?', 'To enable navigation buttons on a physical keyboard turn on caps lock button', 'square button is 7 or N, diagonal button is 4 or M, triangle up button is 1 or comma, the vertical bar button is 9 or V, the round button is 6, C or space, and the down triangle button is 3, X or tab.'],['¿Cómo navegar usando un teclado físico?', 'Para habilitar los botones de navegación en un teclado físico active el botón de bloqueo de mayúsculas', 'el botón cuadrado es el 7 o la N, el botón diagonal es el 4 o la M, el botón de triángulo hacia arriba es el 1 o la coma, el botón barra vertical es el 9 o la V, el botón redondo es el 6, la C o el espacio, y el botón de triángulo hacia abajo es el 3, la X o el tabulador.'],["Comment naviguer à l'aide d'un clavier physique?", "Pour activer les boutons de navigation sur un clavier physique activez le bouton de verrouillage des majuscules", "le bouton carré est 7 ou N, le bouton diagonal est 4 ou M, le bouton triangle vers le haut est 1 ou virgule, le bouton de la barre verticale est 9 ou V, le bouton rond est 6, C ou espace, et le bouton triangle vers le bas est 3, X ou tabulation."],["물리적 키보드를 사용하여 탐색하는 방법은 무엇입니까?", "Pour activer les boutons de navigation sur un clavier physique activez le bouton de verrouillage des majuscules", "le bouton carré est 7 ou N, le bouton diagonal est 4 ou M, le bouton triangle vers le haut est 1 ou virgule, le bouton de la barre verticale est 9 ou V, le bouton rond est 6, C ou espace, et le bouton triangle vers le bas est 3, X ou tabulation."]],
[4, ['What is the hall and what is it for?', 'the hall is the first button on the menu, there the user has several resources to select and access the information, miniature, vibrator, audio text, glasses, giant, black background, signs, braille and american', "Each one of these 9 buttons allow the team's resources to be adapted so that the information is as accessible as possible and reaches the users"],['¿Qué es la sala y para qué sirve?', 'la sala es el primer botón del menú, allí el usuario cuenta con varios recursos para seleccionar y acceder a la información, miniatura, vibrador, audio texto, lentes, gigante, fondo negro, señas, braille y americano', 'cada uno de estos 9 botones permiten adaptar los recursos del equipo para que la informacíon sea lo más accesible posible y llegue hasta los usuarios'],["Quelle est la salle et à quoi sert-elle?", "la salle est le premier bouton du menu, là l\'utilisateur dispose de plusieurs ressources pour sélectionner et accéder aux informations, miniature, vibreur, texte audio, lunettes, géant, fond noir, panneaux, braille et américain", "chacun de ces 9 boutons permet d'adapter les ressources de l'équipe pour que l'information soit accessible et parvienne aux utilisateurs"],["물리적 키보드를 사용하여 탐색하는 방법은 무엇입니까?", "Pour activer les boutons de navigation sur un clavier physique activez le bouton de verrouillage des majuscules", "le bouton carré est 7 ou N, le bouton diagonal est 4 ou M, le bouton triangle vers le haut est 1 ou virgule, le bouton de la barre verticale est 9 ou V, le bouton rond est 6, C ou espace, et le bouton triangle vers le bas est 3, X ou tabulation."]],
[5, ['style, blah, blah, blah, blah', 'abece 1', 'abece 2'],['estilo, bla, bla, bla, bla', 'abece 1', 'abece 2'],['style, bla, bla, bla, bla', 'abece 1', 'abece 2'],['스타일 블라블라블라블라블라블라', 'abece 1', 'abece 2']],
[6, ['settings'],['ajustes'],['réglages'],['설정']],
[7, ['activities'],['actividades'],['activités'],['활동']]
];
/*
const r008A =[['Casillas', 1, 2, 3, 4, 5, 6, 7],
[1, ['What is all this and what is it for?', 'You are on a website, which serves to offer local information to people without or with a certain degree of disability', 'it has accessible elements that facilitate the use and access to information, for example, audio text, vibrator, signs, géant, black background, braille and large buttons'], ['How to navigate?', 'to navigate, in the window there are 6 navigation buttons that go from top to bottom', 'there are 3 buttons on the left side, the square menu button, the diagonal button to cancel or exit and the triangle button up to go up or back', 'and on the right side there are 3 other buttons, the vertical quick information bar button, the round button to accept or enter and the down triangle button to go down or go forward.'], ['How to navigate using a physical keyboard?', 'To enable navigation buttons on a physical keyboard turn on caps lock button', 'square button is 7 or N, diagonal button is 4 or M, triangle up button is 1 or comma, the vertical bar button is 9 or V, the round button is 6, C or space, and the down triangle button is 3, X or tab.'], ['What is the hall and what is it for?', 'the hall is the first button on the menu, there the user has several resources to select and access the information, miniature, vibrator, audio text, glasses, giant, black background, signs, braille and american', "Each one of these 9 buttons allow the team's resources to be adapted so that the information is as accessible as possible and reaches the users"], ['style, blah, blah, blah, blah', 'abece 1', 'abece 2'], ['settings'], ['activities']],
[2, ['¿Qué es todo esto y para qué sirve?', 'Estás en un sitio web, que sirve para ofrecer información local a personas sin o con cierto grado de discapacidad', 'cuenta con elementos accesibles que facilitan el uso y acceso a la información, por ejemplo, audio texto, vibrador, señas, gigante, fondo negro, braille y botones grandes'], ['¿Cómo navegar?', 'para navegar, en la ventana hay 6 botones de navegación que van desde arriba hacia abajo', 'hay 3 botones al lado izquierdo, el botón cuadrado de menú, el botón diagonal para cancelar o salir y el botón de triángulo hacia arriba para subir o retroceder', 'y al lado derecho hay otros 3 botones, el botón barra vertical de información rápida, el botón redondo para aceptar o ingresar y el botón de triángulo hacia abajo para ir abajo o avanzar.'], ['¿Cómo navegar usando un teclado físico?', 'Para habilitar los botones de navegación en un teclado físico active el botón de bloqueo de mayúsculas', 'el botón cuadrado es el 7 o la N, el botón diagonal es el 4 o la M, el botón de triángulo hacia arriba es el 1 o la coma, el botón barra vertical es el 9 o la V, el botón redondo es el 6, la C o el espacio, y el botón de triángulo hacia abajo es el 3, la X o el tabulador.'], ['¿Qué es la sala y para qué sirve?', 'la sala es el primer botón del menú, allí el usuario cuenta con varios recursos para seleccionar y acceder a la información, miniatura, vibrador, audio texto, lentes, gigante, fondo negro, señas, braille y americano', 'cada uno de estos 9 botones permiten adaptar los recursos del equipo para que la informacíon sea lo más accesible posible y llegue hasta los usuarios'], ['estilo, bla, bla, bla, bla', 'abece 1', 'abece 2'], ['ajustes'], ['actividades']],
[3, ["C'est quoi tout ça et à quoi ça sert ?", "Vous êtes sur un site Web, qui sert à offrir des informations locales aux personnes sans ou avec un certain degré de handicap", "il a des éléments accessibles qui facilitent l'utilisation et l'accès à l'information, par exemple, texte audio, vibreur, signes, giant, fond noir, braille et gros boutons"], ["Comment naviguer?", "pour naviguer, dans la fenêtre il y a 6 boutons de navigation qui vont de haut en bas", "il y a 3 boutons sur le côté gauche, le bouton menu carré, le bouton diagonal pour annuler ou sortir et le bouton triangle haut pour monter ou dos", "et sur le côté droit il y a 3 autres boutons, le bouton barre d'information rapide verticale, le bouton rond pour accepter ou entrer et le bouton triangle bas pour descendre ou avancer."], ["Comment naviguer à l'aide d'un clavier physique?", "Pour activer les boutons de navigation sur un clavier physique activez le bouton de verrouillage des majuscules", "le bouton carré est 7 ou N, le bouton diagonal est 4 ou M, le bouton triangle vers le haut est 1 ou virgule, le bouton de la barre verticale est 9 ou V, le bouton rond est 6, C ou espace, et le bouton triangle vers le bas est 3, X ou tabulation."], ["Quelle est la salle et à quoi sert-elle?", "la salle est le premier bouton du menu, là l\'utilisateur dispose de plusieurs ressources pour sélectionner et accéder aux informations, miniature, vibreur, texte audio, lunettes, géant, fond noir, panneaux, braille et américain", "chacun de ces 9 boutons permet d'adapter les ressources de l'équipe pour que l'information soit accessible et parvienne aux utilisateurs"], ['style, bla, bla, bla, bla', 'abece 1', 'abece 2'], ['réglages'], ['activités']],
[4, ["이 모든 것이 무엇이며 무엇을 위한 것입니까?", "귀하는 특정 정도의 장애가 있거나 없는 사람들에게 지역 정보를 제공하는 웹사이트에 있습니다.", "예를 들어 오디오 텍스트, 진동기, 표지판, 거대한 배경, 검은색 배경, 점자 및 큰 버튼과 같이 정보에 대한 사용 및 액세스를 용이하게 하는 액세스 가능한 요소가 있습니다."], ["탐색하는 방법?", "pour naviguer, dans la fenêtre il y a 6 boutons de navigation qui vont de haut en bas", "il y a 3 boutons sur le côté gauche, le bouton menu carré, le bouton diagonal pour annuler ou sortir et le bouton triangle haut pour monter ou dos", "et sur le côté droit il y a 3 autres boutons, le bouton barre d'information rapide verticale, le bouton rond pour accepter ou entrer et le bouton triangle bas pour descendre ou avancer."], ["물리적 키보드를 사용하여 탐색하는 방법은 무엇입니까?", "Pour activer les boutons de navigation sur un clavier physique activez le bouton de verrouillage des majuscules", "le bouton carré est 7 ou N, le bouton diagonal est 4 ou M, le bouton triangle vers le haut est 1 ou virgule, le bouton de la barre verticale est 9 ou V, le bouton rond est 6, C ou espace, et le bouton triangle vers le bas est 3, X ou tabulation."], ["방은 무엇이며 용도는 무엇입니까?", "방은 메뉴의 첫 번째 버튼이며 사용자는 정보, 썸네일, 진동기, 오디오 텍스트, 안경, 거인, 검정색 배경, 표지판, 점자 및 미국식을 선택하고 액세스할 수 있는 여러 리소스가 있습니다.", "이 9개의 각 버튼을 통해 팀의 리소스를 조정하여 가능한 한 정보에 액세스하고 사용자에게 도달할 수 있습니다."], ['스타일 블라블라블라블라블라블라', 'abece 1', 'abece 2'], ['설정'], ['활동']]
];
*/

//trabajar de la mano con g00VARS[11][2]::LÍNEA(S)DeLectura:0TodasLasLíneas,1Texto,2Morse,3Braille,4Señas,5Tuto
//['1 0:Imagen,1:Icono,2:Texto,3ImagenAlta,4VideoAlto,5Texto+Icono,6Icono+Icono serie
//['5 0:FotoIcono 1:VideoMulti 2:FotoMulti 3:TextoMulti 4:InEntrada 5:OutSalida
//['10 0:Normal sin nada, 1:Deshabilitado o Deseleccionado /slash, 2:Campo Vacio obligatorio ?pregunta, 3:Campo con info o Respuesta _RayaInferior, 4:Campo vacio opcional -GuionMedio 	

//Controlador de ayuda
const mIr008B =/**/[['Recursos/ Casillas..', '1 0:Imag,1:Icon,2:Texto,3ImagenA,4VideoA', '2 id de la Imag, Icon o Texto', '3 onclick function, vacio=NO PERMITIDA(INFO)', '4 Visible 1:SI 0:no', '5 0:FotI 1:Vide 2:FotM 3:Text 4:In 5:Out', '6 id Video([5]1) o id foto([5]0/2)', '7 id Texto Icono', '8 ids Iconos Capa1', '9 ids Iconos Capa2', '10 Capa3 Estado 0: 1:/ 2:_ 3: ? 4: -'],
[1, [6, 2, 2],[51, 32, 42],0,1,[0, 0, 0],[0, 0, 0],[71, 0, 0],[0, 0, 0],[0, 0, 0],[0, 0, 0]],
[2, [6, 0, 1, 1],[72, 8, 72, 72],0,1,[0, 0, 0, 0],[0, 0, 0, 0],[71, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]],
[3, [6, 2, 1],[58, 38, 58],0,1,[0, 0, 0],[0, 0, 0],[71, 0, 0],[0, 0, 0],[0, 0, 0],[0, 0, 0]],
[4, [6, 2, 2],[56, 42, 33],0,0,[0, 0, 0],[0, 0, 0],[71, 0, 0],[0, 0, 0],[0, 0, 0],[0, 0, 0]],
[5, [6, 2, 1],[2, 39, 2],0,0,[0, 0, 0],[0, 0, 0],[71, 0, 0],[0, 0, 0],[0, 0, 0],[0, 0, 0]],
[6, [6],[5],0,0,[0],[0],[71],[0],[0],[0]],
[7, [5],[38],0,0,[0],[0],[71],[0],[0],[0]]
];
/*
const r008B =[['Recursos/ Casillas..', 1, 2, 3, 4, 5, 6, 7],
['1 0:Imag,1:Icon,2:Texto,3Image,4Vid,5TI,6II', [6, 2, 2], [6, 0, 1, 1], [6, 2, 1], [6, 2, 2], [6, 2, 1], [6], [5]],
['2 id de la Imag, Icon o Texto', [51, 32, 42], [72, 8, 72, 72], [58, 38, 58], [56, 42, 33], [2, 39, 2], [5], [38]],
['3 onclick function, vacio=NO PERMITIDA(INFO)', 0, 0, 0, 0, 0, 0, 0],
['4 Visible 1:SI 0:no', 1, 1, 1, 0, 0, 0, 0],
['5 0:FotI 1:Vide 2:FotM 3:Text 4:In 5:Out', [0, 0, 0], [0, 0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0], [0]],
['6 id Video([5]1) o id foto([5]0/2)', [0, 0, 0], [0, 0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0], [0]],
['7 id Texto Icono (cuando es 5 en 1)', [71, 0, 0], [71, 0, 0, 0], [71, 0, 0], [71, 0, 0], [71, 0, 0], [71], [71]],
['8 ids Iconos Capa1', [0, 0, 0], [0, 0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0], [0]],
['9 ids Iconos Capa2', [0, 0, 0], [0, 0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0], [0]],
['10 Capa3 Estado 0: 1:/ 2:_ 3: ? 4: -', [0, 0, 0], [0, 0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0], [0]]
];
*/

/*texto alternativo para imagen de ayuda*/
const mIr008Z =/**/[['Casillas', 1, 2, 3, 4],
[1, ['What is all this and what is it for?', 'You are on a website, which serves to offer local information to people without or with a certain degree of disability', 'it has accessible elements that facilitate the use and access to information, for example, audio text, signs, text maximum, black background, braille and large buttons'],['letra i con signo de pregunta', 'Estás en un sitio web, que sirve para ofrecer información local a personas sin o con cierto grado de discapacidad', 'cuenta con elementos accesibles que facilitan el uso y acceso a la información, por ejemplo, audio texto, señas, altura máxima, fondo negro, braille y botones grandes'],["C'est quoi tout ça et à quoi ça sert ?", "Vous êtes sur un site Web, qui sert à offrir des informations locales aux personnes sans ou avec un certain degré de handicap", "il a des éléments accessibles qui facilitent l'utilisation et l'accès à l'information, par exemple, texte audio, signes, hauteur maximale, fond noir, braille et gros boutons"],["C'est quoi tout ça et à quoi ça sert ?", "Vous êtes sur un site Web, qui sert à offrir des informations locales aux personnes sans ou avec un certain degré de handicap", "il a des éléments accessibles qui facilitent l'utilisation et l'accès à l'information, par exemple, texte audio, signes, hauteur maximale, fond noir, braille et gros boutons"]],
[2, ['How to navigate?', 'to navigate, in the window there are 6 navigation buttons that go from top to bottom', 'there are 3 buttons on the left side, the square menu button, the diagonal button to cancel or exit and the triangle button up to go up or back', 'and on the right side there are 3 other buttons, the vertical quick information bar button, the round button to accept or enter and the down triangle button to go down or go forward.'],['¿Cómo navegar?', 'para navegar, en la ventana hay 6 botones de navegación que van desde arriba hacia abajo', 'hay 3 botones al lado izquierdo, el botón cuadrado de menú, el botón diagonal para cancelar o salir y el botón de triángulo hacia arriba para subir o retroceder', 'y al lado derecho hay otros 3 botones, el botón barra vertical de información rápida, el botón redondo para aceptar o ingresar y el botón de triángulo hacia abajo para ir abajo o avanzar.'],["Comment naviguer?", "pour naviguer, dans la fenêtre il y a 6 boutons de navigation qui vont de haut en bas", "il y a 3 boutons sur le côté gauche, le bouton menu carré, le bouton diagonal pour annuler ou sortir et le bouton triangle haut pour monter ou dos", "et sur le côté droit il y a 3 autres boutons, le bouton barre d'information rapide verticale, le bouton rond pour accepter ou entrer et le bouton triangle bas pour descendre ou avancer."],["Comment naviguer?", "pour naviguer, dans la fenêtre il y a 6 boutons de navigation qui vont de haut en bas", "il y a 3 boutons sur le côté gauche, le bouton menu carré, le bouton diagonal pour annuler ou sortir et le bouton triangle haut pour monter ou dos", "et sur le côté droit il y a 3 autres boutons, le bouton barre d'information rapide verticale, le bouton rond pour accepter ou entrer et le bouton triangle bas pour descendre ou avancer."]],
[3, ['How to navigate using a physical keyboard?', 'To enable navigation buttons on a physical keyboard turn on caps lock button', 'square button is 7 or N, diagonal button is 4 or M, triangle up button is 1 or comma, the vertical bar button is 9 or V, the round button is 6, C or space, and the down triangle button is 3, X or tab.'],['¿Cómo navegar usando un teclado físico?', 'Para habilitar los botones de navegación en un teclado físico active el botón de bloqueo de mayúsculas', 'el botón cuadrado es el 7 o la N, el botón diagonal es el 4 o la M, el botón de triángulo hacia arriba es el 1 o la coma, el botón barra vertical es el 9 o la V, el botón redondo es el 6, la C o el espacio, y el botón de triángulo hacia abajo es el 3, la X o el tabulador.'],["Comment naviguer à l'aide d'un clavier physique?", "Pour activer les boutons de navigation sur un clavier physique activez le bouton de verrouillage des majuscules", "le bouton carré est 7 ou N, le bouton diagonal est 4 ou M, le bouton triangle vers le haut est 1 ou virgule, le bouton de la barre verticale est 9 ou V, le bouton rond est 6, C ou espace, et le bouton triangle vers le bas est 3, X ou tabulation."],["Comment naviguer à l'aide d'un clavier physique?", "Pour activer les boutons de navigation sur un clavier physique activez le bouton de verrouillage des majuscules", "le bouton carré est 7 ou N, le bouton diagonal est 4 ou M, le bouton triangle vers le haut est 1 ou virgule, le bouton de la barre verticale est 9 ou V, le bouton rond est 6, C ou espace, et le bouton triangle vers le bas est 3, X ou tabulation."]],
[4, ['What is the style and what is it for?', 'the style is the first button of the menu, there the user has 9 styles to select and access the information, minimum text, audio text, maximum text, black background, signs and braille', "Each one of these 9 buttons allow the team's resources to be adapted so that the information is as accessible as possible and reaches the users."],['¿Qué es el estilo y para qué sirve?', 'el estilo es el primer botón del menú, allí el usuario cuenta con 9 estilos para seleccionar y acceder a la información, altura mínima, audio texto, altura máxima, fondo negro, señas y braille ', 'cada uno de estos 9 botones permiten adaptar los recursos del equipo para que la informacíon sea lo más accesible posible y llegue hasta los usuarios.'],["Quelles sont les ressources et à quoi ça sert?", "le style est le premier bouton du menu, là l\'utilisateur dispose de 9 styles pour sélectionner et accéder aux informations, texte minimum, texte audio, hauteur maximale, fond noir, panneaux, braille et ", "chacun de ces 9 boutons permet d'adapter les ressources de l'équipe pour que l'information soit accessible et parvienne aux utilisateurs."],["Quelles sont les ressources et à quoi ça sert?", "le style est le premier bouton du menu, là l\'utilisateur dispose de 9 styles pour sélectionner et accéder aux informations, texte minimum, texte audio, hauteur maximale, fond noir, panneaux, braille et ", "chacun de ces 9 boutons permet d'adapter les ressources de l'équipe pour que l'information soit accessible et parvienne aux utilisateurs."]],
[5, ['style, blah, blah, blah, blah', 'abece 1', 'abece 2'],['estilo, bla, bla, bla, bla', 'abece 1', 'abece 2'],['style, bla, bla, bla, bla', 'abece 1', 'abece 2'],['style, bla, bla, bla, bla', 'abece 1', 'abece 2']],
[6, ['settings'],['ajustes'],['réglages'],['réglages']],
[7, ['activities'],['actividades'],['activités'],['활동']]
];
/*
const r008Z =[['Casillas', 1, 2, 3, 4, 5, 6, 7],
[1, ['What is all this and what is it for?', 'You are on a website, which serves to offer local information to people without or with a certain degree of disability', 'it has accessible elements that facilitate the use and access to information, for example, audio text, signs, text maximum, black background, braille and large buttons'], ['How to navigate?', 'to navigate, in the window there are 6 navigation buttons that go from top to bottom', 'there are 3 buttons on the left side, the square menu button, the diagonal button to cancel or exit and the triangle button up to go up or back', 'and on the right side there are 3 other buttons, the vertical quick information bar button, the round button to accept or enter and the down triangle button to go down or go forward.'], ['How to navigate using a physical keyboard?', 'To enable navigation buttons on a physical keyboard turn on caps lock button', 'square button is 7 or N, diagonal button is 4 or M, triangle up button is 1 or comma, the vertical bar button is 9 or V, the round button is 6, C or space, and the down triangle button is 3, X or tab.'], ['What is the style and what is it for?', 'the style is the first button of the menu, there the user has 9 styles to select and access the information, minimum text, audio text, maximum text, black background, signs and braille', "Each one of these 9 buttons allow the team's resources to be adapted so that the information is as accessible as possible and reaches the users."], ['style, blah, blah, blah, blah', 'abece 1', 'abece 2'], ['settings'], ['activities']],
[2, ['letra i con signo de pregunta', 'Estás en un sitio web, que sirve para ofrecer información local a personas sin o con cierto grado de discapacidad', 'cuenta con elementos accesibles que facilitan el uso y acceso a la información, por ejemplo, audio texto, señas, altura máxima, fondo negro, braille y botones grandes'], ['¿Cómo navegar?', 'para navegar, en la ventana hay 6 botones de navegación que van desde arriba hacia abajo', 'hay 3 botones al lado izquierdo, el botón cuadrado de menú, el botón diagonal para cancelar o salir y el botón de triángulo hacia arriba para subir o retroceder', 'y al lado derecho hay otros 3 botones, el botón barra vertical de información rápida, el botón redondo para aceptar o ingresar y el botón de triángulo hacia abajo para ir abajo o avanzar.'], ['¿Cómo navegar usando un teclado físico?', 'Para habilitar los botones de navegación en un teclado físico active el botón de bloqueo de mayúsculas', 'el botón cuadrado es el 7 o la N, el botón diagonal es el 4 o la M, el botón de triángulo hacia arriba es el 1 o la coma, el botón barra vertical es el 9 o la V, el botón redondo es el 6, la C o el espacio, y el botón de triángulo hacia abajo es el 3, la X o el tabulador.'], ['¿Qué es el estilo y para qué sirve?', 'el estilo es el primer botón del menú, allí el usuario cuenta con 9 estilos para seleccionar y acceder a la información, altura mínima, audio texto, altura máxima, fondo negro, señas y braille ', 'cada uno de estos 9 botones permiten adaptar los recursos del equipo para que la informacíon sea lo más accesible posible y llegue hasta los usuarios.'], ['estilo, bla, bla, bla, bla', 'abece 1', 'abece 2'], ['ajustes'], ['actividades']],
[3, ["C'est quoi tout ça et à quoi ça sert ?", "Vous êtes sur un site Web, qui sert à offrir des informations locales aux personnes sans ou avec un certain degré de handicap", "il a des éléments accessibles qui facilitent l'utilisation et l'accès à l'information, par exemple, texte audio, signes, hauteur maximale, fond noir, braille et gros boutons"], ["Comment naviguer?", "pour naviguer, dans la fenêtre il y a 6 boutons de navigation qui vont de haut en bas", "il y a 3 boutons sur le côté gauche, le bouton menu carré, le bouton diagonal pour annuler ou sortir et le bouton triangle haut pour monter ou dos", "et sur le côté droit il y a 3 autres boutons, le bouton barre d'information rapide verticale, le bouton rond pour accepter ou entrer et le bouton triangle bas pour descendre ou avancer."], ["Comment naviguer à l'aide d'un clavier physique?", "Pour activer les boutons de navigation sur un clavier physique activez le bouton de verrouillage des majuscules", "le bouton carré est 7 ou N, le bouton diagonal est 4 ou M, le bouton triangle vers le haut est 1 ou virgule, le bouton de la barre verticale est 9 ou V, le bouton rond est 6, C ou espace, et le bouton triangle vers le bas est 3, X ou tabulation."], ["Quelles sont les ressources et à quoi ça sert?", "le style est le premier bouton du menu, là l\'utilisateur dispose de 9 styles pour sélectionner et accéder aux informations, texte minimum, texte audio, hauteur maximale, fond noir, panneaux, braille et ", "chacun de ces 9 boutons permet d'adapter les ressources de l'équipe pour que l'information soit accessible et parvienne aux utilisateurs."], ['style, bla, bla, bla, bla', 'abece 1', 'abece 2'], ['réglages'], ['activités']],
[4, ["C'est quoi tout ça et à quoi ça sert ?", "Vous êtes sur un site Web, qui sert à offrir des informations locales aux personnes sans ou avec un certain degré de handicap", "il a des éléments accessibles qui facilitent l'utilisation et l'accès à l'information, par exemple, texte audio, signes, hauteur maximale, fond noir, braille et gros boutons"], ["Comment naviguer?", "pour naviguer, dans la fenêtre il y a 6 boutons de navigation qui vont de haut en bas", "il y a 3 boutons sur le côté gauche, le bouton menu carré, le bouton diagonal pour annuler ou sortir et le bouton triangle haut pour monter ou dos", "et sur le côté droit il y a 3 autres boutons, le bouton barre d'information rapide verticale, le bouton rond pour accepter ou entrer et le bouton triangle bas pour descendre ou avancer."], ["Comment naviguer à l'aide d'un clavier physique?", "Pour activer les boutons de navigation sur un clavier physique activez le bouton de verrouillage des majuscules", "le bouton carré est 7 ou N, le bouton diagonal est 4 ou M, le bouton triangle vers le haut est 1 ou virgule, le bouton de la barre verticale est 9 ou V, le bouton rond est 6, C ou espace, et le bouton triangle vers le bas est 3, X ou tabulation."], ["Quelles sont les ressources et à quoi ça sert?", "le style est le premier bouton du menu, là l\'utilisateur dispose de 9 styles pour sélectionner et accéder aux informations, texte minimum, texte audio, hauteur maximale, fond noir, panneaux, braille et ", "chacun de ces 9 boutons permet d'adapter les ressources de l'équipe pour que l'information soit accessible et parvienne aux utilisateurs."], ['style, bla, bla, bla, bla', 'abece 1', 'abece 2'], ['réglages'], ['활동']]
];
*/

const mIwModeA =/**/[['Casillas', 1, 2, 3, 4],
[1, 'mode 1: to see everything smaller','modo 1: para ver todo más pequeño','mode 1: pour tout voir plus petit','모드 1: 모든 것을 더 작게 보려면'],
[2, 'mode 2: to receive vibrations of dots and dashes','modo 2: para recibir vibraciones de puntos y rayas','mode 2: pour recevoir des vibrations de points et de tirets','모드 2: 도트 및 대시 진동을 수신하려면'],
[3, 'mode 3: for large print','modo 3: para letra grande','mode 3: pour les gros caractères','모드 3: 큰 활자용'],
[4, 'mode 4: to see everything bigger','modo 4: para ver todo más grande','mode 4: pour tout voir en plus grand','모드 4: 전체를 더 크게 보려면'],
[5, 'mode 5: to see the text in yellow','modo 5: para ver el texto en color amarillo','mode 5: pour voir le texte en jaune','모드 5: 텍스트를 노란색으로 보려면'],
[6, 'mode 6: To see the interpreter and disable the audio','modo 6: para ver el intérprete y deshabilitar el audio','mode 6: Pour voir l\'interprète et désactiver l\'audio','모드 6: 통역사를 보고 오디오를 비활성화하려면'],
[7, 'mode 7: to display braille','modo 7: para mostrar el braille','mode 7: pour afficher le braille','모드 7: 점자 표시'],
[8, 'count, change','cuenta, cambiar','compte, changer','경쟁, 변화']
];
/*
const wModeA =[['Casillas', 1, 2, 3, 4, 5, 6, 7, 8],
[1, 'mode 1: to see everything smaller', 'mode 2: to receive vibrations of dots and dashes', 'mode 3: for large print', 'mode 4: to see everything bigger', 'mode 5: to see the text in yellow', 'mode 6: To see the interpreter and disable the audio', 'mode 7: to display braille', 'count, change'],
[2, 'modo 1: para ver todo más pequeño', 'modo 2: para recibir vibraciones de puntos y rayas', 'modo 3: para letra grande', 'modo 4: para ver todo más grande', 'modo 5: para ver el texto en color amarillo', 'modo 6: para ver el intérprete y deshabilitar el audio', 'modo 7: para mostrar el braille', 'cuenta, cambiar'],
[3, 'mode 1: pour tout voir plus petit', 'mode 2: pour recevoir des vibrations de points et de tirets', 'mode 3: pour les gros caractères', 'mode 4: pour tout voir en plus grand', 'mode 5: pour voir le texte en jaune', 'mode 6: Pour voir l\'interprète et désactiver l\'audio', 'mode 7: pour afficher le braille', 'compte, changer'],
[4, '모드 1: 모든 것을 더 작게 보려면', '모드 2: 도트 및 대시 진동을 수신하려면', '모드 3: 큰 활자용', '모드 4: 전체를 더 크게 보려면', '모드 5: 텍스트를 노란색으로 보려면', '모드 6: 통역사를 보고 오디오를 비활성화하려면', '모드 7: 점자 표시', '경쟁, 변화']
];
*/

///Final traidos desde _


//Estas no tienen mI...  verificar si algo las llama y reubicarlas arriba junto con las otras:
//Glosa de kTapaI:
//ojo debe ser de solo glosas hay que arreglar a kTapaI para que sea de solo texto quitar valores numericos de las columnas [2] y [4] ya que cuando no hay glosa manual debe quedar un 0 para que lo deletree en señas
const kTapaITG = [['0senias', 'h', 'LIBRE', 3, 'LIBRE', 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
['1UNIVER', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
['2LSC', 0, 0, 0, 0, 'cambiar', 0, 0, 0, 0, 'arriba', 'abajo', 0, 0, 0, 0, 0, 0, 0, 0, 0],
['3ASL', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

//QUITAR?? sin uso idea lista de señas que intervienen, cuando son varias van entre []
const kTapaC = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, [41, 38, 14, 38, 23, 34, 93, 22, 24, 18, 34, 47, 38, 17, 47], [41, 38, 14, 38, 23, 34, 93, 38, 15, 6, 34, 47, 38, 17, 47], 0, 0, 0, 0, 0, 0, 0, 0],
[3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

//QUITAR?? sin uso idea lista de glosas que intervienen, cuando son varias van entre []
const kTapaD = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
[1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
[2, 1, 2, 3, 4, 5, 6, 7, 8, 9, ['L', 'Í', 'M', 'I', 'T', 'E', ' ', 'S', 'U', 'P', 'E', 'R', 'I', 'O', 'R'], ['L', 'Í', 'M', 'I', 'T', 'E', ' ', 'I', 'N', 'F', 'E', 'R', 'I', 'O', 'R'], 12, 13, 14, 15, 16, 17, 18, 19],
[3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
[4, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
];


































//============================================================
// CONSTANTES COMPARTIDAS CON EL SERVIDOR Y EL NAVEGADOR

/*
NOTA: PARA OBTENER ESTAS CONSTANTES SE HACE USO DE LAS FUNCIONES f0128() A LA f0137(), 
estas funciones están ocultas arriba para activarlas hay que ctivar el interruptor 1 y desactivar el interruptor 2

para activar/desactivar separe/una (con un espacio) el último * de la barra inclinada / , ejemplo * /
*/

//INTERRUPTOR PARA COMPARTIR las constantes ext y el resultado de vPAPA1, vPAPA2 ... vPAPA10 con el navegador











//2
// ext rutas vPAPA#
/* inicio interruptor 2 no incluye f0128 a f0137*/
const ext = 5;//desde la columna 3 wPapax[x][3,4,5- ene extras] casillas que se corren los strings por casillas especiales/extras en wPapax, en este momento se crearon 5 casillas extra para alimentar la presentación AV


const vPAPA0 = [
	[1, 1, 0, 10, 5, 5, 96, 5, 'entire territory', 'todo el territorio', 'territoire entier', '전체 영토']
]

//const vPAPA1 = [['0-Id:hijo', 1-id:list, '2-Id:padre', '3-Id:color marco', '4:Id:logo(pres AV)', '5-Id:Imagen', '6-Id:Mapa/Foto boton lugar', '7-ID:QR CODE', '8-En ingles(lista ordenada)', '9-Español', '10-frances', '11-coreano'],
const vPAPA1 = [
//  1  2  3   4  5  6   7  8                   9                     10                   11
[1, 1, 0, 10, 5, 5, 96, 5, 'entire territory', 'todo el territorio', 'territoire entier', '전체 영토'],
[8, 1, 0, 8, 20, 5, 20, 5, 'Africa', 'África', 'Afrique', '아프리카'],//1 ->8
[2, 2, 0, 7, 26, 5, 26, 5, 'Antarctica', 'Antártica', 'Antarctique', '남극 대륙'],
[3, 3, 0, 6, 22, 5, 22, 5, 'Asia', 'Asia', 'Asie', '아시아'],
[4, 4, 0, 2, 23, 5, 23, 5, 'Europe', 'Europa', "L'Europe", '유럽'],
[5, 5, 0, 3, 24, 5, 24, 5, 'North America', 'Norte América', 'Amérique du Nord', '북아메리카'],
[6, 6, 0, 4, 21, 5, 21, 5, 'Oceania', 'Oceanía', 'Océanie', '오세아니아'],
[7, 7, 0, 5, 25, 5, 25, 5, 'South America', 'Sur América', 'Amérique du Sud', '남아메리카']
]

/*
const vPAPA1 = [['2-id:key strings app', 0, '4-Vacio', '5-Id color marco', '6-id logo', '7-idImagen', '8-idMapa', '9-ID QR CODE', '0-En ingles(lista ordenada)', '5/10-Español', '6/11-frances', '7/12-coreano'],
[1, 1, 0, 10, 5, 5, 20, 5, 'Africa', 'África', 'Afrique', '아프리카'],
[2, 2, 0, 10, 5, 5, 26, 5, 'Antarctica', 'Antártica', 'Antarctique', '남극 대륙'],
[3, 3, 0, 10, 5, 5, 22, 5, 'Asia', 'Asia', 'Asie', '아시아'],
[4, 4, 0, 10, 5, 5, 23, 5, 'Europe', 'Europa', "L'Europe", '유럽'],
[5, 5, 0, 10, 5, 5, 24, 5, 'North America', 'Norte América', 'Amérique du Nord', '북아메리카'],
[6, 6, 0, 10, 5, 5, 21, 5, 'Oceania', 'Oceanía', 'Océanie', '오세아니아'],
[7, 7, 0, 10, 5, 5, 25, 5, 'South America', 'Sur América', 'Amérique du Sud', '남아메리카']
]
*/

const vPAPA2 = [['2-id:key strings app', 0, '4-IdPapa1', '5-Id color marco', '6-id logo', '7-idImagen', '8-idMapa', '9-ID QR CODE', '0-En ingles(lista ordenada)', '5/10-Español', '6/11-frances', '7/12-coreano'],
//  1  2  3   4  5  6   7  8 
[7, 1, 7, 6, 61, 5, 27, 5, 'Argentina', 'Argentina', 'Argentine', '아르헨티나'],
[10, 2, 6, 6, 62, 5, 29, 5, 'Australia', 'Australia', 'Australie', '호주'],
[11, 3, 7, 9, 63, 5, 30, 5, 'Colombia', 'Colombia', 'Colombie', '콜롬비아'],//1 ->11
[8, 4, 8, 4, 64, 5, 31, 5, 'Equatorial Guinea', 'Guinea Ecuatorial', 'Guinée équatoriale', '적도 기니'],
[6, 5, 4, 6, 65, 5, 32, 5, 'France', 'Francia', 'France', '프랑스'],
[4, 6, 5, 4, 66, 5, 33, 5, 'Mexico', 'México', 'Mexique', '멕시코'],
[5, 7, 3, 6, 67, 5, 34, 5, 'South Korea', 'Corea del Sur', 'Corée du Sud', '대한민국'],
[3, 8, 4, 3, 68, 5, 35, 5, 'Spain', 'España', 'Espagne', '스페인'],
[9, 9, 2, 6, 69, 5, 42, 5, 'Trinidad Peninsula', 'Península Trinidad', 'Péninsule de Trinidad', '트리니다드 반도'],
[2, 10, 5, 6, 70, 5, 37, 5, 'United States of America', 'Estados Unidos de América', "les états-unis d'Amérique", '아메리카 합중국']
]

const vPAPA3 = [['2-id:key strings app', 0, '4-IdPapa2', '5-Id color marco', '6-id logo', '7-idImagen', '8-idMapa', '9-ID QR CODE', '0-En ingles(lista ordenada)', '5/10-Español', '6/11-frances', '7/12-coreano'],
[7, 1, 3, 4, 71, 5, 38, 5, 'Andalusia', 'Andalucía', 'Andalousie', '안달루시아'],
[3, 2, 11, 4, 72, 5, 39, 5, 'Antioquia', 'Antioquia', 'Antioche', '남극 대륙'],
[8, 3, 11, 9, 73, 5, 28, 5, 'Bogota', 'Bogotá', 'Bogota', '보고타'],
[4, 4, 11, 4, 74, 5, 40, 5, 'Boyaca', 'Boyacá', 'Boyaca', '보야카'],
[9, 5, 11, 3, 75, 5, 41, 5, 'Cundinamarca', 'Cundinamarca', 'Cundinamarca', '쿤디나마르카'],//1 ->9
[5, 6, 9, 6, 76, 5, 36, 5, 'Hope Bay', 'Bahía Esperanza', "Baie de l'Espoir", '호프 베이'],
[6, 7, 3, 9, 77, 5, 43, 5, "Madrid's community", 'Comunidad de Madrid', 'La communauté de Madrid', '마드리드의 커뮤니티'],
[2, 8, 11, 12, 78, 5, 44, 5, 'Narino', 'Nariño', 'Nariño', '나리노']
]

const vPAPA4 = [['2-id:key strings app', 0, '4-IdPapa3', '5-Id color marco', '6-id logo', '7-idImagen', '8-idMapa', '9-ID QR CODE', '0-En ingles(lista ordenada)', '5/10-Español', '6/11-frances', '7/12-coreano'],
[2, 1, 8,  9, 45, 5, 45, 5, 'location Chapinero', 'localidad Chapinero', 'localité Chapinero', '위치 차피네로'],
[3, 2, 8,  9, 46, 5, 46, 5, 'location Kenedy', 'localidad Kenedy', 'localité Kenedy', '위치 케네디'],
[4, 3, 8,  3, 47, 5, 47, 5, 'location Puente Aranda', 'localidad Puente Aranda', 'localité Puente Aranda', '위치 푸엔테 아란다'],
[5, 4, 8,  9, 48, 5, 48, 5, 'location Usaquen', 'localidad Usaquén', 'localité Usaquén', '위치 우사켄'],
[6, 5, 6,  9, 49, 5, 49, 5, 'Madrid', 'Madrid', 'Madrid', '커뮤니티'],
[7, 6, 3,  4, 50, 5, 50, 5, 'Medellin', 'Medellín', 'Medellín', '메델린'],
[8, 7, 2, 12, 51, 5, 51, 5, 'Pasto', 'Pasto', 'Pasto', '파스토']
]

const vPAPA5 = [['2-id:key strings app', 0, '4-IdPapa4', '5-Id color marco', '6-id logo', '7-idImagen', '8-idMapa', '9-ID QR CODE', '0-En ingles(lista ordenada)', '5/10-Español', '6/11-frances', '7/12-coreano'],
[8, 1, 2, 3, 52, 5, 52, 5, 'Catalonia neighborhood', 'barrio Cataluña', 'quartier Catalogne', '카탈로니아 인근'],//1 ->8
[2, 2, 2, 3, 53, 5, 53, 5, 'Central Chapinero neighborhood', 'barrio Chapinero Central', 'quartier Central de Chapinero', '중앙 차피네로 지역'],
[3, 3, 2, 3, 54, 5, 54, 5, 'North Chapinero neighborhood', 'barrio Chapinero Norte', 'quartier Nord de Chapinero', '노스 차피네로 인근'],
[4, 4, 2, 3, 55, 5, 55, 5, 'Marly neighborhood', 'barrio Marly', 'quartier Marneux', '말리 동네'],
[7, 5, 2, 3, 56, 5, 56, 5, 'Porciuncula neighborhood', 'barrio Porciúncula', 'quartier Porciuncula', '포르시운쿨라 인근'],
[6, 6, 2, 3, 57, 5, 57, 5, 'Quinta Camacho neighborhood', 'barrio Quinta Camacho', 'quartier Quinta Camacho', '퀸타 카마초 인근'],
[5, 7, 2, 3, 58, 5, 58, 5, 'Sucre neighborhood', 'barrio Sucre', 'quartier Sucré', '수크레 동네']
]

const vPAPA6 = [['2-id:key strings app', 0, '4-IdPapa5', '5-Id color marco', '6-id logo', '7-idImagen', '8-idMapa', '9-ID QR CODE', '0-En ingles(lista ordenada)', '5/10-Español', '6/11-frances', '7/12-coreano'],
[]
]

const vPAPA7 = [['2-id:key strings app', 0, '4-IdPapa6', '5-Id color marco', '6-id logo', '7-idImagen', '8-idMapa', '9-ID QR CODE', '0-En ingles(lista ordenada)', '5/10-Español', '6/11-frances', '7/12-coreano'],
[]
]

const vPAPA8 = [['2-id:key strings app', 0, '4-IdPapa7', '5-Id color marco', '6-id logo', '7-idImagen', '8-idMapa', '9-ID QR CODE', '0-En ingles(lista ordenada)', '5/10-Español', '6/11-frances', '7/12-coreano'],
[]
]

const vPAPA9 = [['2-id:key strings app', 0, '4-IdPapa8', '5-Id color marco', '6-id logo', '7-idImagen', '8-idMapa', '9-ID QR CODE', '0-En ingles(lista ordenada)', '5/10-Español', '6/11-frances', '7/12-coreano'],
[]
]

const vPAPA10 = [['2-id:key strings app', 0, '4-IdPapa9', '5-Id color marco', '6-id logo', '7-idImagen', '8-idMapa', '9-ID QR CODE', '0-En ingles(lista ordenada)', '5/10-Español', '6/11-frances', '7/12-coreano'],
[]
]

  const rutas = ['/2/1', '/2/9/1', '/2/9/5', '/3/1', '/3/5', '/4/1', '/4/3/1', '/4/3/6/1', '/4/3/6/6', '/4/3/7', '/4/6', '/5/1', '/5/2', '/5/4', '/6/1', '/6/10', '/7/1', '/7/7', '/7/11/1', '/7/11/2/1', '/7/11/2/8', '/7/11/3/1', '/7/11/3/7', '/7/11/4', '/7/11/8/1', '/7/11/8/2/1', '/7/11/8/2/2', '/7/11/8/2/3', '/7/11/8/2/4', '/7/11/8/2/5', '/7/11/8/2/6', '/7/11/8/2/7', '/7/11/8/2/8', '/7/11/8/3', '/7/11/8/4', '/7/11/8/5', '/7/11/9', '/8/1', '/8/8'];
//const rutas = ['/7/7', '/6/10', '/1/8', '/4/6', '/5/4', '/3/5', '/5/2', '/4/3/7', '/7/1/4', '/7/1/1', '/2/9/5', '/7/1/8/3', '/7/1/8/4', '/7/1/8/5', '/4/3/6/6', '/7/1/3/7', '/7/1/2/8', '/7/1/8/2/1', '/7/1/8/2/2', '/7/1/8/2/3', '/7/1/8/2/4', '/7/1/8/2/7', '/7/1/8/2/6', '/7/1/8/2/5'];
/*  fin interruptor 2 no incluye f0128 a f0137*/
















//============================================================
//d0 VARIABLES Y CONSTANTES SENCILLAS

var aafil = 8000;//Tiempo en milisegundo que demora el cambio del texto en la presentacion AV 		
const aaini 		/**/ = 500;//Sugerido 500 (4mins apróx) :: 115(1min apróx) - 230(2mins apróx) - 345(3mins apróx) - 500(4mins apróx) Cantidad de pulsos que deben superarse para inicar el modo presentación AV sug 500 (4min)
var aasen		/**/ = 600;//sugerido 600  milisegundos para el cambio de señaS
var accion 		/**/ = 0;//Ocurrio un evento 0NO /1SI
var ambi 		/**/ = 5;//variable memoria de ambiente, inicia en 5 de ENTRADA ACCESIBLE, ambi debe ir cambiando/actualizarse dependiendo del modo/frondend actual
//var 	ambi1 		/**/= 0;//Primer frontend en Pantalla (0:NO - 1:SI)
//var 	ambi2 			= '';//variable memoria HTML del ambiente 2
//var 	ambi3 			= '';//variable memoria HTML del ambiente 3
//var 	ambi4			= '';//variable memoria HTML del ambiente 4
//var 	ambi5 			= '';//variable memoria HTML del ambiente 5
var aMBi 		/**/ = 0;//pasado de ambi
const app 		/**/ = 'iinfo';//'i' R nombre de la app, "feed your mind" "alimenta tu mente" nombre de la fundación infozone / infoline / infoteam
//const   aPulPre			= 50;//50 Cantidad de pulsos que deben superarse para cambiar el anuncio
var bMin = 0;//Marca de agua por ventana minimizada 1:Activa
var bMors = 1;//Esta bandera bMors activada sirve para que no se repita el calculo de las constantes de tiempo Morse sino una vez cada vez que a g00VARS[48][2] se le asigne un valor NUEVO o DIFERENTE del anterior
var bNoSo = 0;//Bandera de No Sonido, se activa cuando hay click sobre la barrera e indirectamente se activa onFocus
//var     bPro            = [0,0];//Banderas de progreso local , ingles , orden de pasar al siguiente anuncio
var bus = 0;//Id buscado en kTapa0
var camVio      /**/ = 0;//Bandera con Orden de detener las vibraciones morse
const canVibrate 	/**/ = window.navigator;//https://stackoverflow.com/questions/56926591/navigator-vibrate-break-the-code-on-ios-browsers
const canTts 		/**/ = window.speechSynthesis;//(tts= text to speech) tts es el nombre asignado al 'objeto' que 'habla' y es parte de la ventana window
var casi;//casilla que contiene la imagen y la glosa de la seña que se va a animar
const centro 		/**/ = [];//vacio o true para mostrar el div en el top de la pantalla {	behavior: 'auto', block: 'center'};//https://stackoverflow.com/questions/8922107/javascript-scrollintoview-middle-alignment  https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
var colBra1		/**/;//Coleccion de todos los cBra1
var colBrai		/**/;//Coleccion de todos los cBrai
var colLife7	/**/;//Coleccion de todos los cLifes SEÑAS EN CARRUSEL de ruta
var colPros3	/**/;//Coleccion de todas las cPros PROSAS de ruta
//var 	colTxtL			;//Prueba - - Coleccion de todas los zTxtL TEXTOS LOCALES de la ruta
var contPre = [0, 0];//Control de la presentación AV o cambio de cada titular off[0=0] NO hay cambio o on[0=1] en on es decir SI va a ver cambio de titular y la cantidad de titulares de la presentación AV que van se almacena en [1]  - - Contador acumulado de los Pulsos QUE lleva de duración cada anuncio [1] de la presentación AV
const conteo 		/**/ = [aaini, 1, 0];//[0]Contador acumulado de los Pulsos del punto desde que no hay actividad, [1]contador on/off, [0]iniciar tablón desde el menú off/on 
var copia0 		/**/ = 0;//Aid seña actual - 1A- Actualizar el id de la seña actual
var copia1 		/**/ = 2;//Bcapacidad de repeticiones de A 1B- Actualzar la capacidad de repeticiones de la seña actual
var copia2 		/**/ = 0;//Cid seña anterior
var copia3 		/**/ = 1;//Drepetición actual de A o anterior de C
var deltAV = (Math.min(window.outerHeight, window.outerWidth) * 0.065);//6.5%
var dExt = [0, '', '', '', ''];//Datos Extra del sitio local [1IdColor,,,,] el número de casillas debe ser igual a ext
var fiLa = [0, 0];//Control de filas que pasan por la marquesina Local[0] Ingles[1]
var ff; 		//variable para el cambio de fila en los lugares
var flip 		/**/ = 0;//Cambio estado pulsos "lentos"
var focBan		/**/ = 0;//Bandera de onfocus
var focCon 		/**/ = 0;//Contador desborde de onfocus
var focCsE		/**/ = 0;//Contador de Segundos de Espera on focus
var focMem 		/**/ = 0;//Memoria del contador desborde de onfocus
var funsi 		/**/ = '';//Parte 1 del mensaje por consola...
var gFoco		/**/ = 1;//Localización del cursor/foco, número de la casilla dentro de la ruta (gRuta)......
var gFoCo		/**/ = 0;//Pasado de gFoco
var gMemF = 1;//memorizar el Foco principal temporalmente mientras pivota, por ejemplo las rutas de ajustes
var gMemR = 3;//memorizar la Ruta principal temporalmente mientras pivota, por ejemplo las rutas de ajustes
var go;			//Variable para indicar o controlar si una ruta cumple con cierta condición
var gRuta		/**/ = 3;//7 to 3; se toman de g02RUTA: 1Modo, 2Configuración, 3Libro comunitario, 7ACCESO etc......
var gRuTa		/**/ = 0;//Pasado de gRuTa
var hAs	= false;//Se pone True si el Hash, o Fragmento de la URL, se esta actualizando (isHashUpdating)
var hFila;//alto de una fila de la marquesina
var hid = 10;//Sitio con información oculta [2-9]	
var ii = [0, 0, 0];//Contadores de los indicadores para asignarles colores 0:gris  1:azul 2:naranja 3:violeta 4:verde 5-6-7-8-9:amarillo +10:blanco
var ini1 = true;//Activa la marquesina local
var ini2 = true;//Activa la marquesina en ingles
var iniR = 1;//Activar la ruta inicial
var intBan		/**/ = 0;//1:Bandera con interprete /0:Sin interprete
//const 	kDoc		/**/= document.documentElement;//documento HTML
//      --l
const kEY = { KCAP: 20, K1: 49, N1: 188, K3: 51, N3: 88, K4: 52, N4: 77, K5:53, K6: 54, N6: 67, K7: 55, N7: 78, K9: 57, N9: 86, K0: 48, N0: 66, KBAC: 8, K11: 97, K22: 98, K33: 99, K44: 100, K55: 101, K66: 102, K77: 103, K88: 104, K99: 105, K00: 96, KTAB: 9, KESP: 32 }//PRE?GUN¿,KTAB:9,KENT:13,KESP:32};
//const kEY = { KCAP: 20, K1: 49, N1: 188, K3: 51, N3: 88, K4: 52, N4: 77, K6: 54, N6: 67, K7: 55, N7: 78, K9: 57, N9: 86, K0: 48, N0: 66, KBAC: 8, K11: 97, K22: 98, K33: 99, K44: 100, K55: 101, K66: 102, K77: 103, K88: 104, K99: 105, K00: 96, KTAB: 9, KESP: 32 }//PRE?GUN¿,KTAB:9,KENT:13,KESP:32};
var kmar		/**/ = 0.1;//constante de velocidad de la marquesina
var loC = '';//Ruta actual de location valida
var luZ = ['', ''];//String del color de la luz - tinte[0] - temperatura[1]
var MaMi = 1;//Bandera para verificar si maxi o mini: 1:Bandera activada
var marquee		/**/;//Coleccion de todas las marquee
var marquei		/**/;//Coleccion de todas las marquei en Ingles
var maX 		/**/ = false;//estado actual de la pantalla max/min
var mAX 		/**/ = false;//pasado de la variable maX
var memAnt = 0;//Recuerda el id del anuncio previo
const miliH		/**/ = 6000;//3000 o 5300 milisegundos que dura cada intermitencia de la mano (Hand) click
const miliS		/**/ = 500;//300 o 1000 milisegundos que dura cada intermitencia de un ciclo
var mRuta;//ALMACENAR HTML de lLINES, usarlo para recuperar el código si luego regresa a la misma ruta
var naSenia;//nombre achivo imagen seña
var naBD = 0;//1 Numero anterior de la consulta a la base de datos, debe iniciar en uno
var ncBD = 0;//Numero de consultas a la base de datos
var nFila = [0, 0, 1, 100, 1, 1];//número de filas la marquesina local[0], en ingles[1], capacidad de filas de la marquesina [2], ancho de la marquesina en pixeles[3], capacidad promedio de letras de cada fila de la marquesina [4] y Capacidad teorica de la marquesina para mostrar letras [5], entre más letras necesita más tiempo para cada cambio de texto
//var 	nmarqe			= 0;//Número de veces que ha pasado la marquesina local
var nmarqi = 0;//Número de veces que ha pasado la marquesina internacional
var nruta;//quita el # ajusta el string ruta y se vuelve array
var nUm;//Variable del estado de la luz
var orig = ['', ''];//String original del ingles[0] ASL[1]
var papas = [7, 1, 8, 2, 1, 0, 0, 0, 0, 0, ''];//[7, 11, 8, 2, 8, 0, 0, 0, 0, 0, ''](ruta errada es 7,11,8,2,8,0,0,0... )7,1,8,2,1,0,0,0,0,0,''//7,1,8,4,0,0,0,0,0,0,'' Arreglo con la ruta actualizada activa de todos los padres: wPapa1[0] wPapa2[1] wPapa3[2] wPapa4[3] wPapa5[4] wPapa6[5] wPapa7[6] wPapa8[7] wPapa9[8] wPapa10[9] ; [10]almacena la última casilla antes del primer cero que encuentre (fin de la ruta) y [11] el string de la ruta
//var 	papas			= [7,1,8,2,2,0,0,0,0,0,0,''];//7,1,1,1,2,5,2,4,2,2,0 Arreglo con la ruta actualizada activa de todos los padres: wPapa1[0] wPapa2[1] wPapa3[2] wPapa4[3] wPapa5[4] wPapa6[5] wPapa7[6] wPapa8[7] wPapa9[8] wPapa10[9] ; [10]almacena la última casilla antes del primer cero que encuentre (fin de la ruta) y [11] el string de la ruta
var papas0 = [];//array limpio de papas y sin ceros. [7]
var papas1 = [];//array de lo que falta a papas para completar la ruta sugerida [empty, 11, 8, 2, 8]
var paSpas = [7, 1, 8, 2, 1, 0, 0, 0, 0, 0, ''];//Pasado de papas, debe guardar el último registro de papas antes de un cambio del mismo
//var 	per				= [1,1,1,1,1,1,1,1,1,1,1];//Permisos de los sitios (papas) 1:ON 0:OFF(por mostrar carteleras)
var progresi;//la mitad del ancho del body que debe recorrer la marquesina en ingles, controla el avance de la marquesina en ingles		
var progreso;//la mitad del ancho del body que debe recorrer la marquesina local, no cambia porque se usa para cambiar los anuncios	
var progress;//la mitad del ancho del body que debe recorrer la marquesina local, controla el avance de la marquesina local		
const reGis = 0;//Mostrar registros[1] o no[0] por consola
var roto 		/**/ = 0;//1:Cancelar orden reciente de focus sobre un punto - 0:Permitir focus	
var rumba = '';//Pasado de rumbi en el navegador
var rumbo = [];//Array con el nuevo rumbo que asigna el usuario desde el navegador ['7', '11', '8', '2', '8']
var rumbi = '';//String de rumbo unida con i'es para hacer consultas a la BD '7i11i8i2i8'
var rUtA ;	//Guarda el texto del Hash actual de la URL con window.location.hash '#/7/11/8/2/8'
var sale = '';//texto original con espacios en el display de la interfaz M
var salo = '';//texto modificado de sale para mostrarlo con espacios de color
var salTO = 1;//Tamaño del salto					
var sizBan		/**/ = 0;//Bandera de resize
var sizCon 		/**/ = 0;//Contador desborde de resize
var sizCsE		/**/ = 0;//Contador de Segundos de Espera
var sizMem 		/**/ = 0;//Memoria del contador desborde de resize
var sonCap		/**/ = 1;//1:Bandera sonar click cuando se activa capslok
var speed 		/**/ = 1;//Velocidad del reproductor
var tamYT		/**/;//ALTO DE LA VENTANA sin barra //= [0,0];//[ALTO DE LA VENTANA sin barra, ALTO DE LA VENTANA disponible con barra]
var tics 		/**/ = 0;//CONTADOR de pulsos "rápidos"
var traer = ['', ''];//almacena la traduccion 1i del idioma[0] o la seña[1]
var v02			/**/ = '';//variable global de v2 en f0012() html parcial 
var v03			/**/ = '';//variable global de v3 en f0012() html acumulado
var vFocoI		/**/ = '';//Guíon de la casilla actual FOCO en Ingles - DEBE ACTUALIZARSE CADA VEZ QUE EL USUARIO CAMBIE DE BOTON/HOJA DENTRO DE UNA RUTA, ES CLAVE PARA TENER LISTO EL GUION DE TAPA INFORMATIVA [BOTON 9]
var vFocoIz		/**/ = '';//Guíon de la casilla actual FOCO en Ingles - DEBE ACTUALIZARSE CADA VEZ QUE EL USUARIO CAMBIE DE BOTON/HOJA DENTRO DE UNA RUTA, ES CLAVE PARA TENER LISTO EL GUION DE TAPA INFORMATIVA [BOTON 9]
var vFocoIe		/**/ = '';//Guíon extra de la casilla actual FOCO en Ingles - DEBE ACTUALIZARSE CADA VEZ QUE EL USUARIO CAMBIE DE BOTON/HOJA DENTRO DE UNA RUTA, ES CLAVE PARA TENER LISTO EL GUION DE TAPA INFORMATIVA [BOTON 9]
var vFocoL		/**/ = '';//Guíon de la casilla actual FOCO en lengua Local - DEBE ACTUALIZARSE CADA VEZ QUE EL USUARIO CAMBIE DE BOTON/HOJA DENTRO DE UNA RUTA, ES CLAVE PARA TENER LISTO EL GUION DE TAPA INFORMATIVA [BOTON 9]
var vFocoLz		/**/ = '';//Guíon de la casilla actual FOCO en lengua Local - DEBE ACTUALIZARSE CADA VEZ QUE EL USUARIO CAMBIE DE BOTON/HOJA DENTRO DE UNA RUTA, ES CLAVE PARA TENER LISTO EL GUION DE TAPA INFORMATIVA [BOTON 9]
var vFocoLe		/**/ = '';//Guíon extra de la casilla actual FOCO en lengua Local - DEBE ACTUALIZARSE CADA VEZ QUE EL USUARIO CAMBIE DE BOTON/HOJA DENTRO DE UNA RUTA, ES CLAVE PARA TENER LISTO EL GUION DE TAPA INFORMATIVA [BOTON 9]
var vFocoT		/**/ = '';//Guíon de la casilla actual FOCO en Ingles para la TAPA, siempre se debe EXISTIR así vFocoI este vacio - DEBE ACTUALIZARSE CADA VEZ QUE EL USUARIO CAMBIE DE BOTON/HOJA DENTRO DE UNA RUTA, ES CLAVE PARA TENER LISTO EL GUION DE TAPA INFORMATIVA [BOTON 9]
var vFocoTz		/**/ = '';//Guíon de la casilla actual FOCO en Ingles para la TAPA, siempre se debe EXISTIR así vFocoI este vacio - DEBE ACTUALIZARSE CADA VEZ QUE EL USUARIO CAMBIE DE BOTON/HOJA DENTRO DE UNA RUTA, ES CLAVE PARA TENER LISTO EL GUION DE TAPA INFORMATIVA [BOTON 9]
var vis3;//Copia del arreglo de las casillas visibles de los anuncios comunitarios				
var voices		/**/ = [];//Variable que consigue las voces que esten disponibles
var vHtml2		/**/;//variable auxiliar y global de v2
var visON		/**/ = '';//		--STRING con las casillas visibles, entre "arriba" y "abajo", visON almacena un arreglo con SOLO los valores de las casillas que SON VISIBLES más las casillas "arriba" y "abajo"
var visOK		/**/ = [];//ARREGLO con las casillas visibles, entre limite superior e inferior
var vMul		/**/ = 0;//Variable de ruta que indica si al menos un elemento es multi
var vSub  		/**/;//Variable de Glosa MAYUSCULA o texto subtitulo de la seña
var wIDI = [];//Array hijo, se construye desde el array padre wIdi pero solo contiene todos sus elementos visibles (wIdi[x][5]=1  Estado:Visible1)
var wPAPA0 = [[1, 1, 0, 10, 5, 5, 96, 5, 'ing', 'esp', 'fra', 'kor']];//array lugar actual seleccionado
var wPAPA1 = [];//Array hijo, se construye desde el array padre wPapa1 pero solo contiene todos sus elementos visibles
var wPAPA2 = [];//Array hijo, se construye desde el array padre wPapa2 pero solo contiene todos sus elementos visibles
var wPAPA3 = [];//Array hijo, se construye desde el array padre wPapa3 pero solo contiene todos sus elementos visibles
var wPAPA4 = [];//Array hijo, se construye desde el array padre wPapa4 pero solo contiene todos sus elementos visibles
var wPAPA5 = [];//Array hijo, se construye desde el array padre wPapa5 pero solo contiene todos sus elementos visibles
var wPAPA6 = [];//Array hijo, se construye desde el array padre wPapa6 pero solo contiene todos sus elementos visibles
var wPAPA7 = [];//Array hijo, se construye desde el array padre wPapa7 pero solo contiene todos sus elementos visibles
var wPAPA8 = [];//Array hijo, se construye desde el array padre wPapa8 pero solo contiene todos sus elementos visibles
var wPAPA9 = [];//Array hijo, se construye desde el array padre wPapa9 pero solo contiene todos sus elementos visibles
var wPAPA10 = [];//Array hijo, se construye desde el array padre wPapa10 pero solo contiene todos sus elementos visibles
var wSIGN = [];//Array hijo, se construye desde el array padre wSign pero solo contiene todos sus elementos visibles (wSign[x][5]=1  Estado:Visible1)
var zTime = [0, 0, 0];//Dia[0] - Hora[1] - minutos[2]






//============================================================
//d1 EXPRESIONES REGULARES





const g00eREG =/**/[[0, 'Expresión Regular', 'FUNCION - Uso'],
[1, /(https?:\/\/|www\.)+[a-zA-Z0-9._-]+\.[a-zA-Z]+/g, 'DETECTA SI EXISTE UN LINK INTERNO - SEÑAS'],
[2, /[a-zA-Z0-9ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç]+/g, 'Todo lo que NO es(son) Caracter(es) Especial(es) - SEÑAS'],
[3, /(https?:\/\/|www\.|@)+[a-zA-Z0-9._-]+\.[a-zA-Z]+/g, 'CADENA ESPECIAL LINK O CORREO QUE NO SE DEBE ROMPER - señas'],
[4, /([A-Za-zÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç]+|[^A-Za-zÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç])/g, 'FRACCIONA LA SUBCADENA:separa los textos de los caracteres especiales sueltos - SEÑAS'],
[5, /[A-Za-zÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç]{2,}/g, 'DETECTA SI EXISTE UNA PALABRA SUELTA (minimo 2 letras) - SEÑAS'],
[6, /([A-ZÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛÑÇ]+|[0-9]+|[^A-ZÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛÑÇ0-9]+)/g, '*** *** uso para pruebas hay que quitarla o remplazarla ***'],
[7, /([A-ZÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛÑÇ]+|[0-9]+|[a-zãàáäâèéëêìíïîòóöôùúüûñç]+|[^A-ZÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛÑÇ0-9a-zãàáäâèéëêìíïîòóöôùúüûñç]+)/g, 'Fracciona cadenas de texto alfanumericas - BRAILLE']
];






//============================================================
//d2 VOCES, ICONOS, VIDEOS E IMAGENES





//VOCES
var tVoces = [[0, 'lang', 'name'],
[1, 'es-MX', 'Paulina'],
[2, 'en-US', 'Alex'],
[3, 'it-IT', 'Alice'],
[4, 'sv-SE', 'Alva'],
[5, 'fr-CA', 'Amelie'],
[6, 'de-DE', 'Anna'],
[7, 'he-IL', 'Carmit'],
[8, 'id-ID', 'Damayanti'],
[9, 'en-GB', 'Daniel'],
[10, 'es-AR', 'Diego'],
[11, 'nl-BE', 'Ellen'],
[12, 'en   ', 'Fiona'],
[13, 'en-US', 'Fred'],
[14, 'ro-RO', 'Ioana'],
[15, 'pt-PT', 'Joana'],
[16, 'es-ES', 'Jorge'],
[17, 'es-MX', 'Juan'],
[18, 'th-TH', 'Kanya'],
[19, 'en-AU', 'Karen'],
[20, 'ja-JP', 'Kyoko'],
[21, 'sk-SK', 'Laura'],
[22, 'hi-IN', 'Lekha'],
[23, 'it-IT', 'Luca'],
[24, 'pt-BR', 'Luciana'],
[25, 'ar-SA', 'Maged'],
[26, 'hu-HU', 'Mariska'],
[27, 'zh-TW', 'Mei-Jia'],
[28, 'el-GR', 'Melina'],
[29, 'ru-RU', 'Milena'],
[30, 'en-IE', 'Moira'],
[31, 'es-ES', '--Monica'],//--esta voz no funciona!								
[32, 'nb-NO', 'Nora'],
[33, 'en-IN', 'Rishi'],
[34, 'en-US', 'Samantha'],
[35, 'da-DK', 'Sara'],
[36, 'fi-FI', 'Satu'],
[37, 'zh-HK', 'Sin-ji'],
[38, 'en-ZA', 'Tessa'],
[39, 'fr-FR', 'Thomas'],
[40, 'zh-CN', 'Ting-Ting'],
[41, 'en-IN', 'Veena'],
[42, 'en-US', 'Victoria'],
[43, 'nl-NL', 'Xander'],
[44, 'tr-TR', 'Yelda'],
[45, 'ko-KR', 'Yuna'],
[46, 'ru-RU', 'Yuri'],
[47, 'pl-PL', 'Zosia'],
[48, 'cs-CZ', 'Zuzana'],
[49, 'de-DE', 'Google Deutsch'],
[50, 'en-US', 'Google US English'],
[51, 'en-GB', 'Google UK English Female'],
[52, 'en-GB', 'Google UK English Male'],
[53, 'es-ES', 'Google español'],
[54, 'es-US', 'Google español de Estados Unidos'],
[55, 'fr-FR', 'Google français'],
[56, 'hi-IN', 'Google हिन्दी'],
[57, 'id-ID', 'Google Bahasa Indonesia'],
[58, 'it-IT', 'Google italiano'],
[59, 'ja-JP', 'Google 日本語'],
[60, 'ko-KR', 'Google 한국의'],
[61, 'nl-NL', 'Google Nederlands'],
[62, 'pl-PL', 'Google polski'],
[63, 'pt-BR', 'Google português do Brasil'],
[64, 'ru-RU', 'Google русский'],
[65, 'zh-CN', 'Google&nbsp;普通话（中国大陆）'],
[66, 'zh-HK', 'Google&nbsp;粤語（香港）'],
[67, 'zh-TW', 'Google 國語（臺灣）']
];





//ICONOS
const kTapa1 =/**/[['idIcon', 'Nombre', 'LOGOs tipo ICON'],
[1, 'líneas de texto', 'fas fa-book-open'],
[2, 'Ajustes Estilo', 'fas fa-cog c10RoT'],//fas fa-wrench fas fa-cog c15Rot'],//fas fa-paint-brush'],//fas fa-paint-roller c10Rot'],//fas fa-glasses'],//fas fa-tshirt'],//fas fa-cog'],//fas fa-paint-brush'],//fas fa-universal-access c30RoT'],
[3, 'Anuncios', 'fas fa-book-reader'],//Información Comunitaria
[4, 'Menú', 'fa fa-square'],//far fa-square fas fa-bars'],//fas fa-square'],//fas fa-bars'],//'fas fa-cube'],
[5, 'Ajustes Configuración', 'fas fa-toggle-on'],//fas fa-tools'],//fas fa-cog c15Rot'],//fas fa-cog'],// fas fa-wrench'],//fa fa-adjust'],//fas fa-toggle-on c10RoT'],
[6, 'líneas de señas', 'fas fa-sign-language'],
[7, 'Contactos personales', 'fas fa-user-friends'],
[8, 'Usuario', 'fas fa-user-circle'],
[9, 'Tutorial', 'fas fa-paperclip'],
[10, 'Exclamación! atención!', 'fas fa-exclamation'],
[11, 'Invitación', 'fas fa-walking c10Rot'],
[12, 'Mano arriba, atención', 'far fa-hand-paper'],
[13, 'Arriba', 'fas fa-sign-in-alt c90RoT cAr8'],
[14, 'Abajo', 'fas fa-sign-in-alt c90Rot cAb8'],
[15, 'Recuperar ajustes 1 reloj', 'fas fa-hourglass-half'],//Comunidad','fas fa-globe-americas cMaX cAju83'],
[16, 'Publicar algo', 'fas fa-bullhorn c10RoT'],
[17, 'Mensajes', 'far fa-comment'],
[18, 'Contactos locales', 'far fa-address-card'],
[19, '() Acceder', 'fas fa-caret-right toq'],//fas fa-arrow-right'],
[20, 'Buscador', 'fas fa-search'],
[21, 'Soli Asesoria ON', 'far fa-bell'],
[22, 'Soli Asesoria OFF', 'far fa-bell-slash'],
[23, 'calidad buena', 'far fa-smile'],
[24, 'Inicio', 'fas fa-undo'],//far fa-flag c10RoT'],
[25, 'Idioma', 'fas fa-language'],
[26, 'Lengua de señas', 'fas fa-american-sign-language-interpreting'],
[27, 'Minímo ', 'fas fa-compress-alt c45RoT'],//fas fa-compress-alt cMin c45RoT fas fa-compress'],//fas fa-compress-alt'],
[28, 'Maximizar ventana', 'fas fa-expand-alt'],//fa-expand-arrows-alt
[29, 'Color texto Fondo inv', 'fas fa-spell-check'],//far fa-sticky-note'],//fas fa-font'],//fas fa-tint'],
[30, 'Luz', 'far fa-lightbulb cSoCo'],
[31, 'Fin', 'fas fa-genderless'],
[32, 'Escribir', 'fas fa-pencil-alt'],
[33, 'Acercar', 'fas fa-glasses'],
[34, 'lupa menos', 'fas fa-search-minus'],
[35, 'Mundo Pais', 'fas fa-globe-americas'],
[36, 'lupa mas', 'fas fa-search-plus'],
[37, 'Con lector de ventana', 'fas fa-volume-up'],//'fas fa-comment-dots cInvert'],//'fas fa-volume-up'],//fas fa-volume-up c10RoT'],
[38, 'Sin lector de ventana', 'fas fa-volume-mute'],//fas fa-volume-mute c10RoT'],
[39, 'Color fondo', 'fas fa-circle'],
[40, 'carrusel de señas', 'fa fa-spinner'],//fa fa-navicon'],
[41, 'tira de señas', 'fas fa-film c90Rot'],
[42, 'accesibilidad/presentac', 'fab fa-accessible-icon'],
[43, 'sala bog/entrada', 'fas fa-wheelchair'],//fab fa-accessible-icon'],//fas fa-door-open'],//fab fa-accessible-icon'],//fas fa-tshirt'],//fas fa-universal-access'],
[44, 'estilos rápidos', 'fas fa-paint-roller c10Rot'],
[45, 'clic', 'far fa-hand-pointer c10RoT'],
[46, 'pulsos corazón', 'fas fa-heartbeat'],
[47, 'altura texto', 'fas fa-text-height'],//width'],//fas fa-grip-vertical'],
[48, 'estrella blanca y negra', 'fas fa-star-half-alt'],
[49, 'braille', 'fas fa-braille cPush'],
[50, 'señales Ajustes 2', 'fas fa-map-signs'],//
[51, 'info - logo', 'fas fa-info c25Rot'],
[52, 'audio', 'fas fa-comment-dots'],//Acceso ()'				,'fas fa-caret-right'],//fas fa-door-open cInvert'],
[53, 'Cuenta', 'fas fa-portrait'],
[54, 'Persona', 'fas fa-street-view'],
[55, 'Maximizar ventana', 'far fa-window-restore'],
[56, 'ACCESO - PRESENTACIÓN', 'fas fa-user-cog'],// cAME'],//fas fa-wheelchair cAME'],//Silla de ruedas -fab fa-accessible-icon cAME'],//fas fa-door-open cAME'],// fab fa-accessible-icon cAME'],// fas fa-tshirt cAME'],//fas fa-universal-access cAme'],//fas fa-wheelchair cAme'],//fas fa-universal-access cAme'],//fab fa-accessible-icon cAme'],//fas fa-door-open cInvert cAme cMax'],
[57, 'Altura Maxima', 'fas fa-arrows-alt-v cMax'],//fas fa-text-height cMax'],//'fas fa-low-vision'],
[58, 'Botones activados', 'fas fa-keyboard'],
[59, 'Botones desactivados', 'far fa-keyboard'],
[60, 'Imagen', 'far fa-image'],
[61, 'Texto fondo negro', 'fas fa-spell-check'],
[62, 'Botones pequeños', 'fas fa-align-justify'],//fas fa-grip-lines'],//fas fa-align-justify'],//fas fa-stream'],
[63, 'miniatura', 'fas fa-arrows-alt-v cMin'],//fas fa-text-height cMin'],
[64, 'Lentes', 'fas fa-glasses'],//fa fa-search-plus'],//far fa-file-alt'],//'texto grande'				,'fas fa-text-height cMed'],
[65, 'Borde', 'fas fa-tint cBeiCo cSoCo'],//fas fa-fill-drip'],//fas fa-broom c13RoT'],//fas fa-angle-up c45Rot'],// fas fa-feather-alt c13RoT'],//far fa-square c10Rot'],//fas fa-expand'],//fas fa-stop cBeiMa'],//fa fa-minus'],
[66, 'mini circulo', 'fas fa-wheelchair cAme cCR'],//fab fa-accessible-icon cAme cCR'],//fas fa-door-open cAme cCR'],//fab fa-accessible-icon cAme cCR'],//fas fa-tshirt cAme cCR'],//fas fa-universal-access cAme cCR'],//far fa-circle  cCR   fas fa-genderless
[67, 'borrador Deshacer', 'fas fa-eraser'],//menu','fas fa-square'],
[68, 'Estilo menu', 'fab fa-accessible-icon'],//fas fa-door-open'],//fab fa-accessible-icon'],//fas fa-tshirt'],
[69, 'Titulares', 'fa fa-desktop'],
[70, 'Preguntas frecuentes', 'fas fa-question cAsK'],//'fas fa-question'],//fas fa-info-circle c10Rot'],//fas fa-umbrella'],//fas fa-scroll'],//far fa-life-ring'],
[71, 'Mini preguntas', 'fas fa-question cAsk'],//fas fa-question cMin'],
[72, 'Botones', 'fas fa-grip-vertical'],
[73, 'Preguntas frecuentes', 'fas fa-question'],
[74, 'preguntas frec', 'fas fa-question cASK'],
[75, 'bandera papa(2-7)', 'far fa-flag c10RoT'],
[76, 'filtro', 'fas fa-filter'],
[77, 'comunidad', 'fas fa-street-view'],
[78, 'cartelera', 'fas fa-address-card'],//o usar el 50 de señales? far fa-address-card
[79, 'interprete ASL', 'fas fa-american-sign-language-interpreting'],
[80, 'sombrilla', 'fas fa-umbrella'],
[81, 'casa', 'fas fa-home'],//far fa-address-card'],//fas fa-rss-square fa-flip-vertical'],
[82, 'Satelite', 'fas fa-satellite'],
[83, 'info en circulo', 'fas fa-info c25Rot'],//-circle c10Rot'],
[84, 'Esperando respuesta', 'fas fa-satellite fa-spin'],//fas fa-spinner fa-pulse'],//fas fa-satellite fa-spin'],
[85, 'pocillo', 'fas fa-coffee'],//far fa-clock'],
[86, 'manos saludando', 'far fa-handshake'],
[87, '', ''],
[88, '', ''],
[89, '', ''],
[90, '', ''],
[91, '', ''],
[92, '', ''],
[93, '', ''],
[94, '', ''],
[95, '', ''],
[96, '', ''],
[97, '', ''],
[98, '', ''],
[99, '', ''],
[100, '', ''],
[101, '', ''],
[102, '', ''],
[103, '', ''],
[104, '', ''],
[105, '', ''],
[106, '', ''],
[107, '', ''],
[108, '', ''],
[109, '', ''],
[110, '', ''],
[111, '', ''],
[112, '', ''],
[113, '', ''],
[114, '', ''],
[115, '', ''],
[116, '', ''],
[117, '', ''],
[118, '', ''],
[119, '', ''],
[120, '', ''],

];


//TEXTO CON ID:
// ver https://www.gaijin.at/en/infos/unicode-character-table
const kTapa2 =/**/[['idTexto', 'Nombre', 'LISTA textos/emojis'],
[1, 'líneas Morse', '··-'],
[2, 'Líneas Braille', '⠋'],
[3, 'Líneas de Texto', 'A'],
[4, 'Tamaño texto', '1x'],
[5, 'Tamaño texto', '2x'],
[6, 'Tamaño texto', '3x'],
[7, 'Tamaño texto', '4x'],
[8, 'Tamaño texto', '5x'],
[9, 'Tamaño texto', '6x'],
[10, 'Tamaño texto', '7x'],
[11, 'Background', 'B'],
[12, 'Botón pequeño/braille', '□'],
[13, 'i1 activado', 'i1'],
[14, 'i1 desactivado', 'i0'],
[15, 'volumen  0', '0'],
[16, 'velocidad muy lenta', '5'],
[17, 'velocidad lenta', '7'],
[18, 'velocidad normal', '10'],//1.0
[19, 'velocidad rápida', '14'],
[20, 'velocidad muy rápida', '20'],
[21, 'FILA DE SEÑAS ACT', '···'],
[22, 'FILA DE SEÑAS DESACT', '///'],
[23, '', ''],
[24, '', ''],
[25, '', ''],
[26, '', ''],
[27, '', ''],
[28, '', ''],
[29, '', ''],
[30, '', ''],
//IEMOJIS &#9917; https://www.w3schools.com/charsets/ref_emoji.asp
[31, 'Balón futbol', '&#9917;'],
[32, 'trabajadora con casco', '&#128119;'],//&#127997;'],
[33, 'Planeta tierra del lado de America', '&#127758;'],
[34, 'Mascaras de teatro', '&#127917;'],
[35, 'Bicicleta', '&#128690;'],
[36, '2 manos en alto', '&#128588;'],
[37, 'mano en alto', '&#129306;'],
[38, 'Cara de pensativo', '&#129300;'],
[39, 'Cachucha azul', '&#129506;'],
[40, 'Montaña', '&#9968;'],
[41, 'Hombre caminando', '&#128694;'],
[42, 'símbolo discapacidad silla de ruedas', '&#9855'],
[43, 'Surfista', '&#127940'],
[44, 'Balón de bolleyball', '&#127952'],
[45, 'Megafono', '&#128226'],
[46, 'Caja cerrada', '&#128230'],
[47, 'Mapa del mundo', '&#128506'],
[48, 'Bote con persona remandolo', '&#128675'],
[49, 'Retén de alto', '&#128679'],
[50, 'Banderín rojo', '&#128681'],
[51, 'Tambor con palillos', '&#129345'],
[52, 'Paleta de colores', '&#127912'],
[53, 'Bus stop', '&#128655'],
[54, 'Satelite', '&#128752'],
[55, '1 en un circulo', '&#x2780'],
[56, 'Bandera de golf', '&#x26F3'],
[57, 'Sombrilla en la arena', '&#x26F1'],
[58, 'Dinosaurio', '&#129430'],
[59, '', ''],
];







//============================================================
//d3 SEÑAS Y GLOSAS






//1-ASL,2-LSC,3-

/*
aqui hay que cambiar la columna 1 por la 2
al hacer el cambio la columna 1 debe indicar con 0 o 1 si es una seña sin movimiento[0] o con movimiento[1]
dependiendo de el valor de la columna 1:
1)la columna 2 se cargara con una seña de [0] o con la imagen INICIAL del movimiento [1] y sin vectores flechas
2)la columna 3 se podrá cargar con una seña movida de [0]
o con la imagen FINAL del movimiento y vectorizada con flechas de [1]

NOTA: La glosa para el caso de las señas FINALES del movimiento se mostrará subrayada o entre [] para indicar que es la finalización de una seña en movimiento, por ejemplo j] -> [j
*/
//       					[id		1 0Est/1Mov 2 Canti 3Repetis/MOVIMI 4 Seña principal				5 Seña auxiliar o acompañante'		],
const s00Senias =/**/[['id', '0Est/1Mov', 'canti', 'repetis', 'signs/0.png', 'signs/0.png'],
[1, 0, 2, 0, 'signs/1aLSC.jpg', 'signs/1aLSC.jpg'],
[2, 0, 2, 0, 'signs/2bLSC.jpg', 'signs/2bLSC.jpg'],
[3, 0, 2, 0, 'signs/3cLSC.jpg', 'signs/3cLSC.jpg'],
[4, 0, 2, 0, 'signs/4dLSC.jpg', 'signs/4dLSC.jpg'],
[5, 0, 2, 0, 'signs/5eLSC.jpg', 'signs/5eLSC.jpg'],
[6, 0, 2, 0, 'signs/6fLSC.jpg', 'signs/6fLSC.jpg'],
[7, 1, 2, 0, 'signs/7gLSC.jpg', 'signs/7gLSC-1.jpg'],
[8, 1, 2, 0, 'signs/8hLSC.jpg', 'signs/8hLSC-1.jpg'],
[9, 0, 2, 0, 'signs/9iLSC.jpg', 'signs/9iLSC.jpg'],
[10, 1, 2, 0, 'signs/10jLSC.jpg', 'signs/10jLSC-1.jpg'],
[11, 0, 2, 0, 'signs/11kLSC.jpg', 'signs/11kLSC.jpg'],
[12, 0, 2, 0, 'signs/12lLSC.jpg', 'signs/12lLSC.jpg'],
[13, 1, 2, 0, 'signs/13llLSC.jpg', 'signs/13llLSC-1.jpg'],
[14, 0, 2, 0, 'signs/14mLSC.jpg', 'signs/14mLSC.jpg'],
[15, 0, 2, 0, 'signs/15nLSC.jpg', 'signs/15nLSC.jpg'],
[16, 1, 2, 0, 'signs/16enieLSC.jpg', 'signs/16enieLSC-1.jpg'],
[17, 0, 2, 0, 'signs/17oLSC.jpg', 'signs/17oLSC.jpg'],
[18, 0, 2, 0, 'signs/18pLSC.jpg', 'signs/18pLSC.jpg'],
[19, 0, 2, 0, 'signs/19qLSC.jpg', 'signs/19qLSC.jpg'],
[20, 0, 2, 0, 'signs/20rLSC.jpg', 'signs/21rrLSC-1.jpg'],
[21, 1, 2, 0, 'signs/21rrLSC.jpg', 'signs/21rrLSC.jpg'],
[22, 1, 2, 0, 'signs/22sLSC.jpg', 'signs/22sLSC-1.jpg'],
[23, 0, 2, 0, 'signs/23tLSC.jpg', 'signs/23tLSC.jpg'],
[24, 0, 2, 0, 'signs/24uLSC.jpg', 'signs/24uLSC.jpg'],
[25, 0, 2, 0, 'signs/25vLSC.jpg', 'signs/25vLSC.jpg'],
[26, 0, 2, 0, 'signs/26wLSC.jpg', 'signs/26wLSC.jpg'],
[27, 0, 2, 0, 'signs/27xLSC.jpg', 'signs/27xLSC.jpg'],
[28, 0, 2, 0, 'signs/28yLSC.jpg', 'signs/28yLSC.jpg'],
[29, 1, 2, 0, 'signs/29zLSC.jpg', 'signs/29zLSC-1.jpg'],
[30, 0, 2, 0, 'signs/30aASL.jpg', 'signs/30aASL.jpg'],
[31, 0, 2, 0, 'signs/31bASL.jpg', 'signs/31bASL.jpg'],
[32, 0, 2, 0, 'signs/32cASL.jpg', 'signs/32cASL.jpg'],
[33, 0, 2, 0, 'signs/33dASL.jpg', 'signs/33dASL.jpg'],
[34, 0, 2, 0, 'signs/34eASL.jpg', 'signs/34eASL.jpg'],
[35, 0, 2, 0, 'signs/35fASL.jpg', 'signs/35fASL.jpg'],
[36, 0, 2, 0, 'signs/36gASL.jpg', 'signs/36gASL.jpg'],
[37, 0, 2, 0, 'signs/37hASL.jpg', 'signs/37hASL.jpg'],
[38, 0, 2, 0, 'signs/38iASL.jpg', 'signs/38iASL.jpg'],
[39, 1, 2, 0, 'signs/39jASL.jpg', 'signs/39jASL-1.jpg'],
[40, 0, 2, 0, 'signs/40kASL.jpg', 'signs/40kASL.jpg'],
[41, 0, 2, 0, 'signs/41lASL.jpg', 'signs/41lASL.jpg'],
[42, 0, 2, 0, 'signs/42mASL.jpg', 'signs/42mASL.jpg'],
[43, 0, 2, 0, 'signs/43nASL.jpg', 'signs/43nASL.jpg'],
[44, 0, 2, 0, 'signs/44oASL.jpg', 'signs/44oASL.jpg'],
[45, 0, 2, 0, 'signs/45pASL.jpg', 'signs/45pASL.jpg'],
[46, 0, 2, 0, 'signs/46qASL.jpg', 'signs/46qASL.jpg'],
[47, 0, 2, 0, 'signs/47rASL.jpg', 'signs/21rrLSC.jpg'],
[48, 0, 2, 0, 'signs/48sASL.jpg', 'signs/48sASL.jpg'],
[49, 0, 2, 0, 'signs/49tASL.jpg', 'signs/49tASL.jpg'],
[50, 0, 2, 0, 'signs/50uASL.jpg', 'signs/50uASL.jpg'],
[51, 0, 2, 0, 'signs/51vASL.jpg', 'signs/51vASL.jpg'],
[52, 0, 2, 0, 'signs/52wASL.jpg', 'signs/52wASL.jpg'],
[53, 0, 2, 0, 'signs/53xASL.jpg', 'signs/53xASL.jpg'],
[54, 0, 2, 0, 'signs/54yASL.jpg', 'signs/54yASL.jpg'],
[55, 1, 2, 0, 'signs/55zASL.jpg', 'signs/55zASL-1.jpg'],
[56, 0, 2, 0, 'signs/56hASL.jpg', 'signs/56hASL.jpg'],
[57, 0, 2, 0, 'signs/57iASL.jpg', 'signs/57iASL.jpg'],
[58, 0, 2, 0, 'signs/58jASL.jpg', 'signs/58jASL.jpg'],
[59, 0, 2, 0, 'signs/59kASL.jpg', 'signs/59kASL.jpg'],
[60, 0, 2, 0, 'signs/60lASL.jpg', 'signs/60lASL.jpg'],
[61, 0, 2, 0, 'signs/61mASL.jpg', 'signs/61mASL.jpg'],
[62, 0, 2, 0, 'signs/62nASL.jpg', 'signs/62nASL.jpg'],
[63, 0, 2, 0, 'signs/63oASL.jpg', 'signs/63oASL.jpg'],
[64, 0, 2, 0, 'signs/64pASL.jpg', 'signs/64pASL.jpg'],
[65, 0, 2, 0, 'signs/65qASL.jpg', 'signs/65qASL.jpg'],
[66, 0, 2, 0, 'signs/66rASL.jpg', 'signs/21rrLSC.jpg'],
[67, 0, 2, 0, 'signs/67sASL.jpg', 'signs/67sASL.jpg'],
[68, 0, 2, 0, 'signs/68tASL.jpg', 'signs/68tASL.jpg'],
[69, 0, 2, 0, 'signs/69uASL.jpg', 'signs/69uASL.jpg'],
[70, 0, 2, 0, 'signs/70vASL.jpg', 'signs/70vASL.jpg'],
[71, 0, 2, 0, 'signs/71wASL.jpg', 'signs/71wASL.jpg'],
[72, 0, 2, 0, 'signs/72xASL.jpg', 'signs/72xASL.jpg'],
[73, 0, 2, 0, 'signs/73yASL.jpg', 'signs/73yASL.jpg'],
[74, 0, 2, 0, 'signs/74zASL.jpg', 'signs/74zASL.jpg'],
[75, 0, 2, 0, 'signs/75n1LSC.jpg', 'signs/75n1LSC.jpg'],
[76, 0, 2, 0, 'signs/76n2LSC.jpg', 'signs/76n2LSC.jpg'],
[77, 0, 2, 0, 'signs/77n3LSC.jpg', 'signs/77n3LSC.jpg'],
[78, 0, 2, 0, 'signs/78n4LSC.jpg', 'signs/78n4LSC.jpg'],
[79, 0, 2, 0, 'signs/79n5LSC.jpg', 'signs/79n5LSC.jpg'],
[80, 0, 2, 0, 'signs/80n6ASL.jpg', 'signs/80n6ASL.jpg'],
[81, 0, 2, 0, 'signs/81n7ASL.jpg', 'signs/81n7ASL.jpg'],
[82, 0, 2, 0, 'signs/82n8ASL.jpg', 'signs/82n8ASL.jpg'],
[83, 0, 2, 0, 'signs/83n9ASL.jpg', 'signs/83n9ASL.jpg'],
[84, 1, 2, 0, 'signs/84n10ASL.jpg', 'signs/84n10ASL-1.jpg'],
[85, 1, 2, 0, 'signs/85andASL.jpg', 'signs/85andASL-1.jpg'],
[86, 1, 2, 0, 'signs/86n6LSC.jpg', 'signs/86n6LSC-1.jpg'],
[87, 1, 2, 0, 'signs/87n7LSC.jpg', 'signs/87n7LSC-1.jpg'],
[88, 1, 2, 0, 'signs/88n8LSC.jpg', 'signs/88n8LSC-1.jpg'],
[89, 1, 2, 0, 'signs/89n9LSC.jpg', 'signs/89n9LSC-1.jpg'],
[90, 1, 2, 0, 'signs/90perroLSC.jpg', 'signs/90perroLSC-1.jpg'],
[91, 1, 2, 0, 'signs/91horaLSC.jpg', 'signs/91horaLSC-1.jpg'],
[92, 0, 2, 0, 'signs/92signoMasLSC.jpg', 'signs/92signoMasLSC.jpg'],
[93, 1, 2, 0, 'signs/93espacioLSC.jpg', 'signs/93espacioLSC-1.jpg'],
[94, 1, 2, 0, 'signs/94hourASL.jpg', 'signs/94hourASL-1.jpg'],
[95, 1, 2, 0, 'signs/95n10LSC.jpg', 'signs/95n10LSC-1.jpg'],
[96, 1, 2, 1, 'signs/96ajustarLSC.jpg', 'signs/96ajustarLSC-1.jpg'],
[97, 0, 2, 0, 'signs/97bogotaLSC.png', 'signs/97bogotaLSC.png'],
[98, 1, 2, 1, 'signs/98bogotaLSC.png', 'signs/98bogotaLSC-1.png'],
[99, 1, 3, 0, 'signs/99informacionLSC1.png', 'signs/99informacionLSC2.png','signs/99informacionLSC3.png'],
[100, 0, 2, 0, 'signs/100comodin.jpg', 'signs/100comodin.jpg'],
[101, 1, 2, 0, 'signs/101abajoLSC1.jpg', 'signs/101abajoLSC2.jpg'],
[102, 1, 2, 1, 'signs/102ajustesLSC1.jpg', 'signs/102ajustesLSC2.jpg'],
[103, 1, 2, 0, 'signs/103arribaLSC1.jpg', 'signs/103arribaLSC2.jpg'],
[104, 1, 2, 0, 'signs/104continuarLSC1.jpg', 'signs/104continuarLSC2.jpg'],
[105, 1, 2, 1, 'signs/105horaLSC1.jpg', 'signs/105horaLSC2.jpg'],
[106, 1, 2, 1, 'signs/106idiomaLSC1.jpg', 'signs/106idiomaLSC2.jpg'],
[107, 1, 2, 0, 'signs/107invitacionLSC1.jpg', 'signs/107invitacionLSC2.jpg'],
[108, 1, 5, 0, 'signs/108localidaLSC1.jpg', 'signs/108localidaLSC2.jpg', 'signs/108localidaLSC3.jpg', 'signs/108localidaLSC4.jpg', 'signs/108localidaLSC5.jpg'],
[109, 1, 5, 0, 'signs/109modoLSC1.jpg', 'signs/109modoLSC2.jpg', 'signs/109modoLSC3.jpg', 'signs/109modoLSC4.jpg', 'signs/109modoLSC5.jpg'],
[110, 0, 2, 0, 'signs/110LSC1.jpg', 'signs/110LSC2.jpg'],
[111, 0, 2, 0, 'signs/111LSC1.jpg', 'signs/111LSC2.jpg'],
[112, 0, 2, 0, 'signs/112LSC1.jpg', 'signs/112LSC2.jpg'],
[113, 0, 2, 0, 'signs/113LSC1.jpg', 'signs/113LSC2.jpg'],
[114, 0, 2, 0, 'signs/114LSC1.jpg', 'signs/114LSC2.jpg'],
[115, 0, 2, 0, 'signs/115LSC1.jpg', 'signs/115LSC2.jpg'],
[116, 0, 2, 0, 'signs/116LSC1.jpg', 'signs/116LSC2.jpg'],
[117, 0, 2, 0, 'signs/117LSC1.jpg', 'signs/117LSC2.jpg'],
[118, 0, 2, 0, 'signs/118LSC1.jpg', 'signs/118LSC2.jpg'],
[119, 0, 2, 0, 'signs/119LSC1.jpg', 'signs/119LSC2.jpg'],
[120, 0, 2, 0, 'signs/120LSC1.jpg', 'signs/120LSC2.jpg'],
[121, 0, 2, 0, 'signs/121LSC1.jpg', 'signs/121LSC2.jpg'],
[122, 0, 2, 0, 'signs/122LSC1.jpg', 'signs/122LSC2.jpg'],
[123, 0, 2, 0, 'signs/123LSC1.jpg', 'signs/123LSC2.jpg'],
[124, 0, 2, 0, 'signs/124LSC1.jpg', 'signs/124LSC2.jpg'],
[125, 0, 2, 0, 'signs/125LSC1.jpg', 'signs/125LSC2.jpg'],
[126, 0, 2, 0, 'signs/126LSC1.jpg', 'signs/126LSC2.jpg'],
[127, 0, 2, 0, 'signs/127LSC1.jpg', 'signs/127LSC2.jpg'],
[128, 0, 2, 0, 'signs/128LSC1.jpg', 'signs/128LSC2.jpg'],
[129, 0, 2, 0, 'signs/129LSC1.jpg', 'signs/129LSC2.jpg'],
[130, 0, 2, 0, 'signs/130LSC1.jpg', 'signs/130LSC2.jpg'],
[131, 0, 2, 0, 'signs/131LSC1.jpg', 'signs/131LSC2.jpg'],
[132, 0, 2, 0, 'signs/132LSC1.jpg', 'signs/132LSC2.jpg'],
[133, 0, 2, 0, 'signs/133LSC1.jpg', 'signs/133LSC2.jpg'],
[134, 0, 2, 0, 'signs/134LSC1.jpg', 'signs/134LSC2.jpg'],
[135, 0, 2, 0, 'signs/135LSC1.jpg', 'signs/135LSC2.jpg'],
[136, 0, 2, 0, 'signs/136LSC1.jpg', 'signs/136LSC2.jpg'],
[137, 0, 2, 0, 'signs/137LSC1.jpg', 'signs/137LSC2.jpg'],
[138, 0, 2, 0, 'signs/138LSC1.jpg', 'signs/138LSC2.jpg'],
[139, 0, 2, 0, 'signs/139LSC1.jpg', 'signs/139LSC2.jpg'],
[140, 0, 2, 0, 'signs/140LSC1.jpg', 'signs/140LSC2.jpg'],
[141, 0, 2, 0, 'signs/141LSC1.jpg', 'signs/141LSC2.jpg'],
[142, 0, 2, 0, 'signs/142LSC1.jpg', 'signs/142LSC2.jpg'],
[143, 0, 2, 0, 'signs/143LSC1.jpg', 'signs/143LSC2.jpg'],
[144, 0, 2, 0, 'signs/144LSC1.jpg', 'signs/144LSC2.jpg'],
[145, 0, 2, 0, 'signs/145LSC1.jpg', 'signs/145LSC2.jpg'],
[146, 0, 2, 0, 'signs/146LSC1.jpg', 'signs/146LSC2.jpg'],
[147, 0, 2, 0, 'signs/147LSC1.jpg', 'signs/147LSC2.jpg'],
[148, 0, 2, 0, 'signs/148LSC1.jpg', 'signs/148LSC2.jpg'],
[149, 0, 2, 0, 'signs/149LSC1.jpg', 'signs/149LSC2.jpg'],
[150, 0, 2, 0, 'signs/150LSC1.jpg', 'signs/150LSC2.jpg'],
[151, 0, 2, 0, 'signs/151LSC1.jpg', 'signs/151LSC2.jpg'],
[152, 0, 2, 0, 'signs/152LSC1.jpg', 'signs/152LSC2.jpg'],
[153, 0, 2, 0, 'signs/153LSC1.jpg', 'signs/153LSC2.jpg'],
[154, 0, 2, 0, 'signs/154LSC1.jpg', 'signs/154LSC2.jpg'],
[155, 0, 2, 0, 'signs/155LSC1.jpg', 'signs/155LSC2.jpg'],
[156, 0, 2, 0, 'signs/156LSC1.jpg', 'signs/156LSC2.jpg'],
[157, 0, 2, 0, 'signs/157LSC1.jpg', 'signs/157LSC2.jpg'],
[158, 0, 2, 0, 'signs/158LSC1.jpg', 'signs/158LSC2.jpg'],
[159, 0, 2, 0, 'signs/159LSC1.jpg', 'signs/159LSC2.jpg'],
[160, 0, 2, 0, 'signs/160LSC1.jpg', 'signs/160LSC2.jpg'],
[161, 0, 2, 0, 'signs/161LSC1.jpg', 'signs/161LSC2.jpg'],
[162, 0, 2, 0, 'signs/162LSC1.jpg', 'signs/162LSC2.jpg'],
[163, 0, 2, 0, 'signs/163LSC1.jpg', 'signs/163LSC2.jpg'],
[164, 0, 2, 0, 'signs/164LSC1.jpg', 'signs/164LSC2.jpg'],
[165, 0, 2, 0, 'signs/165LSC1.jpg', 'signs/165LSC2.jpg'],
[166, 0, 2, 0, 'signs/166LSC1.jpg', 'signs/166LSC2.jpg'],
[167, 0, 2, 0, 'signs/167LSC1.jpg', 'signs/167LSC2.jpg'],
[168, 0, 2, 0, 'signs/168LSC1.jpg', 'signs/168LSC2.jpg'],
[169, 0, 2, 0, 'signs/169LSC1.jpg', 'signs/169LSC2.jpg'],
[170, 0, 2, 0, 'signs/170LSC1.jpg', 'signs/170LSC2.jpg'],
[171, 0, 2, 0, 'signs/171LSC1.jpg', 'signs/171LSC2.jpg'],
[172, 0, 2, 0, 'signs/172LSC1.jpg', 'signs/172LSC2.jpg'],
[173, 0, 2, 0, 'signs/173LSC1.jpg', 'signs/173LSC2.jpg'],
[174, 0, 2, 0, 'signs/174LSC1.jpg', 'signs/174LSC2.jpg'],
[175, 0, 2, 0, 'signs/175LSC1.jpg', 'signs/175LSC2.jpg'],
[176, 0, 2, 0, 'signs/176LSC1.jpg', 'signs/176LSC2.jpg'],
[177, 0, 2, 0, 'signs/177LSC1.jpg', 'signs/177LSC2.jpg'],
[178, 0, 2, 0, 'signs/178LSC1.jpg', 'signs/178LSC2.jpg'],
[179, 0, 2, 0, 'signs/179LSC1.jpg', 'signs/179LSC2.jpg'],
[180, 0, 2, 0, 'signs/180LSC1.jpg', 'signs/180LSC2.jpg'],
[181, 0, 2, 0, 'signs/181LSC1.jpg', 'signs/181LSC2.jpg'],
[182, 0, 2, 0, 'signs/182LSC1.jpg', 'signs/182LSC2.jpg'],
[183, 0, 2, 0, 'signs/183LSC1.jpg', 'signs/183LSC2.jpg'],
[184, 0, 2, 0, 'signs/184LSC1.jpg', 'signs/184LSC2.jpg'],
[185, 0, 2, 0, 'signs/185LSC1.jpg', 'signs/185LSC2.jpg'],
[186, 0, 2, 0, 'signs/186LSC1.jpg', 'signs/186LSC2.jpg'],
[187, 0, 2, 0, 'signs/187LSC1.jpg', 'signs/187LSC2.jpg'],
[188, 0, 2, 0, 'signs/188LSC1.jpg', 'signs/188LSC2.jpg'],
[189, 0, 2, 0, 'signs/189LSC1.jpg', 'signs/189LSC2.jpg'],
[190, 0, 2, 0, 'signs/190LSC1.jpg', 'signs/190LSC2.jpg'],
[191, 0, 2, 0, 'signs/191LSC1.jpg', 'signs/191LSC2.jpg'],
[192, 0, 2, 0, 'signs/192LSC1.jpg', 'signs/192LSC2.jpg'],
[193, 0, 2, 0, 'signs/193LSC1.jpg', 'signs/193LSC2.jpg'],
[194, 0, 2, 0, 'signs/194LSC1.jpg', 'signs/194LSC2.jpg'],
[195, 0, 2, 0, 'signs/195LSC1.jpg', 'signs/195LSC2.jpg'],
[196, 0, 2, 0, 'signs/196LSC1.jpg', 'signs/196LSC2.jpg'],
[197, 0, 2, 0, 'signs/197LSC1.jpg', 'signs/197LSC2.jpg'],
[198, 0, 2, 0, 'signs/198LSC1.jpg', 'signs/198LSC2.jpg'],
[199, 0, 2, 0, 'signs/199LSC1.jpg', 'signs/199LSC2.jpg'],
[200, 0, 2, 0, 'signs/200LSC1.jpg', 'signs/200LSC2.jpg'],
[201, 0, 2, 0, 'signs/201LSC1.jpg', 'signs/201LSC2.jpg'],
[202, 0, 2, 0, 'signs/202LSC1.jpg', 'signs/202LSC2.jpg'],
[203, 0, 2, 0, 'signs/203LSC1.jpg', 'signs/203LSC2.jpg'],
[204, 0, 2, 0, 'signs/204LSC1.jpg', 'signs/204LSC2.jpg'],
[205, 0, 2, 0, 'signs/205LSC1.jpg', 'signs/205LSC2.jpg'],
[206, 0, 2, 0, 'signs/206LSC1.jpg', 'signs/206LSC2.jpg'],
[207, 0, 2, 0, 'signs/207LSC1.jpg', 'signs/207LSC2.jpg'],
[208, 0, 2, 0, 'signs/208LSC1.jpg', 'signs/208LSC2.jpg'],
[209, 0, 2, 0, 'signs/209LSC1.jpg', 'signs/209LSC2.jpg'],
[210, 0, 2, 0, 'signs/210LSC1.jpg', 'signs/210LSC2.jpg'],
[211, 0, 2, 0, 'signs/211LSC1.jpg', 'signs/211LSC2.jpg'],
[212, 0, 2, 0, 'signs/212LSC1.jpg', 'signs/212LSC2.jpg'],
[213, 0, 2, 0, 'signs/213LSC1.jpg', 'signs/213LSC2.jpg'],
[214, 0, 2, 0, 'signs/214LSC1.jpg', 'signs/214LSC2.jpg'],
[215, 0, 2, 0, 'signs/215LSC1.jpg', 'signs/215LSC2.jpg'],
[216, 0, 2, 0, 'signs/216LSC1.jpg', 'signs/216LSC2.jpg'],
[217, 0, 2, 0, 'signs/217LSC1.jpg', 'signs/217LSC2.jpg'],
[218, 0, 2, 0, 'signs/218LSC1.jpg', 'signs/218LSC2.jpg'],
[219, 0, 2, 0, 'signs/219LSC1.jpg', 'signs/219LSC2.jpg'],
[220, 0, 2, 0, 'signs/220LSC1.jpg', 'signs/220LSC2.jpg'],
[221, 0, 2, 0, 'signs/221LSC1.jpg', 'signs/221LSC2.jpg'],
[222, 0, 2, 0, 'signs/222LSC1.jpg', 'signs/222LSC2.jpg'],
[223, 0, 2, 0, 'signs/223LSC1.jpg', 'signs/223LSC2.jpg'],
[224, 0, 2, 0, 'signs/224LSC1.jpg', 'signs/224LSC2.jpg'],
[225, 0, 2, 0, 'signs/225LSC1.jpg', 'signs/225LSC2.jpg'],
[226, 0, 2, 0, 'signs/226LSC1.jpg', 'signs/226LSC2.jpg'],
[227, 0, 2, 0, 'signs/227LSC1.jpg', 'signs/227LSC2.jpg'],
[228, 0, 2, 0, 'signs/228LSC1.jpg', 'signs/228LSC2.jpg'],
[229, 0, 2, 0, 'signs/229LSC1.jpg', 'signs/229LSC2.jpg'],
[230, 0, 2, 0, 'signs/230LSC1.jpg', 'signs/230LSC2.jpg'],
[231, 0, 2, 0, 'signs/231LSC1.jpg', 'signs/231LSC2.jpg'],
[232, 0, 2, 0, 'signs/232LSC1.jpg', 'signs/232LSC2.jpg'],
[233, 0, 2, 0, 'signs/233LSC1.jpg', 'signs/233LSC2.jpg'],
[234, 0, 2, 0, 'signs/234LSC1.jpg', 'signs/234LSC2.jpg'],
[235, 0, 2, 0, 'signs/235LSC1.jpg', 'signs/235LSC2.jpg'],
[236, 0, 2, 0, 'signs/236LSC1.jpg', 'signs/236LSC2.jpg'],
[237, 0, 2, 0, 'signs/237LSC1.jpg', 'signs/237LSC2.jpg'],
[238, 0, 2, 0, 'signs/238LSC1.jpg', 'signs/238LSC2.jpg'],
[239, 0, 2, 0, 'signs/239LSC1.jpg', 'signs/239LSC2.jpg'],
[240, 0, 2, 0, 'signs/240LSC1.jpg', 'signs/240LSC2.jpg'],
[241, 0, 2, 0, 'signs/241LSC1.jpg', 'signs/241LSC2.jpg'],
[242, 0, 2, 0, 'signs/242LSC1.jpg', 'signs/242LSC2.jpg'],
[243, 0, 2, 0, 'signs/243LSC1.jpg', 'signs/243LSC2.jpg'],
[244, 0, 2, 0, 'signs/244LSC1.jpg', 'signs/244LSC2.jpg'],
[245, 0, 2, 0, 'signs/245LSC1.jpg', 'signs/245LSC2.jpg'],
[246, 0, 2, 0, 'signs/246LSC1.jpg', 'signs/246LSC2.jpg'],
[247, 0, 2, 0, 'signs/247LSC1.jpg', 'signs/247LSC2.jpg'],
[248, 0, 2, 0, 'signs/248LSC1.jpg', 'signs/248LSC2.jpg'],
[249, 0, 2, 0, 'signs/249LSC1.jpg', 'signs/249LSC2.jpg'],
[250, 0, 2, 0, 'signs/250LSC1.jpg', 'signs/250LSC2.jpg'],
[251, 0, 2, 0, 'signs/251LSC1.jpg', 'signs/251LSC2.jpg'],
[252, 0, 2, 0, 'signs/252LSC1.jpg', 'signs/252LSC2.jpg'],
[253, 0, 2, 0, 'signs/253LSC1.jpg', 'signs/253LSC2.jpg'],
[254, 0, 2, 0, 'signs/254LSC1.jpg', 'signs/254LSC2.jpg'],
[255, 0, 2, 0, 'signs/255LSC1.jpg', 'signs/255LSC2.jpg'],
[256, 0, 2, 0, 'signs/256LSC1.jpg', 'signs/256LSC2.jpg'],
[257, 0, 2, 0, 'signs/257LSC1.jpg', 'signs/257LSC2.jpg'],
[258, 0, 2, 0, 'signs/258LSC1.jpg', 'signs/258LSC2.jpg'],
[259, 0, 2, 0, 'signs/259LSC1.jpg', 'signs/259LSC2.jpg'],
[260, 0, 2, 0, 'signs/260LSC1.jpg', 'signs/260LSC2.jpg'],
[261, 0, 2, 0, 'signs/261LSC1.jpg', 'signs/261LSC2.jpg'],
[262, 0, 2, 0, 'signs/262LSC1.jpg', 'signs/262LSC2.jpg'],
[263, 0, 2, 0, 'signs/263LSC1.jpg', 'signs/263LSC2.jpg'],
[264, 0, 2, 0, 'signs/264LSC1.jpg', 'signs/264LSC2.jpg'],
[265, 0, 2, 0, 'signs/265LSC1.jpg', 'signs/265LSC2.jpg'],
[266, 0, 2, 0, 'signs/266LSC1.jpg', 'signs/266LSC2.jpg'],
[267, 0, 2, 0, 'signs/267LSC1.jpg', 'signs/267LSC2.jpg'],
[268, 0, 2, 0, 'signs/268LSC1.jpg', 'signs/268LSC2.jpg'],
[269, 0, 2, 0, 'signs/269LSC1.jpg', 'signs/269LSC2.jpg'],
[270, 0, 2, 0, 'signs/270LSC1.jpg', 'signs/270LSC2.jpg'],
[271, 0, 2, 0, 'signs/271LSC1.jpg', 'signs/271LSC2.jpg'],
[272, 0, 2, 0, 'signs/272LSC1.jpg', 'signs/272LSC2.jpg'],
[273, 0, 2, 0, 'signs/273LSC1.jpg', 'signs/273LSC2.jpg'],
[274, 0, 2, 0, 'signs/274LSC1.jpg', 'signs/274LSC2.jpg'],
[275, 0, 2, 0, 'signs/275LSC1.jpg', 'signs/275LSC2.jpg'],
[276, 0, 2, 0, 'signs/276LSC1.jpg', 'signs/276LSC2.jpg'],
[277, 0, 2, 0, 'signs/277LSC1.jpg', 'signs/277LSC2.jpg'],
[278, 0, 2, 0, 'signs/278LSC1.jpg', 'signs/278LSC2.jpg'],
[279, 0, 2, 0, 'signs/279LSC1.jpg', 'signs/279LSC2.jpg'],
[280, 0, 2, 0, 'signs/280LSC1.jpg', 'signs/280LSC2.jpg'],
[281, 0, 2, 0, 'signs/281LSC1.jpg', 'signs/281LSC2.jpg'],
[282, 0, 2, 0, 'signs/282LSC1.jpg', 'signs/282LSC2.jpg'],
[283, 0, 2, 0, 'signs/283LSC1.jpg', 'signs/283LSC2.jpg'],
[284, 0, 2, 0, 'signs/284LSC1.jpg', 'signs/284LSC2.jpg'],
[285, 0, 2, 0, 'signs/285LSC1.jpg', 'signs/285LSC2.jpg'],
[286, 0, 2, 0, 'signs/286LSC1.jpg', 'signs/286LSC2.jpg'],
[287, 0, 2, 0, 'signs/287LSC1.jpg', 'signs/287LSC2.jpg'],
[288, 0, 2, 0, 'signs/288LSC1.jpg', 'signs/288LSC2.jpg'],
[289, 0, 2, 0, 'signs/289LSC1.jpg', 'signs/289LSC2.jpg'],
[290, 0, 2, 0, 'signs/290LSC1.jpg', 'signs/290LSC2.jpg'],
[291, 0, 2, 0, 'signs/291LSC1.jpg', 'signs/291LSC2.jpg'],
[292, 0, 2, 0, 'signs/292LSC1.jpg', 'signs/292LSC2.jpg'],
[293, 0, 2, 0, 'signs/293LSC1.jpg', 'signs/293LSC2.jpg'],
[294, 0, 2, 0, 'signs/294LSC1.jpg', 'signs/294LSC2.jpg'],
[295, 0, 2, 0, 'signs/295LSC1.jpg', 'signs/295LSC2.jpg'],
[296, 0, 2, 0, 'signs/296LSC1.jpg', 'signs/296LSC2.jpg'],
[297, 0, 2, 0, 'signs/297LSC1.jpg', 'signs/297LSC2.jpg'],
[298, 0, 2, 0, 'signs/298LSC1.jpg', 'signs/298LSC2.jpg'],
[299, 0, 2, 0, 'signs/299LSC1.jpg', 'signs/299LSC2.jpg'],
[300, 0, 2, 0, 'signs/300LSC1.jpg', 'signs/300LSC2.jpg'],
[301, 0, 2, 0, 'signs/301LSC1.jpg', 'signs/301LSC2.jpg'],
[302, 0, 2, 0, 'signs/302LSC1.jpg', 'signs/302LSC2.jpg'],
[303, 0, 2, 0, 'signs/303LSC1.jpg', 'signs/303LSC2.jpg'],
[304, 0, 2, 0, 'signs/304LSC1.jpg', 'signs/304LSC2.jpg'],
[305, 0, 2, 0, 'signs/305LSC1.jpg', 'signs/305LSC2.jpg'],
[306, 0, 2, 0, 'signs/306LSC1.jpg', 'signs/306LSC2.jpg'],
[307, 0, 2, 0, 'signs/307LSC1.jpg', 'signs/307LSC2.jpg'],
[308, 0, 2, 0, 'signs/308LSC1.jpg', 'signs/308LSC2.jpg'],
[309, 0, 2, 0, 'signs/309LSC1.jpg', 'signs/309LSC2.jpg'],
[310, 0, 2, 0, 'signs/310LSC1.jpg', 'signs/310LSC2.jpg'],
[311, 0, 2, 0, 'signs/311LSC1.jpg', 'signs/311LSC2.jpg'],
[312, 0, 2, 0, 'signs/312LSC1.jpg', 'signs/312LSC2.jpg'],
[313, 0, 2, 0, 'signs/313LSC1.jpg', 'signs/313LSC2.jpg'],
[314, 0, 2, 0, 'signs/314LSC1.jpg', 'signs/314LSC2.jpg'],
[315, 0, 2, 0, 'signs/315LSC1.jpg', 'signs/315LSC2.jpg'],
[316, 0, 2, 0, 'signs/316LSC1.jpg', 'signs/316LSC2.jpg'],
[317, 0, 2, 0, 'signs/317LSC1.jpg', 'signs/317LSC2.jpg'],
[318, 0, 2, 0, 'signs/318LSC1.jpg', 'signs/318LSC2.jpg'],
[319, 0, 2, 0, 'signs/319LSC1.jpg', 'signs/319LSC2.jpg'],
[320, 0, 2, 0, 'signs/320LSC1.jpg', 'signs/320LSC2.jpg'],
[321, 0, 2, 0, 'signs/321LSC1.jpg', 'signs/321LSC2.jpg'],
[322, 0, 2, 0, 'signs/322LSC1.jpg', 'signs/322LSC2.jpg'],
[323, 0, 2, 0, 'signs/323LSC1.jpg', 'signs/323LSC2.jpg'],
[324, 0, 2, 0, 'signs/324LSC1.jpg', 'signs/324LSC2.jpg'],
[325, 0, 2, 0, 'signs/325LSC1.jpg', 'signs/325LSC2.jpg'],
[326, 0, 2, 0, 'signs/326LSC1.jpg', 'signs/326LSC2.jpg'],
[327, 0, 2, 0, 'signs/327LSC1.jpg', 'signs/327LSC2.jpg'],
[328, 0, 2, 0, 'signs/328LSC1.jpg', 'signs/328LSC2.jpg'],
[329, 0, 2, 0, 'signs/329LSC1.jpg', 'signs/329LSC2.jpg'],
[330, 0, 2, 0, 'signs/330LSC1.jpg', 'signs/330LSC2.jpg'],
[331, 0, 2, 0, 'signs/331LSC1.jpg', 'signs/331LSC2.jpg'],
[332, 0, 2, 0, 'signs/332LSC1.jpg', 'signs/332LSC2.jpg'],
[333, 0, 2, 0, 'signs/333LSC1.jpg', 'signs/333LSC2.jpg'],
[334, 0, 2, 0, 'signs/334LSC1.jpg', 'signs/334LSC2.jpg'],
[335, 0, 2, 0, 'signs/335LSC1.jpg', 'signs/335LSC2.jpg'],
[336, 0, 2, 0, 'signs/336LSC1.jpg', 'signs/336LSC2.jpg'],
[337, 0, 2, 0, 'signs/337LSC1.jpg', 'signs/337LSC2.jpg'],
[338, 0, 2, 0, 'signs/338LSC1.jpg', 'signs/338LSC2.jpg'],
[339, 0, 2, 0, 'signs/339LSC1.jpg', 'signs/339LSC2.jpg'],
[340, 0, 2, 0, 'signs/340LSC1.jpg', 'signs/340LSC2.jpg'],
[341, 0, 2, 0, 'signs/341LSC1.jpg', 'signs/341LSC2.jpg'],
[342, 0, 2, 0, 'signs/342LSC1.jpg', 'signs/342LSC2.jpg'],
[343, 0, 2, 0, 'signs/343LSC1.jpg', 'signs/343LSC2.jpg'],
[344, 0, 2, 0, 'signs/344LSC1.jpg', 'signs/344LSC2.jpg'],
[345, 0, 2, 0, 'signs/345LSC1.jpg', 'signs/345LSC2.jpg'],
[346, 0, 2, 0, 'signs/346LSC1.jpg', 'signs/346LSC2.jpg'],
[347, 0, 2, 0, 'signs/347LSC1.jpg', 'signs/347LSC2.jpg'],
[348, 0, 2, 0, 'signs/348LSC1.jpg', 'signs/348LSC2.jpg'],
[349, 0, 2, 0, 'signs/349LSC1.jpg', 'signs/349LSC2.jpg'],
[350, 0, 2, 0, 'signs/350LSC1.jpg', 'signs/350LSC2.jpg'],
[351, 0, 2, 0, 'signs/351LSC1.jpg', 'signs/351LSC2.jpg'],
[352, 0, 2, 0, 'signs/352LSC1.jpg', 'signs/352LSC2.jpg'],
[353, 0, 2, 0, 'signs/353LSC1.jpg', 'signs/353LSC2.jpg'],
[354, 0, 2, 0, 'signs/354LSC1.jpg', 'signs/354LSC2.jpg'],
[355, 0, 2, 0, 'signs/355LSC1.jpg', 'signs/355LSC2.jpg'],
[356, 0, 2, 0, 'signs/356LSC1.jpg', 'signs/356LSC2.jpg'],
[357, 0, 2, 0, 'signs/357LSC1.jpg', 'signs/357LSC2.jpg'],
[358, 0, 2, 0, 'signs/358LSC1.jpg', 'signs/358LSC2.jpg'],
[359, 0, 2, 0, 'signs/359LSC1.jpg', 'signs/359LSC2.jpg'],
[360, 0, 2, 0, 'signs/360LSC1.jpg', 'signs/360LSC2.jpg'],
[361, 0, 2, 0, 'signs/361LSC1.jpg', 'signs/361LSC2.jpg'],
[362, 0, 2, 0, 'signs/362LSC1.jpg', 'signs/362LSC2.jpg'],
[363, 0, 2, 0, 'signs/363LSC1.jpg', 'signs/363LSC2.jpg'],
[364, 0, 2, 0, 'signs/364LSC1.jpg', 'signs/364LSC2.jpg'],
[365, 0, 2, 0, 'signs/365LSC1.jpg', 'signs/365LSC2.jpg'],
[366, 0, 2, 0, 'signs/366LSC1.jpg', 'signs/366LSC2.jpg'],
[367, 0, 2, 0, 'signs/367LSC1.jpg', 'signs/367LSC2.jpg'],
[368, 0, 2, 0, 'signs/368LSC1.jpg', 'signs/368LSC2.jpg'],
[369, 0, 2, 0, 'signs/369LSC1.jpg', 'signs/369LSC2.jpg'],
[370, 0, 2, 0, 'signs/370LSC1.jpg', 'signs/370LSC2.jpg'],
[371, 0, 2, 0, 'signs/371LSC1.jpg', 'signs/371LSC2.jpg'],
[372, 0, 2, 0, 'signs/372LSC1.jpg', 'signs/372LSC2.jpg'],
[373, 0, 2, 0, 'signs/373LSC1.jpg', 'signs/373LSC2.jpg'],
[374, 0, 2, 0, 'signs/374LSC1.jpg', 'signs/374LSC2.jpg'],
[375, 0, 2, 0, 'signs/375LSC1.jpg', 'signs/375LSC2.jpg'],
[376, 0, 2, 0, 'signs/376LSC1.jpg', 'signs/376LSC2.jpg'],
[377, 0, 2, 0, 'signs/377LSC1.jpg', 'signs/377LSC2.jpg'],
[378, 0, 2, 0, 'signs/378LSC1.jpg', 'signs/378LSC2.jpg'],
[379, 0, 2, 0, 'signs/379LSC1.jpg', 'signs/379LSC2.jpg'],
[380, 0, 2, 0, 'signs/380LSC1.jpg', 'signs/380LSC2.jpg'],
[381, 0, 2, 0, 'signs/381LSC1.jpg', 'signs/381LSC2.jpg'],
[382, 0, 2, 0, 'signs/382LSC1.jpg', 'signs/382LSC2.jpg'],
[383, 0, 2, 0, 'signs/383LSC1.jpg', 'signs/383LSC2.jpg'],
[384, 0, 2, 0, 'signs/384LSC1.jpg', 'signs/384LSC2.jpg'],
[385, 0, 2, 0, 'signs/385LSC1.jpg', 'signs/385LSC2.jpg'],
[386, 0, 2, 0, 'signs/386LSC1.jpg', 'signs/386LSC2.jpg'],
[387, 0, 2, 0, 'signs/387LSC1.jpg', 'signs/387LSC2.jpg'],
[388, 0, 2, 0, 'signs/388LSC1.jpg', 'signs/388LSC2.jpg'],
[389, 0, 2, 0, 'signs/389LSC1.jpg', 'signs/389LSC2.jpg'],
[390, 0, 2, 0, 'signs/390LSC1.jpg', 'signs/390LSC2.jpg'],
[391, 0, 2, 0, 'signs/391LSC1.jpg', 'signs/391LSC2.jpg'],
[392, 0, 2, 0, 'signs/392LSC1.jpg', 'signs/392LSC2.jpg'],
[393, 0, 2, 0, 'signs/393LSC1.jpg', 'signs/393LSC2.jpg'],
[394, 0, 2, 0, 'signs/394LSC1.jpg', 'signs/394LSC2.jpg'],
[395, 0, 2, 0, 'signs/395LSC1.jpg', 'signs/395LSC2.jpg'],
[396, 0, 2, 0, 'signs/396LSC1.jpg', 'signs/396LSC2.jpg'],
[397, 0, 2, 0, 'signs/397LSC1.jpg', 'signs/397LSC2.jpg'],
[398, 0, 2, 0, 'signs/398LSC1.jpg', 'signs/398LSC2.jpg'],
[399, 0, 2, 0, 'signs/399LSC1.jpg', 'signs/399LSC2.jpg'],
[400, 0, 2, 0, 'signs/400LSC1.jpg', 'signs/400LSC2.jpg'],
[401, 0, 2, 0, 'signs/401LSC1.jpg', 'signs/401LSC2.jpg'],
[402, 0, 2, 0, 'signs/402LSC1.jpg', 'signs/402LSC2.jpg'],
[403, 0, 2, 0, 'signs/403LSC1.jpg', 'signs/403LSC2.jpg'],
[404, 0, 2, 0, 'signs/404LSC1.jpg', 'signs/404LSC2.jpg'],
[405, 0, 2, 0, 'signs/405LSC1.jpg', 'signs/405LSC2.jpg'],
[406, 0, 2, 0, 'signs/406LSC1.jpg', 'signs/406LSC2.jpg'],
[407, 0, 2, 0, 'signs/407LSC1.jpg', 'signs/407LSC2.jpg'],
[408, 0, 2, 0, 'signs/408LSC1.jpg', 'signs/408LSC2.jpg'],
[409, 0, 2, 0, 'signs/409LSC1.jpg', 'signs/409LSC2.jpg'],
[410, 0, 2, 0, 'signs/410LSC1.jpg', 'signs/410LSC2.jpg'],
[411, 0, 2, 0, 'signs/411LSC1.jpg', 'signs/411LSC2.jpg'],
[412, 0, 2, 0, 'signs/412LSC1.jpg', 'signs/412LSC2.jpg'],
[413, 0, 2, 0, 'signs/413LSC1.jpg', 'signs/413LSC2.jpg'],
[414, 0, 2, 0, 'signs/414LSC1.jpg', 'signs/414LSC2.jpg'],
[415, 0, 2, 0, 'signs/415LSC1.jpg', 'signs/415LSC2.jpg'],
[416, 0, 2, 0, 'signs/416LSC1.jpg', 'signs/416LSC2.jpg'],
[417, 0, 2, 0, 'signs/417LSC1.jpg', 'signs/417LSC2.jpg'],
[418, 0, 2, 0, 'signs/418LSC1.jpg', 'signs/418LSC2.jpg'],
[419, 0, 2, 0, 'signs/419LSC1.jpg', 'signs/419LSC2.jpg'],
[420, 0, 2, 0, 'signs/420LSC1.jpg', 'signs/420LSC2.jpg'],
[421, 0, 2, 0, 'signs/421LSC1.jpg', 'signs/421LSC2.jpg'],
[422, 0, 2, 0, 'signs/422LSC1.jpg', 'signs/422LSC2.jpg'],
[423, 0, 2, 0, 'signs/423LSC1.jpg', 'signs/423LSC2.jpg'],
[424, 0, 2, 0, 'signs/424LSC1.jpg', 'signs/424LSC2.jpg'],
[425, 0, 2, 0, 'signs/425LSC1.jpg', 'signs/425LSC2.jpg'],
[426, 0, 2, 0, 'signs/426LSC1.jpg', 'signs/426LSC2.jpg'],
[427, 0, 2, 0, 'signs/427LSC1.jpg', 'signs/427LSC2.jpg'],
[428, 0, 2, 0, 'signs/428LSC1.jpg', 'signs/428LSC2.jpg'],
[429, 0, 2, 0, 'signs/429LSC1.jpg', 'signs/429LSC2.jpg'],
[430, 0, 2, 0, 'signs/430LSC1.jpg', 'signs/430LSC2.jpg'],
[431, 0, 2, 0, 'signs/431LSC1.jpg', 'signs/431LSC2.jpg'],
[432, 0, 2, 0, 'signs/432LSC1.jpg', 'signs/432LSC2.jpg'],
[433, 0, 2, 0, 'signs/433LSC1.jpg', 'signs/433LSC2.jpg'],
[434, 0, 2, 0, 'signs/434LSC1.jpg', 'signs/434LSC2.jpg'],
[435, 0, 2, 0, 'signs/435LSC1.jpg', 'signs/435LSC2.jpg'],
[436, 0, 2, 0, 'signs/436LSC1.jpg', 'signs/436LSC2.jpg'],
[437, 0, 2, 0, 'signs/437LSC1.jpg', 'signs/437LSC2.jpg'],
[438, 0, 2, 0, 'signs/438LSC1.jpg', 'signs/438LSC2.jpg'],
[439, 0, 2, 0, 'signs/439LSC1.jpg', 'signs/439LSC2.jpg'],
[440, 0, 2, 0, 'signs/440LSC1.jpg', 'signs/440LSC2.jpg'],
[441, 0, 2, 0, 'signs/441LSC1.jpg', 'signs/441LSC2.jpg'],
[442, 0, 2, 0, 'signs/442LSC1.jpg', 'signs/442LSC2.jpg'],
[443, 0, 2, 0, 'signs/443LSC1.jpg', 'signs/443LSC2.jpg'],
[444, 0, 2, 0, 'signs/444LSC1.jpg', 'signs/444LSC2.jpg'],
[445, 0, 2, 0, 'signs/445LSC1.jpg', 'signs/445LSC2.jpg'],
[446, 0, 2, 0, 'signs/446LSC1.jpg', 'signs/446LSC2.jpg'],
[447, 0, 2, 0, 'signs/447LSC1.jpg', 'signs/447LSC2.jpg'],
[448, 0, 2, 0, 'signs/448LSC1.jpg', 'signs/448LSC2.jpg'],
[449, 0, 2, 0, 'signs/449LSC1.jpg', 'signs/449LSC2.jpg'],
[450, 0, 2, 0, 'signs/450LSC1.jpg', 'signs/450LSC2.jpg'],
[451, 0, 2, 0, 'signs/451LSC1.jpg', 'signs/451LSC2.jpg'],
[452, 0, 2, 0, 'signs/452LSC1.jpg', 'signs/452LSC2.jpg'],
[453, 0, 2, 0, 'signs/453LSC1.jpg', 'signs/453LSC2.jpg'],
[454, 0, 2, 0, 'signs/454LSC1.jpg', 'signs/454LSC2.jpg'],
[455, 0, 2, 0, 'signs/455LSC1.jpg', 'signs/455LSC2.jpg'],
[456, 0, 2, 0, 'signs/456LSC1.jpg', 'signs/456LSC2.jpg'],
[457, 0, 2, 0, 'signs/457LSC1.jpg', 'signs/457LSC2.jpg'],
[458, 0, 2, 0, 'signs/458LSC1.jpg', 'signs/458LSC2.jpg'],
[459, 0, 2, 0, 'signs/459LSC1.jpg', 'signs/459LSC2.jpg'],
[460, 0, 2, 0, 'signs/460LSC1.jpg', 'signs/460LSC2.jpg'],
[461, 0, 2, 0, 'signs/461LSC1.jpg', 'signs/461LSC2.jpg'],
[462, 0, 2, 0, 'signs/462LSC1.jpg', 'signs/462LSC2.jpg'],
[463, 0, 2, 0, 'signs/463LSC1.jpg', 'signs/463LSC2.jpg'],
[464, 0, 2, 0, 'signs/464LSC1.jpg', 'signs/464LSC2.jpg'],
[465, 0, 2, 0, 'signs/465LSC1.jpg', 'signs/465LSC2.jpg'],
[466, 0, 2, 0, 'signs/466LSC1.jpg', 'signs/466LSC2.jpg'],
[467, 0, 2, 0, 'signs/467LSC1.jpg', 'signs/467LSC2.jpg'],
[468, 0, 2, 0, 'signs/468LSC1.jpg', 'signs/468LSC2.jpg'],
[469, 0, 2, 0, 'signs/469LSC1.jpg', 'signs/469LSC2.jpg'],
[470, 0, 2, 0, 'signs/470LSC1.jpg', 'signs/470LSC2.jpg'],
[471, 0, 2, 0, 'signs/471LSC1.jpg', 'signs/471LSC2.jpg'],
[472, 0, 2, 0, 'signs/472LSC1.jpg', 'signs/472LSC2.jpg'],
[473, 0, 2, 0, 'signs/473LSC1.jpg', 'signs/473LSC2.jpg'],
[474, 0, 2, 0, 'signs/474LSC1.jpg', 'signs/474LSC2.jpg'],
[475, 0, 2, 0, 'signs/475LSC1.jpg', 'signs/475LSC2.jpg'],
[476, 0, 2, 0, 'signs/476LSC1.jpg', 'signs/476LSC2.jpg'],
[477, 0, 2, 0, 'signs/477LSC1.jpg', 'signs/477LSC2.jpg'],
[478, 0, 2, 0, 'signs/478LSC1.jpg', 'signs/478LSC2.jpg'],
[479, 0, 2, 0, 'signs/479LSC1.jpg', 'signs/479LSC2.jpg'],
[480, 0, 2, 0, 'signs/480LSC1.jpg', 'signs/480LSC2.jpg'],
[481, 0, 2, 0, 'signs/481LSC1.jpg', 'signs/481LSC2.jpg'],
[482, 0, 2, 0, 'signs/482LSC1.jpg', 'signs/482LSC2.jpg'],
[483, 0, 2, 0, 'signs/483LSC1.jpg', 'signs/483LSC2.jpg'],
[484, 0, 2, 0, 'signs/484LSC1.jpg', 'signs/484LSC2.jpg'],
[485, 0, 2, 0, 'signs/485LSC1.jpg', 'signs/485LSC2.jpg'],
[486, 0, 2, 0, 'signs/486LSC1.jpg', 'signs/486LSC2.jpg'],
[487, 0, 2, 0, 'signs/487LSC1.jpg', 'signs/487LSC2.jpg'],
[488, 0, 2, 0, 'signs/488LSC1.jpg', 'signs/488LSC2.jpg'],
[489, 0, 2, 0, 'signs/489LSC1.jpg', 'signs/489LSC2.jpg'],
[490, 0, 2, 0, 'signs/490LSC1.jpg', 'signs/490LSC2.jpg'],
[491, 0, 2, 0, 'signs/491LSC1.jpg', 'signs/491LSC2.jpg'],
[492, 0, 2, 0, 'signs/492LSC1.jpg', 'signs/492LSC2.jpg'],
[493, 0, 2, 0, 'signs/493LSC1.jpg', 'signs/493LSC2.jpg'],
[494, 0, 2, 0, 'signs/494LSC1.jpg', 'signs/494LSC2.jpg'],
[495, 0, 2, 0, 'signs/495LSC1.jpg', 'signs/495LSC2.jpg'],
[496, 0, 2, 0, 'signs/496LSC1.jpg', 'signs/496LSC2.jpg'],
[497, 0, 2, 0, 'signs/497LSC1.jpg', 'signs/497LSC2.jpg'],
[498, 0, 2, 0, 'signs/498LSC1.jpg', 'signs/498LSC2.jpg'],
[499, 0, 2, 0, 'signs/499LSC1.jpg', 'signs/499LSC2.jpg'],
[500, 0, 2, 0, 'signs/500LSC1.jpg', 'signs/500LSC2.jpg'],
[501, 0, 2, 0, 'signs/501LSC1.jpg', 'signs/501LSC2.jpg'],
[502, 0, 2, 0, 'signs/502LSC1.jpg', 'signs/502LSC2.jpg'],
[503, 0, 2, 0, 'signs/503LSC1.jpg', 'signs/503LSC2.jpg'],
[504, 0, 2, 0, 'signs/504LSC1.jpg', 'signs/504LSC2.jpg'],
[505, 0, 2, 0, 'signs/505LSC1.jpg', 'signs/505LSC2.jpg'],
[506, 0, 2, 0, 'signs/506LSC1.jpg', 'signs/506LSC2.jpg'],
[507, 0, 2, 0, 'signs/507LSC1.jpg', 'signs/507LSC2.jpg'],
[508, 0, 2, 0, 'signs/508LSC1.jpg', 'signs/508LSC2.jpg'],
[509, 0, 2, 0, 'signs/509LSC1.jpg', 'signs/509LSC2.jpg'],
[510, 0, 2, 0, 'signs/510LSC1.jpg', 'signs/510LSC2.jpg'],
[511, 0, 2, 0, 'signs/511LSC1.jpg', 'signs/511LSC2.jpg'],
[512, 0, 2, 0, 'signs/512LSC1.jpg', 'signs/512LSC2.jpg'],
[513, 0, 2, 0, 'signs/513LSC1.jpg', 'signs/513LSC2.jpg'],
[514, 0, 2, 0, 'signs/514LSC1.jpg', 'signs/514LSC2.jpg'],
[515, 0, 2, 0, 'signs/515LSC1.jpg', 'signs/515LSC2.jpg'],
[516, 0, 2, 0, 'signs/516LSC1.jpg', 'signs/516LSC2.jpg'],
[517, 0, 2, 0, 'signs/517LSC1.jpg', 'signs/517LSC2.jpg'],
[518, 0, 2, 0, 'signs/518LSC1.jpg', 'signs/518LSC2.jpg'],
[519, 0, 2, 0, 'signs/519LSC1.jpg', 'signs/519LSC2.jpg'],
[520, 0, 2, 0, 'signs/520LSC1.jpg', 'signs/520LSC2.jpg'],
[521, 0, 2, 0, 'signs/521LSC1.jpg', 'signs/521LSC2.jpg'],
[522, 0, 2, 0, 'signs/522LSC1.jpg', 'signs/522LSC2.jpg'],
[523, 0, 2, 0, 'signs/523LSC1.jpg', 'signs/523LSC2.jpg'],
[524, 0, 2, 0, 'signs/524LSC1.jpg', 'signs/524LSC2.jpg'],
[525, 0, 2, 0, 'signs/525LSC1.jpg', 'signs/525LSC2.jpg'],
[526, 0, 2, 0, 'signs/526LSC1.jpg', 'signs/526LSC2.jpg'],
[527, 0, 2, 0, 'signs/527LSC1.jpg', 'signs/527LSC2.jpg'],
[528, 0, 2, 0, 'signs/528LSC1.jpg', 'signs/528LSC2.jpg'],
[529, 0, 2, 0, 'signs/529LSC1.jpg', 'signs/529LSC2.jpg'],
[530, 0, 2, 0, 'signs/530LSC1.jpg', 'signs/530LSC2.jpg'],
[531, 0, 2, 0, 'signs/531LSC1.jpg', 'signs/531LSC2.jpg'],
[532, 0, 2, 0, 'signs/532LSC1.jpg', 'signs/532LSC2.jpg'],
[533, 0, 2, 0, 'signs/533LSC1.jpg', 'signs/533LSC2.jpg'],
[534, 0, 2, 0, 'signs/534LSC1.jpg', 'signs/534LSC2.jpg'],
[535, 0, 2, 0, 'signs/535LSC1.jpg', 'signs/535LSC2.jpg'],
[536, 0, 2, 0, 'signs/536LSC1.jpg', 'signs/536LSC2.jpg'],
[537, 0, 2, 0, 'signs/537LSC1.jpg', 'signs/537LSC2.jpg'],
[538, 0, 2, 0, 'signs/538LSC1.jpg', 'signs/538LSC2.jpg'],
[539, 0, 2, 0, 'signs/539LSC1.jpg', 'signs/539LSC2.jpg'],
[540, 0, 2, 0, 'signs/540LSC1.jpg', 'signs/540LSC2.jpg'],
[541, 0, 2, 0, 'signs/541LSC1.jpg', 'signs/541LSC2.jpg'],
[542, 0, 2, 0, 'signs/542LSC1.jpg', 'signs/542LSC2.jpg'],
[543, 0, 2, 0, 'signs/543LSC1.jpg', 'signs/543LSC2.jpg'],
[544, 0, 2, 0, 'signs/544LSC1.jpg', 'signs/544LSC2.jpg'],
[545, 0, 2, 0, 'signs/545LSC1.jpg', 'signs/545LSC2.jpg'],
[546, 0, 2, 0, 'signs/546LSC1.jpg', 'signs/546LSC2.jpg'],
[547, 0, 2, 0, 'signs/547LSC1.jpg', 'signs/547LSC2.jpg'],
[548, 0, 2, 0, 'signs/548LSC1.jpg', 'signs/548LSC2.jpg'],
[549, 0, 2, 0, 'signs/549LSC1.jpg', 'signs/549LSC2.jpg'],
[550, 0, 2, 0, 'signs/550LSC1.jpg', 'signs/550LSC2.jpg'],
[551, 0, 2, 0, 'signs/551LSC1.jpg', 'signs/551LSC2.jpg'],
[552, 0, 2, 0, 'signs/552LSC1.jpg', 'signs/552LSC2.jpg'],
[553, 0, 2, 0, 'signs/553LSC1.jpg', 'signs/553LSC2.jpg'],
[554, 0, 2, 0, 'signs/554LSC1.jpg', 'signs/554LSC2.jpg'],
[555, 0, 2, 0, 'signs/555LSC1.jpg', 'signs/555LSC2.jpg'],
[556, 0, 2, 0, 'signs/556LSC1.jpg', 'signs/556LSC2.jpg'],
[557, 0, 2, 0, 'signs/557LSC1.jpg', 'signs/557LSC2.jpg'],
[558, 0, 2, 0, 'signs/558LSC1.jpg', 'signs/558LSC2.jpg'],
[559, 0, 2, 0, 'signs/559LSC1.jpg', 'signs/559LSC2.jpg'],
[560, 0, 2, 0, 'signs/560LSC1.jpg', 'signs/560LSC2.jpg'],
[561, 0, 2, 0, 'signs/561LSC1.jpg', 'signs/561LSC2.jpg'],
[562, 0, 2, 0, 'signs/562LSC1.jpg', 'signs/562LSC2.jpg'],
[563, 0, 2, 0, 'signs/563LSC1.jpg', 'signs/563LSC2.jpg'],
[564, 0, 2, 0, 'signs/564LSC1.jpg', 'signs/564LSC2.jpg'],
[565, 0, 2, 0, 'signs/565LSC1.jpg', 'signs/565LSC2.jpg'],
[566, 0, 2, 0, 'signs/566LSC1.jpg', 'signs/566LSC2.jpg'],
[567, 0, 2, 0, 'signs/567LSC1.jpg', 'signs/567LSC2.jpg'],
[568, 0, 2, 0, 'signs/568LSC1.jpg', 'signs/568LSC2.jpg'],
[569, 0, 2, 0, 'signs/569LSC1.jpg', 'signs/569LSC2.jpg'],
[570, 0, 2, 0, 'signs/570LSC1.jpg', 'signs/570LSC2.jpg'],
[571, 0, 2, 0, 'signs/571LSC1.jpg', 'signs/571LSC2.jpg'],
[572, 0, 2, 0, 'signs/572LSC1.jpg', 'signs/572LSC2.jpg'],
[573, 0, 2, 0, 'signs/573LSC1.jpg', 'signs/573LSC2.jpg'],
[574, 0, 2, 0, 'signs/574LSC1.jpg', 'signs/574LSC2.jpg'],
[575, 0, 2, 0, 'signs/575LSC1.jpg', 'signs/575LSC2.jpg'],
[576, 0, 2, 0, 'signs/576LSC1.jpg', 'signs/576LSC2.jpg'],
[577, 0, 2, 0, 'signs/577LSC1.jpg', 'signs/577LSC2.jpg'],
[578, 0, 2, 0, 'signs/578LSC1.jpg', 'signs/578LSC2.jpg'],
[579, 0, 2, 0, 'signs/579LSC1.jpg', 'signs/579LSC2.jpg'],
[580, 0, 2, 0, 'signs/580LSC1.jpg', 'signs/580LSC2.jpg'],
[581, 0, 2, 0, 'signs/581LSC1.jpg', 'signs/581LSC2.jpg'],
[582, 0, 2, 0, 'signs/582LSC1.jpg', 'signs/582LSC2.jpg'],
[583, 0, 2, 0, 'signs/583LSC1.jpg', 'signs/583LSC2.jpg'],
[584, 0, 2, 0, 'signs/584LSC1.jpg', 'signs/584LSC2.jpg'],
[585, 0, 2, 0, 'signs/585LSC1.jpg', 'signs/585LSC2.jpg'],
[586, 0, 2, 0, 'signs/586LSC1.jpg', 'signs/586LSC2.jpg'],
[587, 0, 2, 0, 'signs/587LSC1.jpg', 'signs/587LSC2.jpg'],
[588, 0, 2, 0, 'signs/588LSC1.jpg', 'signs/588LSC2.jpg'],
[589, 0, 2, 0, 'signs/589LSC1.jpg', 'signs/589LSC2.jpg'],
[590, 0, 2, 0, 'signs/590LSC1.jpg', 'signs/590LSC2.jpg'],
[591, 0, 2, 0, 'signs/591LSC1.jpg', 'signs/591LSC2.jpg'],
[592, 0, 2, 0, 'signs/592LSC1.jpg', 'signs/592LSC2.jpg'],
[593, 0, 2, 0, 'signs/593LSC1.jpg', 'signs/593LSC2.jpg'],
[594, 0, 2, 0, 'signs/594LSC1.jpg', 'signs/594LSC2.jpg'],
[595, 0, 2, 0, 'signs/595LSC1.jpg', 'signs/595LSC2.jpg'],
[596, 0, 2, 0, 'signs/596LSC1.jpg', 'signs/596LSC2.jpg'],
[597, 0, 2, 0, 'signs/597LSC1.jpg', 'signs/597LSC2.jpg'],
[598, 0, 2, 0, 'signs/598LSC1.jpg', 'signs/598LSC2.jpg'],
[599, 0, 2, 0, 'signs/599LSC1.jpg', 'signs/599LSC2.jpg'],
[600, 0, 2, 0, 'signs/600LSC1.jpg', 'signs/600LSC2.jpg'],
[601, 0, 2, 0, 'signs/601LSC1.jpg', 'signs/601LSC2.jpg'],
[602, 0, 2, 0, 'signs/602LSC1.jpg', 'signs/602LSC2.jpg'],
[603, 0, 2, 0, 'signs/603LSC1.jpg', 'signs/603LSC2.jpg'],
[604, 0, 2, 0, 'signs/604LSC1.jpg', 'signs/604LSC2.jpg'],
[605, 0, 2, 0, 'signs/605LSC1.jpg', 'signs/605LSC2.jpg'],
[606, 0, 2, 0, 'signs/606LSC1.jpg', 'signs/606LSC2.jpg'],
[607, 0, 2, 0, 'signs/607LSC1.jpg', 'signs/607LSC2.jpg'],
[608, 0, 2, 0, 'signs/608LSC1.jpg', 'signs/608LSC2.jpg'],
[609, 0, 2, 0, 'signs/609LSC1.jpg', 'signs/609LSC2.jpg'],
[610, 0, 2, 0, 'signs/610LSC1.jpg', 'signs/610LSC2.jpg'],
[611, 0, 2, 0, 'signs/611LSC1.jpg', 'signs/611LSC2.jpg'],
[612, 0, 2, 0, 'signs/612LSC1.jpg', 'signs/612LSC2.jpg'],
[613, 0, 2, 0, 'signs/613LSC1.jpg', 'signs/613LSC2.jpg'],
[614, 0, 2, 0, 'signs/614LSC1.jpg', 'signs/614LSC2.jpg'],
[615, 0, 2, 0, 'signs/615LSC1.jpg', 'signs/615LSC2.jpg'],
[616, 0, 2, 0, 'signs/616LSC1.jpg', 'signs/616LSC2.jpg'],
[617, 0, 2, 0, 'signs/617LSC1.jpg', 'signs/617LSC2.jpg'],
[618, 0, 2, 0, 'signs/618LSC1.jpg', 'signs/618LSC2.jpg'],
[619, 0, 2, 0, 'signs/619LSC1.jpg', 'signs/619LSC2.jpg'],
[620, 0, 2, 0, 'signs/620LSC1.jpg', 'signs/620LSC2.jpg'],
[621, 0, 2, 0, 'signs/621LSC1.jpg', 'signs/621LSC2.jpg'],
[622, 0, 2, 0, 'signs/622LSC1.jpg', 'signs/622LSC2.jpg'],
[623, 0, 2, 0, 'signs/623LSC1.jpg', 'signs/623LSC2.jpg'],
[624, 0, 2, 0, 'signs/624LSC1.jpg', 'signs/624LSC2.jpg'],
[625, 0, 2, 0, 'signs/625LSC1.jpg', 'signs/625LSC2.jpg'],
[626, 0, 2, 0, 'signs/626LSC1.jpg', 'signs/626LSC2.jpg'],
[627, 0, 2, 0, 'signs/627LSC1.jpg', 'signs/627LSC2.jpg'],
[628, 0, 2, 0, 'signs/628LSC1.jpg', 'signs/628LSC2.jpg'],
[629, 0, 2, 0, 'signs/629LSC1.jpg', 'signs/629LSC2.jpg'],
[630, 0, 2, 0, 'signs/630LSC1.jpg', 'signs/630LSC2.jpg'],
[631, 0, 2, 0, 'signs/631LSC1.jpg', 'signs/631LSC2.jpg'],
[632, 0, 2, 0, 'signs/632LSC1.jpg', 'signs/632LSC2.jpg'],
[633, 0, 2, 0, 'signs/633LSC1.jpg', 'signs/633LSC2.jpg'],
[634, 0, 2, 0, 'signs/634LSC1.jpg', 'signs/634LSC2.jpg'],
[635, 0, 2, 0, 'signs/635LSC1.jpg', 'signs/635LSC2.jpg'],
[636, 0, 2, 0, 'signs/636LSC1.jpg', 'signs/636LSC2.jpg'],
[637, 0, 2, 0, 'signs/637LSC1.jpg', 'signs/637LSC2.jpg'],
[638, 0, 2, 0, 'signs/638LSC1.jpg', 'signs/638LSC2.jpg'],
[639, 0, 2, 0, 'signs/639LSC1.jpg', 'signs/639LSC2.jpg'],
[640, 0, 2, 0, 'signs/640LSC1.jpg', 'signs/640LSC2.jpg'],
[641, 0, 2, 0, 'signs/641LSC1.jpg', 'signs/641LSC2.jpg'],
[642, 0, 2, 0, 'signs/642LSC1.jpg', 'signs/642LSC2.jpg'],
[643, 0, 2, 0, 'signs/643LSC1.jpg', 'signs/643LSC2.jpg'],
[644, 0, 2, 0, 'signs/644LSC1.jpg', 'signs/644LSC2.jpg'],
[645, 0, 2, 0, 'signs/645LSC1.jpg', 'signs/645LSC2.jpg'],
[646, 0, 2, 0, 'signs/646LSC1.jpg', 'signs/646LSC2.jpg'],
[647, 0, 2, 0, 'signs/647LSC1.jpg', 'signs/647LSC2.jpg'],
[648, 0, 2, 0, 'signs/648LSC1.jpg', 'signs/648LSC2.jpg'],
[649, 0, 2, 0, 'signs/649LSC1.jpg', 'signs/649LSC2.jpg'],
[650, 0, 2, 0, 'signs/650LSC1.jpg', 'signs/650LSC2.jpg'],
[651, 0, 2, 0, 'signs/651LSC1.jpg', 'signs/651LSC2.jpg'],
[652, 0, 2, 0, 'signs/652LSC1.jpg', 'signs/652LSC2.jpg'],
[653, 0, 2, 0, 'signs/653LSC1.jpg', 'signs/653LSC2.jpg'],
[654, 0, 2, 0, 'signs/654LSC1.jpg', 'signs/654LSC2.jpg'],
[655, 0, 2, 0, 'signs/655LSC1.jpg', 'signs/655LSC2.jpg'],
[656, 0, 2, 0, 'signs/656LSC1.jpg', 'signs/656LSC2.jpg'],
[657, 0, 2, 0, 'signs/657LSC1.jpg', 'signs/657LSC2.jpg'],
[658, 0, 2, 0, 'signs/658LSC1.jpg', 'signs/658LSC2.jpg'],
[659, 0, 2, 0, 'signs/659LSC1.jpg', 'signs/659LSC2.jpg'],
[660, 0, 2, 0, 'signs/660LSC1.jpg', 'signs/660LSC2.jpg'],
[661, 0, 2, 0, 'signs/661LSC1.jpg', 'signs/661LSC2.jpg'],
[662, 0, 2, 0, 'signs/662LSC1.jpg', 'signs/662LSC2.jpg'],
[663, 0, 2, 0, 'signs/663LSC1.jpg', 'signs/663LSC2.jpg'],
[664, 0, 2, 0, 'signs/664LSC1.jpg', 'signs/664LSC2.jpg'],
[665, 0, 2, 0, 'signs/665LSC1.jpg', 'signs/665LSC2.jpg'],
[666, 0, 2, 0, 'signs/666LSC1.jpg', 'signs/666LSC2.jpg'],
[667, 0, 2, 0, 'signs/667LSC1.jpg', 'signs/667LSC2.jpg'],
[668, 0, 2, 0, 'signs/668LSC1.jpg', 'signs/668LSC2.jpg'],
[669, 0, 2, 0, 'signs/669LSC1.jpg', 'signs/669LSC2.jpg'],
[670, 0, 2, 0, 'signs/670LSC1.jpg', 'signs/670LSC2.jpg'],
[671, 0, 2, 0, 'signs/671LSC1.jpg', 'signs/671LSC2.jpg'],
[672, 0, 2, 0, 'signs/672LSC1.jpg', 'signs/672LSC2.jpg'],
[673, 0, 2, 0, 'signs/673LSC1.jpg', 'signs/673LSC2.jpg'],
[674, 0, 2, 0, 'signs/674LSC1.jpg', 'signs/674LSC2.jpg'],
[675, 0, 2, 0, 'signs/675LSC1.jpg', 'signs/675LSC2.jpg'],
[676, 0, 2, 0, 'signs/676LSC1.jpg', 'signs/676LSC2.jpg'],
[677, 0, 2, 0, 'signs/677LSC1.jpg', 'signs/677LSC2.jpg'],
[678, 0, 2, 0, 'signs/678LSC1.jpg', 'signs/678LSC2.jpg'],
[679, 0, 2, 0, 'signs/679LSC1.jpg', 'signs/679LSC2.jpg'],
[680, 0, 2, 0, 'signs/680LSC1.jpg', 'signs/680LSC2.jpg'],
[681, 0, 2, 0, 'signs/681LSC1.jpg', 'signs/681LSC2.jpg'],
[682, 0, 2, 0, 'signs/682LSC1.jpg', 'signs/682LSC2.jpg'],
[683, 0, 2, 0, 'signs/683LSC1.jpg', 'signs/683LSC2.jpg'],
[684, 0, 2, 0, 'signs/684LSC1.jpg', 'signs/684LSC2.jpg'],
[685, 0, 2, 0, 'signs/685LSC1.jpg', 'signs/685LSC2.jpg'],
[686, 0, 2, 0, 'signs/686LSC1.jpg', 'signs/686LSC2.jpg'],
[687, 0, 2, 0, 'signs/687LSC1.jpg', 'signs/687LSC2.jpg'],
[688, 0, 2, 0, 'signs/688LSC1.jpg', 'signs/688LSC2.jpg'],
[689, 0, 2, 0, 'signs/689LSC1.jpg', 'signs/689LSC2.jpg'],
[690, 0, 2, 0, 'signs/690LSC1.jpg', 'signs/690LSC2.jpg'],
[691, 0, 2, 0, 'signs/691LSC1.jpg', 'signs/691LSC2.jpg'],
[692, 0, 2, 0, 'signs/692LSC1.jpg', 'signs/692LSC2.jpg'],
[693, 0, 2, 0, 'signs/693LSC1.jpg', 'signs/693LSC2.jpg'],
[694, 0, 2, 0, 'signs/694LSC1.jpg', 'signs/694LSC2.jpg'],
[695, 0, 2, 0, 'signs/695LSC1.jpg', 'signs/695LSC2.jpg'],
[696, 0, 2, 0, 'signs/696LSC1.jpg', 'signs/696LSC2.jpg'],
[697, 0, 2, 0, 'signs/697LSC1.jpg', 'signs/697LSC2.jpg'],
[698, 0, 2, 0, 'signs/698LSC1.jpg', 'signs/698LSC2.jpg'],
[699, 0, 2, 0, 'signs/699LSC1.jpg', 'signs/699LSC2.jpg'],
[700, 0, 2, 0, 'signs/700LSC1.jpg', 'signs/700LSC2.jpg'],
[701, 0, 2, 0, 'signs/701LSC1.jpg', 'signs/701LSC2.jpg'],
[702, 0, 2, 0, 'signs/702LSC1.jpg', 'signs/702LSC2.jpg'],
[703, 0, 2, 0, 'signs/703LSC1.jpg', 'signs/703LSC2.jpg'],
[704, 0, 2, 0, 'signs/704LSC1.jpg', 'signs/704LSC2.jpg'],
[705, 0, 2, 0, 'signs/705LSC1.jpg', 'signs/705LSC2.jpg'],
[706, 0, 2, 0, 'signs/706LSC1.jpg', 'signs/706LSC2.jpg'],
[707, 0, 2, 0, 'signs/707LSC1.jpg', 'signs/707LSC2.jpg'],
[708, 0, 2, 0, 'signs/708LSC1.jpg', 'signs/708LSC2.jpg'],
[709, 0, 2, 0, 'signs/709LSC1.jpg', 'signs/709LSC2.jpg'],
[710, 0, 2, 0, 'signs/710LSC1.jpg', 'signs/710LSC2.jpg'],
[711, 0, 2, 0, 'signs/711LSC1.jpg', 'signs/711LSC2.jpg'],
[712, 0, 2, 0, 'signs/712LSC1.jpg', 'signs/712LSC2.jpg'],
[713, 0, 2, 0, 'signs/713LSC1.jpg', 'signs/713LSC2.jpg'],
[714, 0, 2, 0, 'signs/714LSC1.jpg', 'signs/714LSC2.jpg'],
[715, 0, 2, 0, 'signs/715LSC1.jpg', 'signs/715LSC2.jpg'],
[716, 0, 2, 0, 'signs/716LSC1.jpg', 'signs/716LSC2.jpg'],
[717, 0, 2, 0, 'signs/717LSC1.jpg', 'signs/717LSC2.jpg'],
[718, 0, 2, 0, 'signs/718LSC1.jpg', 'signs/718LSC2.jpg'],
[719, 0, 2, 0, 'signs/719LSC1.jpg', 'signs/719LSC2.jpg'],
[720, 0, 2, 0, 'signs/720LSC1.jpg', 'signs/720LSC2.jpg'],
[721, 0, 2, 0, 'signs/721LSC1.jpg', 'signs/721LSC2.jpg'],
[722, 0, 2, 0, 'signs/722LSC1.jpg', 'signs/722LSC2.jpg'],
[723, 0, 2, 0, 'signs/723LSC1.jpg', 'signs/723LSC2.jpg'],
[724, 0, 2, 0, 'signs/724LSC1.jpg', 'signs/724LSC2.jpg'],
[725, 0, 2, 0, 'signs/725LSC1.jpg', 'signs/725LSC2.jpg'],
[726, 0, 2, 0, 'signs/726LSC1.jpg', 'signs/726LSC2.jpg'],
[727, 0, 2, 0, 'signs/727LSC1.jpg', 'signs/727LSC2.jpg'],
[728, 0, 2, 0, 'signs/728LSC1.jpg', 'signs/728LSC2.jpg'],
[729, 0, 2, 0, 'signs/729LSC1.jpg', 'signs/729LSC2.jpg'],
[730, 0, 2, 0, 'signs/730LSC1.jpg', 'signs/730LSC2.jpg'],
[731, 0, 2, 0, 'signs/731LSC1.jpg', 'signs/731LSC2.jpg'],
[732, 0, 2, 0, 'signs/732LSC1.jpg', 'signs/732LSC2.jpg'],
[733, 0, 2, 0, 'signs/733LSC1.jpg', 'signs/733LSC2.jpg'],
[734, 0, 2, 0, 'signs/734LSC1.jpg', 'signs/734LSC2.jpg'],
[735, 0, 2, 0, 'signs/735LSC1.jpg', 'signs/735LSC2.jpg'],
[736, 0, 2, 0, 'signs/736LSC1.jpg', 'signs/736LSC2.jpg'],
[737, 0, 2, 0, 'signs/737LSC1.jpg', 'signs/737LSC2.jpg'],
[738, 0, 2, 0, 'signs/738LSC1.jpg', 'signs/738LSC2.jpg'],
[739, 0, 2, 0, 'signs/739LSC1.jpg', 'signs/739LSC2.jpg'],
[740, 0, 2, 0, 'signs/740LSC1.jpg', 'signs/740LSC2.jpg'],
[741, 0, 2, 0, 'signs/741LSC1.jpg', 'signs/741LSC2.jpg'],
[742, 0, 2, 0, 'signs/742LSC1.jpg', 'signs/742LSC2.jpg'],
[743, 0, 2, 0, 'signs/743LSC1.jpg', 'signs/743LSC2.jpg'],
[744, 0, 2, 0, 'signs/744LSC1.jpg', 'signs/744LSC2.jpg'],
[745, 0, 2, 0, 'signs/745LSC1.jpg', 'signs/745LSC2.jpg'],
[746, 0, 2, 0, 'signs/746LSC1.jpg', 'signs/746LSC2.jpg'],
[747, 0, 2, 0, 'signs/747LSC1.jpg', 'signs/747LSC2.jpg'],
[748, 0, 2, 0, 'signs/748LSC1.jpg', 'signs/748LSC2.jpg'],
[749, 0, 2, 0, 'signs/749LSC1.jpg', 'signs/749LSC2.jpg'],
[750, 0, 2, 0, 'signs/750LSC1.jpg', 'signs/750LSC2.jpg'],
[751, 0, 2, 0, 'signs/751LSC1.jpg', 'signs/751LSC2.jpg'],
[752, 0, 2, 0, 'signs/752LSC1.jpg', 'signs/752LSC2.jpg'],
[753, 0, 2, 0, 'signs/753LSC1.jpg', 'signs/753LSC2.jpg'],
[754, 0, 2, 0, 'signs/754LSC1.jpg', 'signs/754LSC2.jpg'],
[755, 0, 2, 0, 'signs/755LSC1.jpg', 'signs/755LSC2.jpg'],
[756, 0, 2, 0, 'signs/756LSC1.jpg', 'signs/756LSC2.jpg'],
[757, 0, 2, 0, 'signs/757LSC1.jpg', 'signs/757LSC2.jpg'],
[758, 0, 2, 0, 'signs/758LSC1.jpg', 'signs/758LSC2.jpg'],
[759, 0, 2, 0, 'signs/759LSC1.jpg', 'signs/759LSC2.jpg'],
[760, 0, 2, 0, 'signs/760LSC1.jpg', 'signs/760LSC2.jpg'],
[761, 0, 2, 0, 'signs/761LSC1.jpg', 'signs/761LSC2.jpg'],
[762, 0, 2, 0, 'signs/762LSC1.jpg', 'signs/762LSC2.jpg'],
[763, 0, 2, 0, 'signs/763LSC1.jpg', 'signs/763LSC2.jpg'],
[764, 0, 2, 0, 'signs/764LSC1.jpg', 'signs/764LSC2.jpg'],
[765, 0, 2, 0, 'signs/765LSC1.jpg', 'signs/765LSC2.jpg'],
[766, 0, 2, 0, 'signs/766LSC1.jpg', 'signs/766LSC2.jpg'],
[767, 0, 2, 0, 'signs/767LSC1.jpg', 'signs/767LSC2.jpg'],
[768, 0, 2, 0, 'signs/768LSC1.jpg', 'signs/768LSC2.jpg'],
[769, 0, 2, 0, 'signs/769LSC1.jpg', 'signs/769LSC2.jpg'],
[770, 0, 2, 0, 'signs/770LSC1.jpg', 'signs/770LSC2.jpg'],
[771, 0, 2, 0, 'signs/771LSC1.jpg', 'signs/771LSC2.jpg'],
[772, 0, 2, 0, 'signs/772LSC1.jpg', 'signs/772LSC2.jpg'],
[773, 0, 2, 0, 'signs/773LSC1.jpg', 'signs/773LSC2.jpg'],
[774, 0, 2, 0, 'signs/774LSC1.jpg', 'signs/774LSC2.jpg'],
[775, 0, 2, 0, 'signs/775LSC1.jpg', 'signs/775LSC2.jpg'],
[776, 0, 2, 0, 'signs/776LSC1.jpg', 'signs/776LSC2.jpg'],
[777, 0, 2, 0, 'signs/777LSC1.jpg', 'signs/777LSC2.jpg'],
[778, 0, 2, 0, 'signs/778LSC1.jpg', 'signs/778LSC2.jpg'],
[779, 0, 2, 0, 'signs/779LSC1.jpg', 'signs/779LSC2.jpg'],
[780, 0, 2, 0, 'signs/780LSC1.jpg', 'signs/780LSC2.jpg'],
[781, 0, 2, 0, 'signs/781LSC1.jpg', 'signs/781LSC2.jpg'],
[782, 0, 2, 0, 'signs/782LSC1.jpg', 'signs/782LSC2.jpg'],
[783, 0, 2, 0, 'signs/783LSC1.jpg', 'signs/783LSC2.jpg'],
[784, 0, 2, 0, 'signs/784LSC1.jpg', 'signs/784LSC2.jpg'],
[785, 0, 2, 0, 'signs/785LSC1.jpg', 'signs/785LSC2.jpg'],
[786, 0, 2, 0, 'signs/786LSC1.jpg', 'signs/786LSC2.jpg'],
[787, 0, 2, 0, 'signs/787LSC1.jpg', 'signs/787LSC2.jpg'],
[788, 0, 2, 0, 'signs/788LSC1.jpg', 'signs/788LSC2.jpg'],
[789, 0, 2, 0, 'signs/789LSC1.jpg', 'signs/789LSC2.jpg'],
[790, 0, 2, 0, 'signs/790LSC1.jpg', 'signs/790LSC2.jpg'],
[791, 0, 2, 0, 'signs/791LSC1.jpg', 'signs/791LSC2.jpg'],
[792, 0, 2, 0, 'signs/792LSC1.jpg', 'signs/792LSC2.jpg'],
[793, 0, 2, 0, 'signs/793LSC1.jpg', 'signs/793LSC2.jpg'],
[794, 0, 2, 0, 'signs/794LSC1.jpg', 'signs/794LSC2.jpg'],
[795, 0, 2, 0, 'signs/795LSC1.jpg', 'signs/795LSC2.jpg'],
[796, 0, 2, 0, 'signs/796LSC1.jpg', 'signs/796LSC2.jpg'],
[797, 0, 2, 0, 'signs/797LSC1.jpg', 'signs/797LSC2.jpg'],
[798, 0, 2, 0, 'signs/798LSC1.jpg', 'signs/798LSC2.jpg'],
[799, 0, 2, 0, 'signs/799LSC1.jpg', 'signs/799LSC2.jpg'],
[800, 0, 2, 0, 'signs/800LSC1.jpg', 'signs/800LSC2.jpg'],
[801, 0, 2, 0, 'signs/801LSC1.jpg', 'signs/801LSC2.jpg'],
[802, 0, 2, 0, 'signs/802LSC1.jpg', 'signs/802LSC2.jpg'],
[803, 0, 2, 0, 'signs/803LSC1.jpg', 'signs/803LSC2.jpg'],
[804, 0, 2, 0, 'signs/804LSC1.jpg', 'signs/804LSC2.jpg'],
[805, 0, 2, 0, 'signs/805LSC1.jpg', 'signs/805LSC2.jpg'],
[806, 0, 2, 0, 'signs/806LSC1.jpg', 'signs/806LSC2.jpg'],
[807, 0, 2, 0, 'signs/807LSC1.jpg', 'signs/807LSC2.jpg'],
[808, 0, 2, 0, 'signs/808LSC1.jpg', 'signs/808LSC2.jpg'],
[809, 0, 2, 0, 'signs/809LSC1.jpg', 'signs/809LSC2.jpg'],
[810, 0, 2, 0, 'signs/810LSC1.jpg', 'signs/810LSC2.jpg'],
[811, 0, 2, 0, 'signs/811LSC1.jpg', 'signs/811LSC2.jpg'],
[812, 0, 2, 0, 'signs/812LSC1.jpg', 'signs/812LSC2.jpg'],
[813, 0, 2, 0, 'signs/813LSC1.jpg', 'signs/813LSC2.jpg'],
[814, 0, 2, 0, 'signs/814LSC1.jpg', 'signs/814LSC2.jpg'],
[815, 0, 2, 0, 'signs/815LSC1.jpg', 'signs/815LSC2.jpg'],
[816, 0, 2, 0, 'signs/816LSC1.jpg', 'signs/816LSC2.jpg'],
[817, 0, 2, 0, 'signs/817LSC1.jpg', 'signs/817LSC2.jpg'],
[818, 0, 2, 0, 'signs/818LSC1.jpg', 'signs/818LSC2.jpg'],
[819, 0, 2, 0, 'signs/819LSC1.jpg', 'signs/819LSC2.jpg'],
[820, 0, 2, 0, 'signs/820LSC1.jpg', 'signs/820LSC2.jpg'],
[821, 0, 2, 0, 'signs/821LSC1.jpg', 'signs/821LSC2.jpg'],
[822, 0, 2, 0, 'signs/822LSC1.jpg', 'signs/822LSC2.jpg'],
[823, 0, 2, 0, 'signs/823LSC1.jpg', 'signs/823LSC2.jpg'],
[824, 0, 2, 0, 'signs/824LSC1.jpg', 'signs/824LSC2.jpg'],
[825, 0, 2, 0, 'signs/825LSC1.jpg', 'signs/825LSC2.jpg'],
[826, 0, 2, 0, 'signs/826LSC1.jpg', 'signs/826LSC2.jpg'],
[827, 0, 2, 0, 'signs/827LSC1.jpg', 'signs/827LSC2.jpg'],
[828, 0, 2, 0, 'signs/828LSC1.jpg', 'signs/828LSC2.jpg'],
[829, 0, 2, 0, 'signs/829LSC1.jpg', 'signs/829LSC2.jpg'],
[830, 0, 2, 0, 'signs/830LSC1.jpg', 'signs/830LSC2.jpg'],
[831, 0, 2, 0, 'signs/831LSC1.jpg', 'signs/831LSC2.jpg'],
[832, 0, 2, 0, 'signs/832LSC1.jpg', 'signs/832LSC2.jpg'],
[833, 0, 2, 0, 'signs/833LSC1.jpg', 'signs/833LSC2.jpg'],
[834, 0, 2, 0, 'signs/834LSC1.jpg', 'signs/834LSC2.jpg'],
[835, 0, 2, 0, 'signs/835LSC1.jpg', 'signs/835LSC2.jpg'],
[836, 0, 2, 0, 'signs/836LSC1.jpg', 'signs/836LSC2.jpg'],
[837, 0, 2, 0, 'signs/837LSC1.jpg', 'signs/837LSC2.jpg'],
[838, 0, 2, 0, 'signs/838LSC1.jpg', 'signs/838LSC2.jpg'],
[839, 0, 2, 0, 'signs/839LSC1.jpg', 'signs/839LSC2.jpg'],
[840, 0, 2, 0, 'signs/840LSC1.jpg', 'signs/840LSC2.jpg'],
[841, 0, 2, 0, 'signs/841LSC1.jpg', 'signs/841LSC2.jpg'],
[842, 0, 2, 0, 'signs/842LSC1.jpg', 'signs/842LSC2.jpg'],
[843, 0, 2, 0, 'signs/843LSC1.jpg', 'signs/843LSC2.jpg'],
[844, 0, 2, 0, 'signs/844LSC1.jpg', 'signs/844LSC2.jpg'],
[845, 0, 2, 0, 'signs/845LSC1.jpg', 'signs/845LSC2.jpg'],
[846, 0, 2, 0, 'signs/846LSC1.jpg', 'signs/846LSC2.jpg'],
[847, 0, 2, 0, 'signs/847LSC1.jpg', 'signs/847LSC2.jpg'],
[848, 0, 2, 0, 'signs/848LSC1.jpg', 'signs/848LSC2.jpg'],
[849, 0, 2, 0, 'signs/849LSC1.jpg', 'signs/849LSC2.jpg'],
[850, 0, 2, 0, 'signs/850LSC1.jpg', 'signs/850LSC2.jpg'],
[851, 0, 2, 0, 'signs/851LSC1.jpg', 'signs/851LSC2.jpg'],
[852, 0, 2, 0, 'signs/852LSC1.jpg', 'signs/852LSC2.jpg'],
[853, 0, 2, 0, 'signs/853LSC1.jpg', 'signs/853LSC2.jpg'],
[854, 0, 2, 0, 'signs/854LSC1.jpg', 'signs/854LSC2.jpg'],
[855, 0, 2, 0, 'signs/855LSC1.jpg', 'signs/855LSC2.jpg'],
[856, 0, 2, 0, 'signs/856LSC1.jpg', 'signs/856LSC2.jpg'],
[857, 0, 2, 0, 'signs/857LSC1.jpg', 'signs/857LSC2.jpg'],
[858, 0, 2, 0, 'signs/858LSC1.jpg', 'signs/858LSC2.jpg'],
[859, 0, 2, 0, 'signs/859LSC1.jpg', 'signs/859LSC2.jpg'],
[860, 0, 2, 0, 'signs/860LSC1.jpg', 'signs/860LSC2.jpg'],
[861, 0, 2, 0, 'signs/861LSC1.jpg', 'signs/861LSC2.jpg'],
[862, 0, 2, 0, 'signs/862LSC1.jpg', 'signs/862LSC2.jpg'],
[863, 0, 2, 0, 'signs/863LSC1.jpg', 'signs/863LSC2.jpg'],
[864, 0, 2, 0, 'signs/864LSC1.jpg', 'signs/864LSC2.jpg'],
[865, 0, 2, 0, 'signs/865LSC1.jpg', 'signs/865LSC2.jpg'],
[866, 0, 2, 0, 'signs/866LSC1.jpg', 'signs/866LSC2.jpg'],
[867, 0, 2, 0, 'signs/867LSC1.jpg', 'signs/867LSC2.jpg'],
[868, 0, 2, 0, 'signs/868LSC1.jpg', 'signs/868LSC2.jpg'],
[869, 0, 2, 0, 'signs/869LSC1.jpg', 'signs/869LSC2.jpg'],
[870, 0, 2, 0, 'signs/870LSC1.jpg', 'signs/870LSC2.jpg'],
[871, 0, 2, 0, 'signs/871LSC1.jpg', 'signs/871LSC2.jpg'],
[872, 0, 2, 0, 'signs/872LSC1.jpg', 'signs/872LSC2.jpg'],
[873, 0, 2, 0, 'signs/873LSC1.jpg', 'signs/873LSC2.jpg'],
[874, 0, 2, 0, 'signs/874LSC1.jpg', 'signs/874LSC2.jpg'],
[875, 0, 2, 0, 'signs/875LSC1.jpg', 'signs/875LSC2.jpg'],
[876, 0, 2, 0, 'signs/876LSC1.jpg', 'signs/876LSC2.jpg'],
[877, 0, 2, 0, 'signs/877LSC1.jpg', 'signs/877LSC2.jpg'],
[878, 0, 2, 0, 'signs/878LSC1.jpg', 'signs/878LSC2.jpg'],
[879, 0, 2, 0, 'signs/879LSC1.jpg', 'signs/879LSC2.jpg'],
[880, 0, 2, 0, 'signs/880LSC1.jpg', 'signs/880LSC2.jpg'],
[881, 0, 2, 0, 'signs/881LSC1.jpg', 'signs/881LSC2.jpg'],
[882, 0, 2, 0, 'signs/882LSC1.jpg', 'signs/882LSC2.jpg'],
[883, 0, 2, 0, 'signs/883LSC1.jpg', 'signs/883LSC2.jpg'],
[884, 0, 2, 0, 'signs/884LSC1.jpg', 'signs/884LSC2.jpg'],
[885, 0, 2, 0, 'signs/885LSC1.jpg', 'signs/885LSC2.jpg'],
[886, 0, 2, 0, 'signs/886LSC1.jpg', 'signs/886LSC2.jpg'],
[887, 0, 2, 0, 'signs/887LSC1.jpg', 'signs/887LSC2.jpg'],
[888, 0, 2, 0, 'signs/888LSC1.jpg', 'signs/888LSC2.jpg'],
[889, 0, 2, 0, 'signs/889LSC1.jpg', 'signs/889LSC2.jpg'],
[890, 0, 2, 0, 'signs/890LSC1.jpg', 'signs/890LSC2.jpg'],
[891, 0, 2, 0, 'signs/891LSC1.jpg', 'signs/891LSC2.jpg'],
[892, 0, 2, 0, 'signs/892LSC1.jpg', 'signs/892LSC2.jpg'],
[893, 0, 2, 0, 'signs/893LSC1.jpg', 'signs/893LSC2.jpg'],
[894, 0, 2, 0, 'signs/894LSC1.jpg', 'signs/894LSC2.jpg'],
[895, 0, 2, 0, 'signs/895LSC1.jpg', 'signs/895LSC2.jpg'],
[896, 0, 2, 0, 'signs/896LSC1.jpg', 'signs/896LSC2.jpg'],
[897, 0, 2, 0, 'signs/897LSC1.jpg', 'signs/897LSC2.jpg'],
[898, 0, 2, 0, 'signs/898LSC1.jpg', 'signs/898LSC2.jpg'],
[899, 0, 2, 0, 'signs/899LSC1.jpg', 'signs/899LSC2.jpg'],
[900, 0, 2, 0, 'signs/900LSC1.jpg', 'signs/900LSC2.jpg'],
[901, 0, 2, 0, 'signs/901LSC1.jpg', 'signs/901LSC2.jpg'],
[902, 0, 2, 0, 'signs/902LSC1.jpg', 'signs/902LSC2.jpg'],
[903, 0, 2, 0, 'signs/903LSC1.jpg', 'signs/903LSC2.jpg'],
[904, 0, 2, 0, 'signs/904LSC1.jpg', 'signs/904LSC2.jpg'],
[905, 0, 2, 0, 'signs/905LSC1.jpg', 'signs/905LSC2.jpg'],
[906, 0, 2, 0, 'signs/906LSC1.jpg', 'signs/906LSC2.jpg'],
[907, 0, 2, 0, 'signs/907LSC1.jpg', 'signs/907LSC2.jpg'],
[908, 0, 2, 0, 'signs/908LSC1.jpg', 'signs/908LSC2.jpg'],
[909, 0, 2, 0, 'signs/909LSC1.jpg', 'signs/909LSC2.jpg'],
[910, 0, 2, 0, 'signs/910LSC1.jpg', 'signs/910LSC2.jpg'],
[911, 0, 2, 0, 'signs/911LSC1.jpg', 'signs/911LSC2.jpg'],
[912, 0, 2, 0, 'signs/912LSC1.jpg', 'signs/912LSC2.jpg'],
[913, 0, 2, 0, 'signs/913LSC1.jpg', 'signs/913LSC2.jpg'],
[914, 0, 2, 0, 'signs/914LSC1.jpg', 'signs/914LSC2.jpg'],
[915, 0, 2, 0, 'signs/915LSC1.jpg', 'signs/915LSC2.jpg'],
[916, 0, 2, 0, 'signs/916LSC1.jpg', 'signs/916LSC2.jpg'],
[917, 0, 2, 0, 'signs/917LSC1.jpg', 'signs/917LSC2.jpg'],
[918, 0, 2, 0, 'signs/918LSC1.jpg', 'signs/918LSC2.jpg'],
[919, 0, 2, 0, 'signs/919LSC1.jpg', 'signs/919LSC2.jpg'],
[920, 0, 2, 0, 'signs/920LSC1.jpg', 'signs/920LSC2.jpg'],
[921, 0, 2, 0, 'signs/921LSC1.jpg', 'signs/921LSC2.jpg'],
[922, 0, 2, 0, 'signs/922LSC1.jpg', 'signs/922LSC2.jpg'],
[923, 0, 2, 0, 'signs/923LSC1.jpg', 'signs/923LSC2.jpg'],
[924, 0, 2, 0, 'signs/924LSC1.jpg', 'signs/924LSC2.jpg'],
[925, 0, 2, 0, 'signs/925LSC1.jpg', 'signs/925LSC2.jpg'],
[926, 0, 2, 0, 'signs/926LSC1.jpg', 'signs/926LSC2.jpg'],
[927, 0, 2, 0, 'signs/927LSC1.jpg', 'signs/927LSC2.jpg'],
[928, 0, 2, 0, 'signs/928LSC1.jpg', 'signs/928LSC2.jpg'],
[929, 0, 2, 0, 'signs/929LSC1.jpg', 'signs/929LSC2.jpg'],
[930, 0, 2, 0, 'signs/930LSC1.jpg', 'signs/930LSC2.jpg'],
[931, 0, 2, 0, 'signs/931LSC1.jpg', 'signs/931LSC2.jpg'],
[932, 0, 2, 0, 'signs/932LSC1.jpg', 'signs/932LSC2.jpg'],
[933, 0, 2, 0, 'signs/933LSC1.jpg', 'signs/933LSC2.jpg'],
[934, 0, 2, 0, 'signs/934LSC1.jpg', 'signs/934LSC2.jpg'],
[935, 0, 2, 0, 'signs/935LSC1.jpg', 'signs/935LSC2.jpg'],
[936, 0, 2, 0, 'signs/936LSC1.jpg', 'signs/936LSC2.jpg'],
[937, 0, 2, 0, 'signs/937LSC1.jpg', 'signs/937LSC2.jpg'],
[938, 0, 2, 0, 'signs/938LSC1.jpg', 'signs/938LSC2.jpg'],
[939, 0, 2, 0, 'signs/939LSC1.jpg', 'signs/939LSC2.jpg'],
[940, 0, 2, 0, 'signs/940LSC1.jpg', 'signs/940LSC2.jpg'],
[941, 0, 2, 0, 'signs/941LSC1.jpg', 'signs/941LSC2.jpg'],
[942, 0, 2, 0, 'signs/942LSC1.jpg', 'signs/942LSC2.jpg'],
[943, 0, 2, 0, 'signs/943LSC1.jpg', 'signs/943LSC2.jpg'],
[944, 0, 2, 0, 'signs/944LSC1.jpg', 'signs/944LSC2.jpg'],
[945, 0, 2, 0, 'signs/945LSC1.jpg', 'signs/945LSC2.jpg'],
[946, 0, 2, 0, 'signs/946LSC1.jpg', 'signs/946LSC2.jpg'],
[947, 0, 2, 0, 'signs/947LSC1.jpg', 'signs/947LSC2.jpg'],
[948, 0, 2, 0, 'signs/948LSC1.jpg', 'signs/948LSC2.jpg'],
[949, 0, 2, 0, 'signs/949LSC1.jpg', 'signs/949LSC2.jpg'],
[950, 0, 2, 0, 'signs/950LSC1.jpg', 'signs/950LSC2.jpg'],
[951, 0, 2, 0, 'signs/951LSC1.jpg', 'signs/951LSC2.jpg'],
[952, 0, 2, 0, 'signs/952LSC1.jpg', 'signs/952LSC2.jpg'],
[953, 0, 2, 0, 'signs/953LSC1.jpg', 'signs/953LSC2.jpg'],
[954, 0, 2, 0, 'signs/954LSC1.jpg', 'signs/954LSC2.jpg'],
[955, 0, 2, 0, 'signs/955LSC1.jpg', 'signs/955LSC2.jpg'],
[956, 0, 2, 0, 'signs/956LSC1.jpg', 'signs/956LSC2.jpg'],
[957, 0, 2, 0, 'signs/957LSC1.jpg', 'signs/957LSC2.jpg'],
[958, 0, 2, 0, 'signs/958LSC1.jpg', 'signs/958LSC2.jpg'],
[959, 0, 2, 0, 'signs/959LSC1.jpg', 'signs/959LSC2.jpg'],
[960, 0, 2, 0, 'signs/960LSC1.jpg', 'signs/960LSC2.jpg'],
[961, 0, 2, 0, 'signs/961LSC1.jpg', 'signs/961LSC2.jpg'],
[962, 0, 2, 0, 'signs/962LSC1.jpg', 'signs/962LSC2.jpg'],
[963, 0, 2, 0, 'signs/963LSC1.jpg', 'signs/963LSC2.jpg'],
[964, 0, 2, 0, 'signs/964LSC1.jpg', 'signs/964LSC2.jpg'],
[965, 0, 2, 0, 'signs/965LSC1.jpg', 'signs/965LSC2.jpg'],
[966, 0, 2, 0, 'signs/966LSC1.jpg', 'signs/966LSC2.jpg'],
[967, 0, 2, 0, 'signs/967LSC1.jpg', 'signs/967LSC2.jpg'],
[968, 0, 2, 0, 'signs/968LSC1.jpg', 'signs/968LSC2.jpg'],
[969, 0, 2, 0, 'signs/969LSC1.jpg', 'signs/969LSC2.jpg'],
[970, 0, 2, 0, 'signs/970LSC1.jpg', 'signs/970LSC2.jpg'],
[971, 0, 2, 0, 'signs/971LSC1.jpg', 'signs/971LSC2.jpg'],
[972, 0, 2, 0, 'signs/972LSC1.jpg', 'signs/972LSC2.jpg'],
[973, 0, 2, 0, 'signs/973LSC1.jpg', 'signs/973LSC2.jpg'],
[974, 0, 2, 0, 'signs/974LSC1.jpg', 'signs/974LSC2.jpg'],
[975, 0, 2, 0, 'signs/975LSC1.jpg', 'signs/975LSC2.jpg'],
[976, 0, 2, 0, 'signs/976LSC1.jpg', 'signs/976LSC2.jpg'],
[977, 0, 2, 0, 'signs/977LSC1.jpg', 'signs/977LSC2.jpg'],
[978, 0, 2, 0, 'signs/978LSC1.jpg', 'signs/978LSC2.jpg'],
[979, 0, 2, 0, 'signs/979LSC1.jpg', 'signs/979LSC2.jpg'],
[980, 0, 2, 0, 'signs/980LSC1.jpg', 'signs/980LSC2.jpg'],
[981, 0, 2, 0, 'signs/981LSC1.jpg', 'signs/981LSC2.jpg'],
[982, 0, 2, 0, 'signs/982LSC1.jpg', 'signs/982LSC2.jpg'],
[983, 0, 2, 0, 'signs/983LSC1.jpg', 'signs/983LSC2.jpg'],
[984, 0, 2, 0, 'signs/984LSC1.jpg', 'signs/984LSC2.jpg'],
[985, 0, 2, 0, 'signs/985LSC1.jpg', 'signs/985LSC2.jpg'],
[986, 0, 2, 0, 'signs/986LSC1.jpg', 'signs/986LSC2.jpg'],
[987, 0, 2, 0, 'signs/987LSC1.jpg', 'signs/987LSC2.jpg'],
[988, 0, 2, 0, 'signs/988LSC1.jpg', 'signs/988LSC2.jpg'],
[989, 0, 2, 0, 'signs/989LSC1.jpg', 'signs/989LSC2.jpg'],
[990, 0, 2, 0, 'signs/990LSC1.jpg', 'signs/990LSC2.jpg'],
[991, 0, 2, 0, 'signs/991LSC1.jpg', 'signs/991LSC2.jpg'],
[992, 0, 2, 0, 'signs/992LSC1.jpg', 'signs/992LSC2.jpg'],
[993, 0, 2, 0, 'signs/993LSC1.jpg', 'signs/993LSC2.jpg'],
[994, 0, 2, 0, 'signs/994LSC1.jpg', 'signs/994LSC2.jpg'],
[995, 0, 2, 0, 'signs/995LSC1.jpg', 'signs/995LSC2.jpg'],
[996, 0, 2, 0, 'signs/996LSC1.jpg', 'signs/996LSC2.jpg'],
[997, 0, 2, 0, 'signs/997LSC1.jpg', 'signs/997LSC2.jpg'],
[998, 0, 2, 0, 'signs/998LSC1.jpg', 'signs/998LSC2.jpg'],
[999, 0, 2, 0, 'signs/999LSC1.jpg', 'signs/999LSC2.jpg'],
[1000, 0, 2, 0, 'signs/1000LSC1.jpg', 'signs/1000LSC2.jpg'],
[1001, 0, 2, 0, 'signs/1001LSC1.jpg', 'signs/1001LSC2.jpg'],
[1002, 0, 2, 0, 'signs/1002LSC1.jpg', 'signs/1002LSC2.jpg'],
[1003, 0, 2, 0, 'signs/1003LSC1.jpg', 'signs/1003LSC2.jpg'],
[1004, 0, 2, 0, 'signs/1004LSC1.jpg', 'signs/1004LSC2.jpg'],
[1005, 0, 2, 0, 'signs/1005LSC1.jpg', 'signs/1005LSC2.jpg'],
[1006, 0, 2, 0, 'signs/1006LSC1.jpg', 'signs/1006LSC2.jpg'],
[1007, 0, 2, 0, 'signs/1007LSC1.jpg', 'signs/1007LSC2.jpg'],
[1008, 0, 2, 0, 'signs/1008LSC1.jpg', 'signs/1008LSC2.jpg'],
[1009, 0, 2, 0, 'signs/1009LSC1.jpg', 'signs/1009LSC2.jpg']
];



//!IMPORTANTE! s00SenPai SE COMPLEMENTA CON s00SenPaiB ver debajo..
const s00SenPai =/**/[[0, '1UNIVERSAL', '2CO-LSC', '3EUA-ASL', '4ME', '5ES', '6significado(s) {equivalencias con otro significado y/o país especifico que la emplea}  /equivalencias con otras señas internacionales(=\'s)'],
[1, [30], [30], [30], 0, 0, 'a /CO1 = 28EUA'],
[2, [31], [31], [31], 0, 0, 'b /CO2 = 29EUA'],
[3, [32], [32], [32], 0, 0, 'c /CO3 = 30EUA'],
[4, [33], [33], [33], 0, 0, 'd /31EUA = CO4 (caso especial porque la d se ve mejor en la colombiana)'],
[5, [34], [34], [34], 0, 0, 'e /CO5 = 32EUA'],
[6, [35], [6], [35], 0, 0, 'f'],
[7, [36], [7], [36], 0, 0, 'g'],
[8, [37], [8], [37], 0, 0, 'h'],
[9, [38], [38], [38], 0, 0, 'i /CO9 = 36EUA'],
[10, [39], [10], [39], 0, 0, 'j /CO10 = 37EUA'],
[11, [40], [11], [40], 0, 0, 'k'],
[12, [41], [41], [41], 0, 0, 'l /CO12 = 39EUA'],
[13, [42], [14], [42], 0, 0, 'm /CO13 = 40EUA'],
[14, [43], [15], [43], 0, 0, 'n /CO14 = 41EUA'],
[15, [0], [16], [0], 0, 0, 'ñ {español}'],
[16, [17], [17], [17], 0, 0, 'o {0} /CO16 = 42EUA'],
[17, [45], [18], [45], 0, 0, 'p'],
[18, [46], [19], [46], 0, 0, 'q'],
[19, [47], [47], [47], 0, 0, 'r /CO19 = 45EUA'],
[20, [48], [22], [48], 0, 0, 's'],
[21, [49], [23], [49], 0, 0, 't'],
[22, [50], [24], [50], 0, 0, 'u'],
[23, [51], [51], [51], 0, 0, 'v /CO23 = 49EUA'],
[24, [52], [52], [52], 0, 0, 'w /CO24 = 50EUA'],
[25, [53], [53], [53], 0, 0, 'x /CO25 = 51EUA'],
[26, [54], [54], [54], 0, 0, 'y /CO26 = 52EUA'],
[27, [55], [29], [55], 0, 0, 'z'],
[28, [17], [17], [17], 0, 0, '0 {o} /CO16 = 42EUA'],
[29, [75], [75], [75], 0, 0, '1'],
[30, [76], [76], [76], 0, 0, '2'],
[31, [77], [77], [77], 0, 0, '3'],
[32, [78], [78], [78], 0, 0, '4'],
[33, [79], [79], [79], 0, 0, '5'],
[34, [80], [86], [80], 0, 0, '6'],
[35, [81], [87], [81], 0, 0, '7'],
[36, [82], [88], [82], 0, 0, '8'],
[37, [83], [89], [83], 0, 0, '9'],
[38, [92], [92], [92], 0, 0, '+'],
[39, [100], [100], [100], 0, 0, ',   *comodin provisional'],
[40, [0], [13], [0], 0, 0, 'll'],
[41, [0], [21], [0], 0, 0, 'rr'],
[42, [93], [93], [93], 0, 0, '   espacio'],
[43, [0], [0], [0], 0, 0, ''],
[44, [0], [0], [0], 0, 0, ''],
[45, [0], [0], [0], 0, 0, ''],
[46, [0], [0], [0], 0, 0, ''],
[47, [0], [0], [0], 0, 0, ''],
[48, [0], [0], [0], 0, 0, ''],
[49, [0], [0], [0], 0, 0, ''],
[50, [0], [0], [0], 0, 0, '']
];

/*
//Complementa a s00SenPai descripcion de IMAGEN REAL, tipo de seña, 3 dedos, 2 manos, cara, etc...
const 	s00SenPaiB 	=  [	[0			,'1simbolo/idREAL'	,2		,3 		,4 		,'51dedos(1-5),2Partes(),manos(1-2),3Union,4Otros,5movimientos(1-9)6Etc/significado(s) {equivalencias con otro significado y/o país especifico que la emplea}  /equivalencias con otras señas internacionales(=\'s), esta COLUMNA se copia IGUAL de s00SenPai' ],
							[1			,'a' 				,1		,0		,0		,'a /CO1 = 28EUA'],
							[2			,'b' 				,1		,0		,0		,'b /CO2 = 29EUA'],
							[3			,'c' 				,1		,0		,0		,'c /CO3 = 30EUA'],
							[4			,'d' 				,1		,0		,0		,'d /31EUA = CO4 (caso especial porque la d se ve mejor en la colombiana)'],
							[5			,'e' 				,1		,0		,0		,'e /CO5 = 32EUA'],
							[6			,'f'				,1		,0		,0		,'f'],
							[7			,'g'				,1		,0		,0		,'g'],
							[8			,'h'				,1		,0		,0		,'h'],
							[9			,'i' 				,1		,0		,0		,'i /CO9 = 36EUA'],
							[10			,'j' 				,1		,0		,0		,'j /CO10 = 37EUA'],
							[11			,'k'				,1		,0		,0		,'k'],
							[12			,'l' 				,1		,0		,0		,'l /CO12 = 39EUA'],
							[13			,'m' 				,1		,0		,0		,'m /CO13 = 40EUA'],
							[14			,'n' 				,1		,0		,0		,'n /CO14 = 41EUA'],
							[15			,'ñ' 				,1		,0		,0		,'ñ {español}'],
							[16			,'o' 				,1		,0		,0		,'o {0} /CO16 = 42EUA'],
							[17			,'p'				,1		,0		,0		,'p'],
							[18			,'q'				,1		,0		,0		,'q'],
							[19			,'r' 				,1		,0		,0		,'r /CO19 = 45EUA'],
							[20			,'s'				,1		,0		,0		,'s'],
							[21			,'t'				,1		,0		,0		,'t'],
							[22			,'u'				,1		,0		,0		,'u'],
							[23			,'v'				,1		,0		,0		,'v /CO23 = 49EUA'],
							[24			,'w'				,1		,0		,0		,'w /CO24 = 50EUA'],
							[25			,'x'				,1		,0		,0		,'x /CO25 = 51EUA'],
							[26			,'y'				,1		,0		,0		,'y /CO26 = 52EUA'],
							[27			,'z'				,1		,0		,0		,'z'],
							[28			,'0'				,1		,0		,0		,'0 {o} /CO16 = 42EUA'],
							[29			,'1'				,1		,0		,0		,'1'],
							[30			,'2'				,1		,0		,0		,'2'],
							[31			,'3'				,1		,0		,0		,'3'],
							[32			,'4'				,1		,0		,0		,'4'],
							[33			,'5'				,1		,0		,0		,'5'],
							[34			,'6'				,1		,0		,0		,'6'],
							[35			,'7'				,1		,0		,0		,'7'],
							[36			,'8'				,1		,0		,0		,'8'],
							[37			,'9'				,1		,0		,0		,'9'],
							[38			,'+'				,1		,0		,0		,'and {ingles}'],
							[39			,'*'				,1		,0		,0		,'perro {español}'],
							[40			,'ll'				,1		,0		,0		,''],
							[41			,'rr'				,1		,0		,0		,''],
							[42			,1					,1		,0		,0		,''],
							[43			,''					,1		,0		,0		,''],
							[44			,''					,1		,0		,0		,''],
							[45			,''					,1		,0		,0		,''],
							[46			,''					,1		,0		,0		,''],
							[47			,''					,1		,0		,0		,''],
							[48			,''					,1		,0		,0		,''],
							[49			,''					,1		,0		,0		,''],
							[50			,''					,1		,0		,0		,'']
							];
*/




/* * /
//propuesta NUEVA para g01WORDSa g01WORDSb y s00SenPai
const gReal = 	[	[[0,'0Let/1Wor'	,'2simboloOjpg' ]	,'1EUA  ,seña'					,'2CO ,seña'				,'3ME[gral,cultural]'	 ,'4ES[gral,cultural]'    ,'5 Realidad, Significado(s) u observaciones por ejemplo equivalencias con otro significado y/o país especifico que la emplea /equivalencias con otras señas internacionales' 	  ],
					[[1		,0		,'a']				,[0				,1			]	,[0			,1  ]			,[1]],
					[[2		,1		,'signs/perro.jpg'		,['dog'			,[20 ,28]	]	,['perro'	,[20 ,28]]
				];

/* */


//s00WORDSa
//!IMPORTANTE! g01WORDSa SE COMPLEMENTA CON g01WORDSb ver debajo..
const g01WORDSa =/**/[[0, '1UNIVERSAL', '2CO-LSC', '3EUA-ASL', '4ME', '5ES', '6alusion GLOSA o Palabras CLAVE', 'contexto/tipo', '6Significado(s) u observaciones por ejemplo equivalencias con otro significado y/o país especifico que la emplea /equivalencias con otras señas internacionales(=\'s)'],
[1, [85], [0], [85], 0, 0, 'and', 1, '1-ARTICULO conjunción'],
[2, [0], [90], [0], 0, 0, 'perro', 2, '2-SUSTANTIVO, animal'],
[3, [94], [105], [94], 0, 0, 'hora', 2, '3-SUSTANTIVO, tiempo'],//91libro o 105Zulma
[4, [94, 91], [90, 91], [94, 91], 0, 0, 'abuelo', 3, '4-NUMERO numero con rallita, ejemplo'],
[5, [0], [102], [0], 0, 0, 'ajustes', 0, '5-Acción'],//96Madeleibis o 102Zulma
[6, [0], [98], [0], 0, 0, 'bogotá', 0, '6-lugar'],
[7, [0], [99], [0], 0, 0, 'Información', 0, '7-Sustantivo, contenido'],
[8, [0], [101], [0], 0, 0, 'abajo', 0, '8-'],
[9, [0], [103], [0], 0, 0, 'arriba', 0, ''],
[10, [0], [104], [0], 0, 0, 'continuar', 0, ''],
[11, [0], [106], [0], 0, 0, 'idioma', 0, ''],
[12, [0], [107], [0], 0, 0, 'invitación', 0, ''],
[13, [0], [108], [0], 0, 0, 'localidad', 0, ''],
[14, [0], [109], [0], 0, 0, 'modo', 0, ''],
[15, [0], [96], [0], 0, 0, '', 0, ''],
[16, [0], [0], [0], 0, 0, '', 0, ''],
[17, [0], [96], [0], 0, 0, '', 0, ''],
[18, [0], [96], [0], 0, 0, '', 0, ''],
[19, [0], [0], [0], 0, 0, '', 0, ''],
[20, [0], [0], [0], 0, 0, '', 0, ''],
[21, [0], [96], [0], 0, 0, '', 0, ''],
[22, [0], [96], [0], 0, 0, '', 0, ''],
[23, [0], [0], [0], 0, 0, '', 0, ''],
[24, [0], [96], [0], 0, 0, '', 0, ''],
[25, [0], [96], [0], 0, 0, '', 0, ''],
[26, [0], [0], [0], 0, 0, '', 0, ''],
[27, [0], [96], [0], 0, 0, '', 0, ''],
[28, [0], [96], [0], 0, 0, '', 0, ''],
[29, [0], [0], [0], 0, 0, '', 0, ''],
[30, [0], [0], [0], 0, 0, '', 0, ''],
[31, [0], [96], [0], 0, 0, '', 0, ''],
[32, [0], [96], [0], 0, 0, '', 0, ''],
[33, [0], [0], [0], 0, 0, '', 0, ''],
[34, [0], [96], [0], 0, 0, '', 0, ''],
[35, [0], [96], [0], 0, 0, '', 0, ''],
[36, [0], [0], [0], 0, 0, '', 0, ''],
[37, [0], [96], [0], 0, 0, '', 0, ''],
[38, [0], [96], [0], 0, 0, '', 0, ''],
[39, [0], [0], [0], 0, 0, '', 0, ''],
[40, [0], [0], [0], 0, 0, '', 0, ''],
[41, [0], [96], [0], 0, 0, '', 0, ''],
[42, [0], [96], [0], 0, 0, '', 0, ''],
[43, [0], [0], [0], 0, 0, '', 0, ''],
[44, [0], [96], [0], 0, 0, '', 0, ''],
[45, [0], [96], [0], 0, 0, '', 0, ''],
[46, [0], [0], [0], 0, 0, '', 0, ''],
[47, [0], [96], [0], 0, 0, '', 0, ''],
[48, [0], [96], [0], 0, 0, '', 0, ''],
[49, [0], [0], [0], 0, 0, '', 0, ''],
[50, [0], [0], [0], 0, 0, '', 0, ''],
[51, [0], [96], [0], 0, 0, '', 0, ''],
[52, [0], [96], [0], 0, 0, '', 0, ''],
[53, [0], [0], [0], 0, 0, '', 0, ''],
[54, [0], [96], [0], 0, 0, '', 0, ''],
[55, [0], [96], [0], 0, 0, '', 0, ''],
[56, [0], [0], [0], 0, 0, '', 0, ''],
[57, [0], [96], [0], 0, 0, '', 0, ''],
[58, [0], [96], [0], 0, 0, '', 0, ''],
[59, [0], [0], [0], 0, 0, '', 0, ''],
[60, [0], [0], [0], 0, 0, '', 0, ''],
[61, [0], [96], [0], 0, 0, '', 0, ''],
[62, [0], [96], [0], 0, 0, '', 0, ''],
[63, [0], [0], [0], 0, 0, '', 0, ''],
[64, [0], [96], [0], 0, 0, '', 0, ''],
[65, [0], [96], [0], 0, 0, '', 0, ''],
[66, [0], [0], [0], 0, 0, '', 0, ''],
[67, [0], [96], [0], 0, 0, '', 0, ''],
[68, [0], [96], [0], 0, 0, '', 0, ''],
[69, [0], [0], [0], 0, 0, '', 0, ''],
[70, [0], [0], [0], 0, 0, '', 0, ''],
[71, [0], [96], [0], 0, 0, '', 0, ''],
[72, [0], [96], [0], 0, 0, '', 0, ''],
[73, [0], [0], [0], 0, 0, '', 0, ''],
[74, [0], [96], [0], 0, 0, '', 0, ''],
[75, [0], [96], [0], 0, 0, '', 0, ''],
[76, [0], [0], [0], 0, 0, '', 0, ''],
[77, [0], [96], [0], 0, 0, '', 0, ''],
[78, [0], [96], [0], 0, 0, '', 0, ''],
[79, [0], [0], [0], 0, 0, '', 0, ''],
[80, [0], [0], [0], 0, 0, '', 0, ''],
[81, [0], [96], [0], 0, 0, '', 0, ''],
[82, [0], [96], [0], 0, 0, '', 0, ''],
[83, [0], [0], [0], 0, 0, '', 0, ''],
[84, [0], [96], [0], 0, 0, '', 0, ''],
[85, [0], [96], [0], 0, 0, '', 0, ''],
[86, [0], [0], [0], 0, 0, '', 0, ''],
[87, [0], [96], [0], 0, 0, '', 0, ''],
[88, [0], [96], [0], 0, 0, '', 0, ''],
[89, [0], [0], [0], 0, 0, '', 0, ''],
[90, [0], [0], [0], 0, 0, '', 0, ''],
[91, [0], [96], [0], 0, 0, '', 0, ''],
[92, [0], [96], [0], 0, 0, '', 0, ''],
[93, [0], [0], [0], 0, 0, '', 0, ''],
[94, [0], [96], [0], 0, 0, '', 0, ''],
[95, [0], [96], [0], 0, 0, '', 0, ''],
[96, [0], [0], [0], 0, 0, '', 0, ''],
[97, [0], [96], [0], 0, 0, '', 0, ''],
[98, [0], [96], [0], 0, 0, '', 0, ''],
[99, [0], [0], [0], 0, 0, '', 0, ''],
[100, [0], [0], [0], 0, 0, '', 0, ''],
[101, [0], [96], [0], 0, 0, '', 0, ''],
[102, [0], [96], [0], 0, 0, '', 0, ''],
[103, [0], [0], [0], 0, 0, '', 0, ''],
[104, [0], [96], [0], 0, 0, '', 0, ''],
[105, [0], [96], [0], 0, 0, '', 0, ''],
[106, [0], [0], [0], 0, 0, '', 0, ''],
[107, [0], [96], [0], 0, 0, '', 0, ''],
[108, [0], [96], [0], 0, 0, '', 0, ''],
[109, [0], [0], [0], 0, 0, '', 0, ''],
[110, [0], [0], [0], 0, 0, '', 0, ''],
[111, [0], [96], [0], 0, 0, '', 0, ''],
[112, [0], [96], [0], 0, 0, '', 0, ''],
[113, [0], [0], [0], 0, 0, '', 0, ''],
[114, [0], [96], [0], 0, 0, '', 0, ''],
[115, [0], [96], [0], 0, 0, '', 0, ''],
[116, [0], [0], [0], 0, 0, '', 0, ''],
[117, [0], [96], [0], 0, 0, '', 0, ''],
[118, [0], [96], [0], 0, 0, '', 0, ''],
[119, [0], [0], [0], 0, 0, '', 0, ''],
];


//s00WORDSb
//!IMPORTANTE! g01WORDSb SE COMPLEMENTA CON kLineIdi y g01WORDSa ver arriba..  la primer columna creo era o es el id de la imagen generica (dibujo o foto) para esa fila
const g01WORDSb =/**/[[0, '1UNIVERSAL', '2CO-LSC', '3EUA-ASL', '4ME', '5ES', '6alusion GLOSA o palabra CLAVE columna copiada de g01WORDSa'],
					/*1	*/[99, 'and', 0, 'and', 0, 0, 'and'],
					/*2	*/[3, 'dog', 'perro', 'dog', 0, 0, 'perro'],
					/*3	*/[2, 'hour', 'hora', 'hour', 0, 0, 'hora'],
					/*4	*/[99, 'granfather', 'abuelo', 'granfather', 0, 0, 'abuelo'],
					/*5	*/[99, 0, 'ajustes', 0, 0, 0, 'ajustes'],
					/*6	*/[99, 0, 'bogotá', 0, 0, 0, 'bogotá'],
					/*7	*/[99, 0, 'información', 0, 0, 0, 'niformación'],
					/*8	*/[99, 0, 'abajo', 0, 0, 0, 'abajo'],
					/*9	*/[99, 0, 'arriba', 0, 0, 0, 'arriba'],
					/*10*/[99, 0, 'continuar', 0, 0, 0, 'continuar'],
					/*11*/[99, 0, 'idioma', 0, 0, 0, 'idioma'],
					/*12*/[99, 0, 'invitación', 0, 0, 0, 'invitación'],
					/*13*/[99, 0, 'localidad', 0, 0, 0, 'localidad'],
					/*14*/[99, 0, 'modo', 0, 0, 0, 'modo'],
					/*15*/[99, 0, 0, 0, 0, 0, ''],
					/*16*/[99, 0, 0, 0, 0, 0, ''],
					/*17*/[99, 0, 0, 0, 0, 0, ''],
					/*18*/[99, 0, 0, 0, 0, 0, ''],
					/*19*/[99, 0, 0, 0, 0, 0, ''],
					/*20*/[99, 0, 0, 0, 0, 0, ''],
					/*21*/[99, 0, 0, 0, 0, 0, ''],
					/*22*/[99, 0, 0, 0, 0, 0, ''],
					/*23*/[99, 0, 0, 0, 0, 0, ''],
					/*24*/[99, 0, 0, 0, 0, 0, ''],
					/*25*/[99, 0, 0, 0, 0, 0, ''],
					/*26*/[99, 0, 0, 0, 0, 0, ''],
					/*27*/[99, 0, 0, 0, 0, 0, ''],
					/*28*/[99, 0, 0, 0, 0, 0, ''],
					/*29*/[99, 0, 0, 0, 0, 0, ''],
					/*30*/[99, 0, 0, 0, 0, 0, ''],
					/*31*/[99, 0, 0, 0, 0, 0, ''],
					/*32*/[99, 0, 0, 0, 0, 0, ''],
					/*33*/[99, 0, 0, 0, 0, 0, ''],
					/*34*/[99, 0, 0, 0, 0, 0, ''],
					/*35*/[99, 0, 0, 0, 0, 0, ''],
					/*36*/[99, 0, 0, 0, 0, 0, ''],
					/*37*/[99, 0, 0, 0, 0, 0, ''],
					/*38*/[99, 0, 0, 0, 0, 0, ''],
					/*39*/[99, 0, 0, 0, 0, 0, ''],
					/*40*/[99, 0, 0, 0, 0, 0, ''],
					/*41*/[99, 0, 0, 0, 0, 0, ''],
					/*42*/[99, 0, 0, 0, 0, 0, ''],
					/*43*/[99, 0, 0, 0, 0, 0, ''],
					/*44*/[99, 0, 0, 0, 0, 0, ''],
					/*45*/[99, 0, 0, 0, 0, 0, ''],
					/*46*/[99, 0, 0, 0, 0, 0, ''],
					/*47*/[99, 0, 0, 0, 0, 0, ''],
					/*48*/[99, 0, 0, 0, 0, 0, ''],
					/*49*/[99, 0, 0, 0, 0, 0, ''],
					/*50*/[99, 0, 0, 0, 0, 0, ''],
					/*51*/[99, 0, 0, 0, 0, 0, ''],
					/*52*/[99, 0, 0, 0, 0, 0, ''],
					/*53*/[99, 0, 0, 0, 0, 0, ''],
					/*54*/[99, 0, 0, 0, 0, 0, ''],
					/*55*/[99, 0, 0, 0, 0, 0, ''],
					/*56*/[99, 0, 0, 0, 0, 0, ''],
					/*57*/[99, 0, 0, 0, 0, 0, ''],
					/*58*/[99, 0, 0, 0, 0, 0, ''],
					/*59*/[99, 0, 0, 0, 0, 0, ''],
					/*60*/[99, 0, 0, 0, 0, 0, ''],
					/*61*/[99, 0, 0, 0, 0, 0, ''],
					/*62*/[99, 0, 0, 0, 0, 0, ''],
					/*63*/[99, 0, 0, 0, 0, 0, ''],
					/*64*/[99, 0, 0, 0, 0, 0, ''],
					/*65*/[99, 0, 0, 0, 0, 0, ''],
					/*66*/[99, 0, 0, 0, 0, 0, ''],
					/*67*/[99, 0, 0, 0, 0, 0, ''],
					/*68*/[99, 0, 0, 0, 0, 0, ''],
					/*69*/[99, 0, 0, 0, 0, 0, ''],
					/*70*/[99, 0, 0, 0, 0, 0, ''],
					/*71*/[99, 0, 0, 0, 0, 0, ''],
					/*72*/[99, 0, 0, 0, 0, 0, ''],
					/*73*/[99, 0, 0, 0, 0, 0, ''],
					/*74*/[99, 0, 0, 0, 0, 0, ''],
					/*75*/[99, 0, 0, 0, 0, 0, ''],
					/*76*/[99, 0, 0, 0, 0, 0, ''],
					/*77*/[99, 0, 0, 0, 0, 0, ''],
					/*78*/[99, 0, 0, 0, 0, 0, ''],
					/*79*/[99, 0, 0, 0, 0, 0, ''],
					/*80*/[99, 0, 0, 0, 0, 0, ''],
					/*81*/[99, 0, 0, 0, 0, 0, ''],
					/*82*/[99, 0, 0, 0, 0, 0, ''],
					/*83*/[99, 0, 0, 0, 0, 0, ''],
					/*84*/[99, 0, 0, 0, 0, 0, ''],
					/*85*/[99, 0, 0, 0, 0, 0, ''],
					/*86*/[99, 0, 0, 0, 0, 0, ''],
					/*87*/[99, 0, 0, 0, 0, 0, ''],
					/*88*/[99, 0, 0, 0, 0, 0, ''],
					/*89*/[99, 0, 0, 0, 0, 0, ''],
					/*90*/[99, 0, 0, 0, 0, 0, ''],
					/*91*/[99, 0, 0, 0, 0, 0, ''],
					/*92*/[99, 0, 0, 0, 0, 0, ''],
					/*93*/[99, 0, 0, 0, 0, 0, ''],
					/*94*/[99, 0, 0, 0, 0, 0, ''],
					/*95*/[99, 0, 0, 0, 0, 0, ''],
					/*96*/[99, 0, 0, 0, 0, 0, ''],
					/*97*/[99, 0, 0, 0, 0, 0, ''],
					/*98*/[99, 0, 0, 0, 0, 0, ''],
					/*99*/[99, 0, 0, 0, 0, 0, ''],
					/*100*/[99, 0, 0, 0, 0, 0, ''],
					/*101*/[99, 0, 0, 0, 0, 0, ''],
					/*102*/[99, 0, 0, 0, 0, 0, ''],
					/*103*/[99, 0, 0, 0, 0, 0, ''],
					/*104*/[99, 0, 0, 0, 0, 0, ''],
					/*105*/[99, 0, 0, 0, 0, 0, ''],
					/*106*/[99, 0, 0, 0, 0, 0, ''],
					/*107*/[99, 0, 0, 0, 0, 0, ''],
					/*108*/[99, 0, 0, 0, 0, 0, ''],
					/*109*/[99, 0, 0, 0, 0, 0, ''],
					/*110*/[99, 0, 0, 0, 0, 0, ''],
					/*111*/[99, 0, 0, 0, 0, 0, ''],
					/*112*/[99, 0, 0, 0, 0, 0, ''],
					/*113*/[99, 0, 0, 0, 0, 0, ''],
					/*114*/[99, 0, 0, 0, 0, 0, ''],
					/*115*/[99, 0, 0, 0, 0, 0, ''],
					/*116*/[99, 0, 0, 0, 0, 0, ''],
					/*117*/[99, 0, 0, 0, 0, 0, ''],
					/*118*/[99, 0, 0, 0, 0, 0, ''],
					/*119*/[99, 0, 0, 0, 0, 0, ''],

					/*1000*/[99, 0, 0, 0, 0, 0, '']
];







//============================================================
//d4 BRAILLE Y MORSE





//BRAILLE
//ACTIVA LOS PREFIJOS Y LOS BUSCA EN LA FILA CORRESPONDIENTE:
const s00Grupo =/**/[['0', '1En', '2Sp', '3Fr', '4Po', '5Al', '6Ar', '7Ch', '8Co', '9Ja', '10Ru', '11Tu', 'Valor NÚMERICO/ Cualidad, parámetro O SIGNIFICADO:'],
['1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '1 	Letra(s) minúscula(s) iniciales o van precedidas por UNA SOLA letra mayúscula'],
['2', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '2 	Carácter(es) Especial(es) que NO preceden letra(s) minúscula(s)'],
['3', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '3 	Carácter(es) Especial(es) que SI preceden letra(s) minúscula(s)'],
['4', 59, 59, 59, 0, 0, 0, 0, 0, 0, 0, 0, '4 	Número(s) que NO preceden letra(s) minúscula(s)'],
['5', 59, 59, 59, 0, 0, 0, 0, 0, 0, 0, 0, '5 	Número(s) que SI preceden letra(s) minúscula(s)'],
['6', 60, 60, 60, 0, 0, 0, 0, 0, 0, 0, 0, '6 	Letra mayúscula individual, suelta, sola o aislada'],
['7', 60, 60, 60, 0, 0, 0, 0, 0, 0, 0, 0, '7 	Letras mayúsculas fijas seguidas una tras otra que NO preceden letra(s) minúscula(s)'],
['8', 60, 60, 60, 0, 0, 0, 0, 0, 0, 0, 0, '8 	Letras mayúsculas fijas seguidas una tras otra que SI preceden letra(s) minúscula(s)'],
['9', 58, 58, 58, 0, 0, 0, 0, 0, 0, 0, 0, '9 	Letras minúsculas precedidas por caracter(es) especial(es) o numero(s) o VARIAS mayúsculaS'],
['10', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '10 	'],
['11', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '11 	'],
['12', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '12 	'],
['13', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '13 	']
];

const s00braIdi =/**/[['Nº  SIMBOLO:', '1En', '2Sp', '3Fr', '4Po', '5Al', '6Ar', '7Ch', '8Co', '9Ja', '10Ru', '11Tu', 'Nº  SIMBOLO:'],
[' 1  a', 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, ' 1  a'],
[' 2  b', 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, ' 2  b'],
[' 3  c', 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, ' 3  c'],
[' 4  d', 25, 25, 25, 0, 0, 0, 0, 0, 0, 0, 0, ' 4  d'],
[' 5  e', 17, 17, 17, 0, 0, 0, 0, 0, 0, 0, 0, ' 5  e'],
[' 6  f', 11, 11, 11, 0, 0, 0, 0, 0, 0, 0, 0, ' 6  f'],
[' 7  g', 27, 27, 27, 0, 0, 0, 0, 0, 0, 0, 0, ' 7  g'],
[' 8  h', 19, 19, 19, 0, 0, 0, 0, 0, 0, 0, 0, ' 8  h'],
[' 9  i', 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, ' 9  i'],
['10  j', 26, 26, 26, 0, 0, 0, 0, 0, 0, 0, 0, '10  j'],
['11  k', 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, '11  k'],
['12  l', 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, '12  l'],
['13  m', 13, 13, 13, 0, 0, 0, 0, 0, 0, 0, 0, '13  m'],
['14  n', 29, 29, 29, 0, 0, 0, 0, 0, 0, 0, 0, '14  n'],
['15  ñ', 0, 59, 0, 0, 0, 0, 0, 0, 0, 0, 0, '15  ñ'],
['16  o', 21, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0, '16  o'],
['17  p', 15, 15, 15, 0, 0, 0, 0, 0, 0, 0, 0, '17  p'],
['18  q', 31, 31, 31, 0, 0, 0, 0, 0, 0, 0, 0, '18  q'],
['19  r', 23, 23, 23, 0, 0, 0, 0, 0, 0, 0, 0, '19  r'],
['20  s', 14, 14, 14, 0, 0, 0, 0, 0, 0, 0, 0, '20  s'],
['21  t', 30, 30, 30, 0, 0, 0, 0, 0, 0, 0, 0, '21  t'],
['22  u', 37, 37, 37, 0, 0, 0, 0, 0, 0, 0, 0, '22  u'],
['23  v', 39, 39, 39, 0, 0, 0, 0, 0, 0, 0, 0, '23  v'],
['24  w', 58, 58, 58, 0, 0, 0, 0, 0, 0, 0, 0, '24  w'],
['25  x', 45, 45, 45, 0, 0, 0, 0, 0, 0, 0, 0, '25  x'],
['26  y', 61, 61, 61, 0, 0, 0, 0, 0, 0, 0, 0, '26  y'],
['27  z', 53, 53, 53, 0, 0, 0, 0, 0, 0, 0, 0, '27  z'],
['28  á', 0, 55, 0, 0, 0, 0, 0, 0, 0, 0, 0, '28  á'],
['29  é', 0, 46, 63, 0, 0, 0, 0, 0, 0, 0, 0, '29  é'],
['30  í', 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, '30  í'],
['31  ó', 0, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, '31  ó'],
['32  ú', 0, 62, 0, 0, 0, 0, 0, 0, 0, 0, 0, '32  ú'],
['33  ü', 0, 51, 51, 0, 0, 0, 0, 0, 0, 0, 0, '33  ü'],
['34  1', 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, '34  A'],
['35  2', 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, '35  B'],
['36  3', 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, '36  C'],
['37  4', 25, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, '37  D'],
['38  5', 17, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, '38  E'],
['39  6', 11, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, '39  F'],
['40  7', 27, 27, 0, 0, 0, 0, 0, 0, 0, 0, 0, '40  G'],
['41  8', 19, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, '41  H'],
['42  9', 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, '42  I'],
['43  0', 26, 26, 0, 0, 0, 0, 0, 0, 0, 0, 0, '43  J'],
['44  .', 50, 4, 50, 0, 0, 0, 0, 0, 0, 0, 0, '44  K'],
['45  ,', 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, '45  L'],
['46  ¿', 34, 34, 34, 0, 0, 0, 0, 0, 0, 0, 0, '46  M'],
['47  ?', 34, 34, 34, 0, 0, 0, 0, 0, 0, 0, 0, '46  M'],
['48  ;', 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, '47  N'],
['49  ¡', 22, 22, 22, 0, 0, 0, 0, 0, 0, 0, 0, '48  Ñ'],
['50  !', 22, 22, 22, 0, 0, 0, 0, 0, 0, 0, 0, '48  Ñ'],
['51  :', 18, 18, 18, 0, 0, 0, 0, 0, 0, 0, 0, '49  O'],
['52  \ comilla inicial', 38, 38, 38, 0, 0, 0, 0, 0, 0, 0, 0, '50  P'],
['53  \' comilla terminal', 52, 52, 52, 0, 0, 0, 0, 0, 0, 0, 0, '71  5'],
['54  *', 20, 20, 20, 0, 0, 0, 0, 0, 0, 0, 0, '72  6'],
['55  (', 54, 35, 54, 0, 0, 0, 0, 0, 0, 0, 0, '51  Q'],
['56  )', 54, 28, 54, 0, 0, 0, 0, 0, 0, 0, 0, '52  R'],
['57  -', 36, 36, 36, 0, 0, 0, 0, 0, 0, 0, 0, '53  S'],
['58  pre minuscula(letra)', 48, 16, 48, 0, 0, 0, 0, 0, 0, 0, 0, '54  T'],
['59  pre número(S)', 60, 60, 60, 0, 0, 0, 0, 0, 0, 0, 0, '55  U'],
['60  pre mayuscula', 32, 40, 40, 0, 0, 0, 0, 0, 0, 0, 0, '56  V'],
['61  ç', 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, '57  W'],
['62  à', 0, 0, 55, 0, 0, 0, 0, 0, 0, 0, 0, '58  X'],
['63  è', 0, 0, 46, 0, 0, 0, 0, 0, 0, 0, 0, '59  Y'],
['64  ù', 0, 0, 62, 0, 0, 0, 0, 0, 0, 0, 0, '60  Z'],
['65  â', 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, '61  Á'],
['66  ê', 0, 0, 35, 0, 0, 0, 0, 0, 0, 0, 0, '62  É'],
['67  î', 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, '63  Í'],
['68  ô', 0, 0, 57, 0, 0, 0, 0, 0, 0, 0, 0, '64  Ó'],
['69  û', 0, 0, 49, 0, 0, 0, 0, 0, 0, 0, 0, '65  Ú'],
['70  ë', 0, 0, 43, 0, 0, 0, 0, 0, 0, 0, 0, '66  Ü'],
['71  ï', 0, 0, 59, 0, 0, 0, 0, 0, 0, 0, 0, '67  1'],
['72  œ', 0, 0, 42, 0, 0, 0, 0, 0, 0, 0, 0, '68  2'],
['73  bastardilla', 40, 0, 56, 0, 0, 0, 0, 0, 0, 0, 0, '69  3'],
['74  acento???', 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '70  4'],
['75  \'apóstrofo', 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, '73  7'],
['76  +', 22, 22, 22, 0, 0, 0, 0, 0, 0, 0, 0, '74  8'],
['77  ', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '75  9'],
['78  ', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '76  0'],
['79  ', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '77  .'],
['80  ', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '78  ,'],
['81  ', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '79  ¿?'],
['82  ', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '80  ;'],
['83  ', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '81  ¡!'],
['84  ', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '82  :'],
['85  ', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '83  comillas'],
['86  ', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '84  ('],
['87  ', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '85  )'],
['88  ', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '86  -'],
['89  ', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '87   ']
];

//							[ID			,Braille	,'SIMBOLO(s):'	],
const s00brailG =/**/[[0, '⠀', 'espacio, ningun punto'],
[1, '⠁', 'a 1'],
[2, '⠂', ','],
[3, '⠃', 'b 2'],
[4, '⠄', '.SP \'apóstrofoEN/FR'],
[5, '⠅', 'k'],
[6, '⠆', ';'],
[7, '⠇', 'l'],
[8, '⠈', 'acentoEN'],
[9, '⠉', 'c'],
[10, '⠊', 'i'],
[11, '⠋', 'f'],
[12, '⠌', 'í'],
[13, '⠍', 'm'],
[14, '⠎', 's'],
[15, '⠏', 'p'],
[16, '⠐', '---prefMinusSP???  @SP???  prefSignosEN+ OJO!!! FALTA AGREGAR AL CODIGO ESTA PARTE DEL PREFIJO AL GUION DEL +'],
[17, '⠑', 'e'],
[18, '⠒', ':'],
[19, '⠓', 'h'],
[20, '⠔', '*   )SP????'],
[21, '⠕', 'o'],
[22, '⠖', '¡!  +SP  +FR???   +EN(ADICIONAR PREFIJO(16) 5+2,3,5) OJO!!! FALTA AGREGAR AL CODIGO ESTA PARTE DEL PREFIJO AL GUION DEL +'],
[23, '⠗', 'r'],
[24, '⠘', '---------'],
[25, '⠙', 'd'],
[26, '⠚', 'j'],
[27, '⠛', 'g'],
[28, '⠜', ')'],
[29, '⠝', 'n'],
[30, '⠞', 't'],
[31, '⠟', 'q'],
[32, '⠠', 'pref mayusculasEN'],
[33, '⠡', 'âFR'],
[34, '⠢', '¿?   (SP???'],
[35, '⠣', '(SP êFR'],
[36, '⠤', '-'],
[37, '⠥', 'u'],
[38, '⠦', '"comillas iniEN/FR'],
[39, '⠧', 'v'],
[40, '⠨', 'pref mayusculasSP/FR bastardillaEN(prefijo?)'],
[41, '⠩', 'îFR'],
[42, '⠪', 'œFR'],
[43, '⠫', 'ëFR'],
[44, '⠬', 'ó  +FR????parece que no y es el 22'],
[45, '⠭', 'x'],
[46, '⠮', 'éSP èFR'],
[47, '⠯', 'çFR'],
[48, '⠰', 'pref minusculaEN'],
[49, '⠱', 'ûFR'],
[50, '⠲', '0 .pto finalEN/FR'],
[51, '⠳', 'üSP/FR'],
[52, '⠴', 'comillas termiEN/FR'],
[53, '⠵', 'z'],
[54, '⠶', '()EN/FR  =SP????'],
[55, '⠷', 'áSP àFR'],
[56, '⠸', 'bastardillaFR(prefijo?)'],
[57, '⠹', 'ôFR  bastardillaSP???'],
[58, '⠺', 'w'],
[59, '⠻', 'ñSP ïFR'],
[60, '⠼', 'pref númerosEN/SP/FR'],
[61, '⠽', 'y'],
[62, '⠾', 'úSP ùFR'],
[63, '⠿', 'éFR ']
];



//MORSE
const s00timeMor =/**/[[0, 'Duración', 'Ajuste', 'Descripcion'],
[1, 8, 0, '1-Punto6 -1UNIT'],
[2, 8, 0, '2-Unión interna10 -1UNIT'],
[3, 24, 0, '3-Raya24 -3UNITS'],
[4, 24, 0, '4-Unión de letras40 -3UNITS'],
[5, 56, 0, '5-Espaciós130 -7UNITS'],
[6, 160, 0, '6-Cambio de idioma300 -20UNITS'],
];

//NOTA el asterisco extra (*) indica que el número no es el código morse para ese caracter pero indican acomodación propia del morse por similitud con otro caracter y no genere un posible error
const s00morIdi =/**/[['Nº  SIMB:', '1En', '2Sp', '3Fr', '4Po', '5Al', '6Ar', '7Ch', '8Co', '9Ja', '10Ru', '11Tu', 'Nº  SIMBOLO:'],
[' 1  a', 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, ' 1  a'],
[' 2  b', 23, 23, 23, 0, 0, 0, 0, 0, 0, 0, 0, ' 2  b'],
[' 3  c', 25, 25, 25, 0, 0, 0, 0, 0, 0, 0, 0, ' 3  c'],
[' 4  d', 11, 11, 11, 0, 0, 0, 0, 0, 0, 0, 0, ' 4  d'],
[' 5  e', 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, ' 5  e'],
[' 6  f', 17, 17, 17, 0, 0, 0, 0, 0, 0, 0, 0, ' 6  f'],
[' 7  g', 13, 13, 13, 0, 0, 0, 0, 0, 0, 0, 0, ' 7  g'],
[' 8  h', 15, 15, 15, 0, 0, 0, 0, 0, 0, 0, 0, ' 8  h'],
[' 9  i', 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, ' 9  i'],
['10  j', 22, 22, 22, 0, 0, 0, 0, 0, 0, 0, 0, '10  j'],
['11  k', 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, '11  k'],
['12  l', 19, 19, 19, 0, 0, 0, 0, 0, 0, 0, 0, '12  l'],
['13  m', 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, '13  m'],
['14  n', 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, '14  n'],
['15  ñ', 0, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, '15  ñ'],
['16  o', 14, 14, 14, 0, 0, 0, 0, 0, 0, 0, 0, '16  o'],
['17  p', 21, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0, '17  p'],
['18  q', 28, 28, 28, 0, 0, 0, 0, 0, 0, 0, 0, '18  q'],
['19  r', 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, '19  r'],
['20  s', 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, '20  s'],
['21  t', 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, '21  t'],
['22  u', 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, '22  u'],
['23  v', 16, 16, 16, 0, 0, 0, 0, 0, 0, 0, 0, '23  v'],
['24  w', 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, '24  w'],
['25  x', 24, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, '25  x'],
['26  y', 26, 26, 26, 0, 0, 0, 0, 0, 0, 0, 0, '26  y'],
['27  z', 27, 27, 27, 0, 0, 0, 0, 0, 0, 0, 0, '27  z'],
['28  á', 0, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, '28  á'],
['29  é', 0, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, '29  é'],
['30  í*', 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, '30  í'],
['31  ó', 0, 29, 0, 0, 0, 0, 0, 0, 0, 0, 0, '31  ó'],
['32  ú*', 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, '32  ú'],
['33  ü*', 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, '33  ü'],
['34  1', 46, 46, 46, 0, 0, 0, 0, 0, 0, 0, 0, '34  A'],
['35  2', 38, 38, 38, 0, 0, 0, 0, 0, 0, 0, 0, '35  B'],
['36  3', 34, 34, 34, 0, 0, 0, 0, 0, 0, 0, 0, '36  C'],
['37  4', 32, 32, 32, 0, 0, 0, 0, 0, 0, 0, 0, '37  D'],
['38  5', 31, 31, 31, 0, 0, 0, 0, 0, 0, 0, 0, '38  E'],
['39  6', 47, 47, 47, 0, 0, 0, 0, 0, 0, 0, 0, '39  F'],
['40  7', 55, 55, 55, 0, 0, 0, 0, 0, 0, 0, 0, '40  G'],
['41  8', 59, 59, 59, 0, 0, 0, 0, 0, 0, 0, 0, '41  H'],
['42  9', 61, 61, 61, 0, 0, 0, 0, 0, 0, 0, 0, '42  I'],
['43  0', 62, 62, 62, 0, 0, 0, 0, 0, 0, 0, 0, '43  J'],
['44  .', 84, 84, 84, 0, 0, 0, 0, 0, 0, 0, 0, '44  K'],
['45  ,', 114, 114, 114, 0, 0, 0, 0, 0, 0, 0, 0, '45  L'],
['46  ¿', 36, 36, 36, 0, 0, 0, 0, 0, 0, 0, 0, '46  M'],
['47  ?', 75, 75, 75, 0, 0, 0, 0, 0, 0, 0, 0, '46  M'],
['48  ;', 105, 105, 105, 0, 0, 0, 0, 0, 0, 0, 0, '47  N'],
['49  ¡', 112, 112, 112, 0, 0, 0, 0, 0, 0, 0, 0, '48  Ñ'],
['50  !', 106, 106, 106, 0, 0, 0, 0, 0, 0, 0, 0, '48  Ñ'],
['51  :', 119, 119, 119, 0, 0, 0, 0, 0, 0, 0, 0, '49  O'],
['52  "', 81, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, '50  P'],
['53  /', 49, 49, 49, 0, 0, 0, 0, 0, 0, 0, 0, '71  5'],
['54  \'', 93, 93, 93, 0, 0, 0, 0, 0, 0, 0, 0, '72  6'],
['55  (', 53, 53, 53, 0, 0, 0, 0, 0, 0, 0, 0, '51  Q'],
['56  )', 108, 108, 108, 0, 0, 0, 0, 0, 0, 0, 0, '52  R'],
['57  -', 96, 96, 96, 0, 0, 0, 0, 0, 0, 0, 0, '53  S'],
['58  &', 39, 39, 39, 0, 0, 0, 0, 0, 0, 0, 0, '54  T'],
['59  =', 48, 48, 48, 0, 0, 0, 0, 0, 0, 0, 0, '55  U'],
['60  +', 41, 41, 41, 0, 0, 0, 0, 0, 0, 0, 0, '56  V'],
['61  _', 76, 76, 76, 0, 0, 0, 0, 0, 0, 0, 0, '57  W'],
['62  $', 136, 136, 136, 0, 0, 0, 0, 0, 0, 0, 0, '58  X'],
['63  @', 89, 89, 89, 0, 0, 0, 0, 0, 0, 0, 0, '59  Y'],
['64  **', 0, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, '60  Z'],
['65  ç', 0, 0, 51, 0, 0, 0, 0, 0, 0, 0, 0, '61  Á'],
['66  à', 0, 0, 44, 0, 0, 0, 0, 0, 0, 0, 0, '62  É'],
['67  è', 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, '63  Í'],
['68  ù', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '64  Ó'],
['69  â', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '65  Ú'],
['70  ê', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '66  Ü'],
['71  î', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '67  1'],
['72  ô', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '68  2'],
['73  û', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '69  3'],
['74  ë', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '70  4'],
['75  ï', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '73  7'],
['76   ', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '74  8'],
['77   ', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '75  9'],
['78   ', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '76  0'],
['79   ', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '77  .'],
['80   ', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '78  ,'],
['81   ', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '79  ¿?'],
['82   ', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '80  ;'],
['83   ', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '81  ¡!'],
['84   ', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '82  :'],
['85   ', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '83  comillas'],
['86   ', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '84  ('],
['87   ', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '85  )'],
['88   ', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '86  -'],
['89   ', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '87   ']
];



const s00morseG =/**/[[0, '1', '2PESOS', '3ArraysValores', '4SIMBOLO(S) QUE LA USAN:'],
[1, '·', '1', 0, 'e'],
[2, '-', '3', 0, 't'],
[3, '··', '121', 0, 'i'],
[4, '·-', '123', 0, 'a'],
[5, '-·', '321', 0, 'n'],
[6, '--', '323', 0, 'm'],
[7, '···', '12121', 0, 's'],
[8, '··-', '12123', 0, 'u'],
[9, '·-·', '12321', 0, 'r'],
[10, '·--', '12323', 0, 'w'],
[11, '-··', '32121', 0, 'd'],
[12, '-·-', '32123', 0, 'k'],
[13, '--·', '32321', 0, 'g'],
[14, '---', '32323', 0, 'o'],
[15, '····', '1212121', 0, 'h'],
[16, '···-', '1212123', 0, 'v'],
[17, '··-·', '1212321', 0, 'f'],
[18, '··--', '1212323', 0, ''],
[19, '·-··', '1232121', 0, 'l'],
[20, '·-·-', '1232123', 0, ''],
[21, '·--·', '1232321', 0, 'p'],
[22, '·---', '1232323', 0, 'j'],
[23, '-···', '3212121', 0, 'b'],
[24, '-··-', '3212123', 0, 'x'],
[25, '-·-·', '3212321', 0, 'c'],
[26, '-·--', '3212323', 0, 'y'],
[27, '--··', '3232121', 0, 'z'],
[28, '--·-', '3232123', 0, 'q'],
[29, '---·', '3232321', 0, 'ó'],
[30, '----', '3232323', 0, ''],
[31, '·····', '121212121', 0, '5'],
[32, '····-', '121212123', 0, '4'],
[33, '···-·', '121212321', 0, ''],
[34, '···--', '121212323', 0, '3'],
[35, '··-··', '121232121', 0, 'é'],
[36, '··-·-', '121232123', 0, '¿'],
[37, '··--·', '121232321', 0, ''],
[38, '··---', '121232323', 0, '2'],
[39, '·-···', '123212121', 0, '&'],
[40, '·-··-', '123212123', 0, 'è'],
[41, '·-·-·', '123212321', 0, '+'],
[42, '·-·--', '123212323', 0, ''],
[43, '·--··', '123232121', 0, ''],
[44, '·--·-', '123232123', 0, 'à,á'],
[45, '·---·', '123232321', 0, ''],
[46, '·----', '123232323', 0, '1'],
[47, '-····', '321212121', 0, '6'],
[48, '-···-', '321212123', 0, '='],
[49, '-··-·', '321212321', 0, '/'],
[50, '-··--', '321212323', 0, ''],
[51, '-·-··', '321232121', 0, 'ç'],
[52, '-·-·-', '321232123', 0, ''],
[53, '-·--·', '321232321', 0, '('],
[54, '-·---', '321232323', 0, ''],
[55, '--···', '323212121', 0, '7'],
[56, '--··-', '323212123', 0, ''],
[57, '--·-·', '323212321', 0, ''],
[58, '--·--', '323212323', 0, 'ñ'],
[59, '---··', '323232121', 0, '8'],
[60, '---·-', '323232123', 0, ''],
[61, '----·', '323232321', 0, '9'],
[62, '-----', '323232323', 0, '0'],
[63, '······', '12121212121', 0, ''],
[64, '·····-', '12121212123', 0, ''],
[65, '····-·', '12121212321', 0, ''],
[66, '····--', '12121212323', 0, ''],
[67, '···-··', '12121232121', 0, ''],
[68, '···-·-', '12121232123', 0, ''],
[69, '···--·', '12121232321', 0, ''],
[70, '···---', '12121232323', 0, ''],
[71, '··-···', '12123212121', 0, ''],
[72, '··-··-', '12123212123', 0, ''],
[73, '··-·-·', '12123212321', 0, ''],
[74, '··-·--', '12123212323', 0, ''],
[75, '··--··', '12123232121', 0, '?'],
[76, '··--·-', '12123232123', 0, '_'],
[77, '··---·', '12123232321', 0, ''],
[78, '··----', '12123232323', 0, ''],
[79, '·-····', '12321212121', 0, ''],
[80, '·-···-', '12321212123', 0, ''],
[81, '·-··-·', '12321212321', 0, '"'],
[82, '·-··--', '12321212323', 0, ''],
[83, '·-·-··', '12321232121', 0, ''],
[84, '·-·-·-', '12321232123', 0, '.'],
[85, '·-·--·', '12321232321', 0, ''],
[86, '·-·---', '12321232323', 0, ''],
[87, '·--···', '12323212121', 0, ''],
[88, '·--··-', '12323212123', 0, ''],
[89, '·--·-·', '12323212321', 0, '@'],
[90, '·--·--', '12323212323', 0, ''],
[91, '·---··', '12323232121', 0, ''],
[92, '·---·-', '12323232123', 0, ''],
[93, '·----·', '12323232321', 0, '\''],
[94, '·-----', '12323232323', 0, ''],
[95, '-·····', '32121212121', 0, ''],
[96, '-····-', '32121212123', 0, '-'],
[97, '-···-·', '32121212321', 0, ''],
[98, '-···--', '32121212323', 0, ''],
[99, '-··-··', '32121232121', 0, ''],
[100, '-··-·-', '32121232123', 0, ''],
[101, '-··--·', '32121232321', 0, ''],
[102, '-··---', '32121232323', 0, ''],
[103, '-·-···', '32123212121', 0, ''],
[104, '-·-··-', '32123212123', 0, ''],
[105, '-·-·-·', '32123212321', 0, ';'],
[106, '-·-·--', '32123212323', 0, '!'],
[107, '-·--··', '32123232121', 0, ''],
[108, '-·--·-', '32123232123', 0, ')'],
[109, '-·---·', '32123232321', 0, ''],
[110, '-·----', '32123232323', 0, ''],
[111, '--····', '32321212121', 0, ''],
[112, '--···-', '32321212123', 0, '¡'],
[113, '--··-·', '32321212321', 0, ''],
[114, '--··--', '32321212323', 0, ','],
[115, '--·-··', '32321232121', 0, ''],
[116, '--·-·-', '32321232123', 0, ''],
[117, '--·--·', '32321232321', 0, ''],
[118, '--·---', '32321232323', 0, ''],
[119, '---···', '32323212121', 0, ':'],
[120, '---··-', '32323212123', 0, ''],
[121, '---·-·', '32323212321', 0, ''],
[122, '---·--', '32323212323', 0, ''],
[123, '----··', '32323232121', 0, ''],
[124, '----·-', '32323232123', 0, ''],
[125, '-----·', '32323232321', 0, ''],
[126, '------', '32323232323', 0, ''],
[127, '·······', '1212121212121', 0, ''],
[128, '······-', '1212121212123', 0, ''],
[129, '·····-·', '1212121212321', 0, ''],
[130, '·····--', '1212121212323', 0, ''],
[131, '····-··', '1212121232121', 0, ''],
[132, '····-·-', '1212121232123', 0, ''],
[133, '····--·', '1212121232321', 0, ''],
[134, '····---', '1212121232323', 0, ''],
[135, '···-···', '1212123212121', 0, ''],
[136, '···-··-', '1212123212123', 0, '$'],
[137, '···-·-·', '1212123212321', 0, ''],
[138, '···-·--', '1212123212323', 0, ''],
[139, '···--··', '1212123232121', 0, ''],
[140, '···--·-', '1212123232123', 0, ''],
[141, '···---·', '1212123232321', 0, ''],
[142, '···----', '1212123232323', 0, ''],
[143, '··-····', '1212321212121', 0, ''],
[144, '··-···-', '1212321212123', 0, ''],
[145, '··-··-·', '1212321212321', 0, ''],
[146, '··-··--', '1212321212323', 0, ''],
[147, '··-·-··', '1212321232121', 0, ''],
[148, '··-·-·-', '1212321232123', 0, ''],
[149, '··-·--·', '1212321232321', 0, ''],
[150, '··-·---', '1212321232323', 0, ''],
[151, '··--···', '1212323212121', 0, ''],
[152, '··--··-', '1212323212123', 0, ''],
[153, '··--·-·', '1212323212321', 0, ''],
[154, '··--·--', '1212323212323', 0, ''],
[155, '··---··', '1212323232121', 0, ''],
[156, '··---·-', '1212323232123', 0, ''],
[157, '··----·', '1212323232321', 0, ''],
[158, '··-----', '1212323232323', 0, ''],
[159, '·-·····', '1232121212121', 0, ''],
[160, '·-····-', '1232121212123', 0, ''],
[161, '·-···-·', '1232121212321', 0, ''],
[162, '·-···--', '1232121212323', 0, ''],
[163, '·-··-··', '1232121232121', 0, ''],
[164, '·-··-·-', '1232121232123', 0, ''],
[165, '·-··--·', '1232121232321', 0, ''],
[166, '·-··---', '1232121232323', 0, ''],
[167, '·-·-···', '1232123212121', 0, ''],
[168, '·-·-··-', '1232123212123', 0, ''],
[169, '·-·-·-·', '1232123212321', 0, ''],
[170, '·-·-·--', '1232123212323', 0, ''],
[171, '·-·--··', '1232123232121', 0, ''],
[172, '·-·--·-', '1232123232123', 0, ''],
[173, '·-·---·', '1232123232321', 0, ''],
[174, '·-·----', '1232123232323', 0, ''],
[175, '·--····', '1232321212121', 0, ''],
[176, '·--···-', '1232321212123', 0, ''],
[177, '·--··-·', '1232321212321', 0, ''],
[178, '·--··--', '1232321212323', 0, ''],
[179, '·--·-··', '1232321232121', 0, ''],
[180, '·--·-·-', '1232321232123', 0, ''],
[181, '·--·--·', '1232321232321', 0, ''],
[182, '·--·---', '1232321232323', 0, ''],
[183, '·---···', '1232323212121', 0, ''],
[184, '·---··-', '1232323212123', 0, ''],
[185, '·---·-·', '1232323212321', 0, ''],
[186, '·---·--', '1232323212323', 0, ''],
[187, '·----··', '1232323232121', 0, ''],
[188, '·----·-', '1232323232123', 0, ''],
[189, '·-----·', '1232323232321', 0, ''],
[190, '·------', '1232323232323', 0, ''],
[191, '-······', '3212121212121', 0, ''],
[192, '-·····-', '3212121212123', 0, ''],
[193, '-····-·', '3212121212321', 0, ''],
[194, '-····--', '3212121212323', 0, ''],
[195, '-···-··', '3212121232121', 0, ''],
[196, '-···-·-', '3212121232123', 0, ''],
[197, '-···--·', '3212121232321', 0, ''],
[198, '-···---', '3212121232323', 0, ''],
[199, '-··-···', '3212123212121', 0, ''],
[200, '-··-··-', '3212123212123', 0, ''],
[201, '-··-·-·', '3212123212321', 0, ''],
[202, '-··-·--', '3212123212323', 0, ''],
[203, '-··--··', '3212123232121', 0, ''],
[204, '-··--·-', '3212123232123', 0, ''],
[205, '-··---·', '3212123232321', 0, ''],
[206, '-··----', '3212123232323', 0, ''],
[207, '-·-····', '3212321212121', 0, ''],
[208, '-·-···-', '3212321212123', 0, ''],
[209, '-·-··-·', '3212321212321', 0, ''],
[210, '-·-··--', '3212321212323', 0, ''],
[211, '-·-·-··', '3212321232121', 0, ''],
[212, '-·-·-·-', '3212321232123', 0, ''],
[213, '-·-·--·', '3212321232321', 0, ''],
[214, '-·-·---', '3212321232323', 0, ''],
[215, '-·--···', '3212323212121', 0, ''],
[216, '-·--··-', '3212323212123', 0, ''],
[217, '-·--·-·', '3212323212321', 0, ''],
[218, '-·--·--', '3212323212323', 0, ''],
[219, '-·---··', '3212323232121', 0, ''],
[220, '-·---·-', '3212323232123', 0, ''],
[221, '-·----·', '3212323232321', 0, ''],
[222, '-·-----', '3212323232323', 0, ''],
[223, '--·····', '3232121212121', 0, ''],
[224, '--····-', '3232121212123', 0, ''],
[225, '--···-·', '3232121212321', 0, ''],
[226, '--···--', '3232121212323', 0, ''],
[227, '--··-··', '3232121232121', 0, ''],
[228, '--··-·-', '3232121232123', 0, ''],
[229, '--··--·', '3232121232321', 0, ''],
[230, '--··---', '3232121232323', 0, ''],
[231, '--·-···', '3232123212121', 0, ''],
[232, '--·-··-', '3232123212123', 0, ''],
[233, '--·-·-·', '3232123212321', 0, ''],
[234, '--·-·--', '3232123212323', 0, ''],
[235, '--·--··', '3232123232121', 0, ''],
[236, '--·--·-', '3232123232123', 0, ''],
[237, '--·---·', '3232123232321', 0, ''],
[238, '--·----', '3232123232323', 0, ''],
[239, '---····', '3232321212121', 0, ''],
[240, '---···-', '3232321212123', 0, ''],
[241, '---··-·', '3232321212321', 0, ''],
[242, '---··--', '3232321212323', 0, ''],
[243, '---·-··', '3232321232121', 0, ''],
[244, '---·-·-', '3232321232123', 0, ''],
[245, '---·--·', '3232321232321', 0, ''],
[246, '---·---', '3232321232323', 0, ''],
[247, '----···', '3232323212121', 0, ''],
[248, '----··-', '3232323212123', 0, ''],
[249, '----·-·', '3232323212321', 0, ''],
[250, '----·--', '3232323212323', 0, ''],
[251, '-----··', '3232323232121', 0, ''],
[252, '-----·-', '3232323232123', 0, ''],
[253, '------·', '3232323232321', 0, ''],
[254, '-------', '3232323232323', 0, '']
];




















//============================================================
//d5 OTROS




//OTROS

/*LISTA DE IDIOMAS "DISPONIBLES"
1-Ingles,2-Español,3-Francés,4-Portugués,5-Alemán,6-Árabe,7-Chino,8-Coreano,9-Japonés,10-Ruso,11-Turco

1-ASL,2-LSC,3-
*/
/*//QUITAR ESTO:
const 	k002O		= 	[	[ 0, ''],
							[ 1, '<span class="fas fa-book-open cAjust"></span>'],
							[ 2, '··-'],
							[ 3, '⠋'],
							[ 4, '<span class="fas fa-sign-language cAjust"></span>'],
							[ 5, '']
						];*/
//alertas







//===============
//NOTA: en g02RUTA la columna '6idLOGO' puede ser que sobre si se ponen los iconos directamente desde el boton donde este el cursor, Las RutaText y ColumTex direccionan a la ruta y la columna respectivamente donde esta el STRING que debe cargar la tapa	
const g02RUTA =/**/[['0idRuta', '1Descrip/(3..)RAMAS+secs>ppal', '2RutaText', '3ColumTex', '4libre', '5:1PPAL', '6idLOGO', '7=columna0', 8, 9, 10, 11],
[1, 'Ajustes', 4, 2/*1*/, 0, 0, 2, 1, 4		/**/],
[2, 'Idioma y lugar', 4, 6/*2*/, 0, 0, 50, 2, 4		/**/],
[3, 'Anuncios - Actividades', 4, 10/*5*/, 0, 1/*1*/, 3, 3			/**/	/**/],
[4, 'Menú', 0/*0*/, 19, 0, 0, 4, 4],
[5, '=x= Tutoríal de estilo =x=', 1, 28, 0, 0, 9, 5, 1, 4		/**/],
[6, '=x= Accesibilidad =x=', 4, 1/*9*/, 0, 0, 42, 6],
[7, 'Formato/ACCESO/PRESENTACIÓN', 4, 1, 0, 0, 56, 7],
[8, 'Preguntas frecuentes', 4, 20, 0, 0, 70, 8, 4       /**/]
];


//1Permitir,0Bloquear teclas del teclado [2]1B,[3]3C,[4]4,[5]6,[6]7,[7]9,[8]0,[9]ZXNM+ESPACIO
var yKEYS =/**/[[0, 1, 2, 3, 4, 5, 6, 7, 8],
[1, '1^', '3v', '4x', '6Clic', '7Menú', '9i', '0Inputs o HuecoTapa', '4x, 3v, 1^ y 6Clic'],
[2, 1, 1, 0, 1, 0, 1, 0, 1]
];

var s00EXIT =/**/[[0, 'variable de salida HTML', 'string HTML'],
[1, '--1--Texto Local', ''],
[2, '--1--Texto Inter', ''],
[3, '--1--Señas Locales animadas', ''],
[4, '--1--Señas Inter animadas', ''],//antiguo f0071();//AÑADIR más HTML a g00VARS[69] si es fila de señas[28][2]
[5, '--1--Señas Locales tipo libro/fila de señas', ''],
[6, '--1--Señas Inter tipo libro/fila de señas', ''],
[7, '--1--Braille Local', ''],
[8, '--1--Braille Inter', ''],
[9, '--1--Morse Local', ''],
[10, '--1--Morse Inter', ''],
[11, 'IMAGEN:tamaño icono', ''],
[12, 'IMAGEN:tamaño foto/video', ''],
[13, '', ''],
[14, '', ''],
[15, '', ''],
[16, '', ''],
[17, '', ''],
[18, '', ''],
[19, '', ''],
[20, '', '']
]


var g00HTML =/**/[[0, '--1--Parrafo original (+LINK->12)', 'ii2 dog You are in Setting,Read lines 012 345 678 9 123   vec, e,s,57hola8?@htt ps://gm,a.....;il.com_ve     ,ces,578@g; mail.com   You a      ;re in Setting,Read lines, 012,345 678 1 and 2 )(?...,.,;;9__        '],
[1, '--1--Si 0 contiene algún LINK pone 1, 0NoLink, los links no sirven por que tienen , y ;', 0],
[2, '--1--Parrafo 0 NORMALIZADO SI 1=0->ajusta {,;espacios}, SI 1=1->ajusta solo los {espacios}', 'ii2 dog You are in Setting, Read lines 012 345 678 9 123 vec, e, s, 57hola8?@htt ps://gm, a.....;il.com_ve, ces, 578@g; mail.com You a; re in Setting, Read lines, 012, 345 678 1 and 2 )(?..., ., ; ; 9__'],//SI 1=1->'ii2 dog You are in Setting,Read lines 012 345 678 9 123 vec, e,s,57hola8?@https://gm,a.....;il.com_ve ,ces,578@g; mail.com You a ;re in Setting,Read lines, 012,345 678 1 and 2 )(?...,.,;;9__'				
[3, '--1--Partir 2 en un arreglo de PALABRAS', ['ii2', 'dog', 'You', 'are', 'in', 'Setting,', 'Read', 'lines', '012', '345', '678', '9', '123', 'vec,', 'e,', 's,', '57hola8?@htt', 'ps://gm,', 'a.....;il.com_ve,', 'ces,', '578@g;', 'mail.com', 'You', 'a;', 're', 'in', 'Setting,', 'Read', 'lines,', '012,', '345', '678', '1', 'and', '2', ')(?...,', '.,', ';', ';', '9__']],
[4, '--1--Una subcadena \'PALABRA\' de 3[x] para pasarla a SEÑAS...', 'Setting__run!'],
[5, '--1--Lista caracteres especiales de 4, tipo arreglo', ['_', '_', '!']],
[6, '--1--Lista resumida de caracteres especiales de 5', ['_', '!']],
[7, '--1--Cantidad individual de cada caracter especial de 6', [2, 1]],
[8, '--1--Si 4 es un LINK, correo electronico u otra cadena Inseparable se pone 1 y salta a 13', 0],
[9, '--1--Arreglo de palabras y caracteres especiales de 4', ['Setting', '_', '_', 'run', '!']],// usar esta expresion regular: /([A-Za-z]+|[^A-Za-z])/g
[10, '--1--Tipos de 9[x] palabras=1 / caracteres especiales o letras sueltas=0', [1, 0, 0, 1, 0]],
[11, '--1--palabra de 9[x] se busca en 1BANCOSIGN, caracteres esp o letras sueltas de 9[x] se salta a 13', 'Setting'],
[12, '--1--Si 11 corresponde a una palabra del 1BANCOSIGN se pone true y salta a 14', false],
[13, '--1--Caracter especial o Letras de 11[x] o de 4[x] cuando la palabra no aparece en 1BANCOSIGN', ['S', 'e', 't', 't', 'i', 'n', 'g']],
[14, '--1--HTML NEUTRO acumulado en lengua de señas ANIMADA del parrafo 0, cada palabra de 4 se separa con espacios', '<img src=...>...</img>'],
[15, '--1--Una subcadena PALABRA de 3[x] para pasarla a BRAILLE...', 'Setting__run!578'],
[16, '--1--Particion de 15[x] en grupos', ['S', 'etting', '__', 'run', '!', '578']],
[17, '--1--Tipos 16[x] VER TABLA s00Grupo', [4, 1, 2, 1, 2, 3]],
[18, '--1--Grupo de 16[x] separado en caracteres sueltos', ['5', '7', '8']],
[19, '--1--HTML acumulado en braille del parrafo 0, cada PALABRA de 15 se separa con espacios', '⠨ ⠁⠃⠷⠞⠮ ⠉⠙⠑ ⠋⠛⠓... ⠊⠚⠅⠇ ⠍'],
[20, '--1--Una subcadena \'PALABRA\' de 3[x] para pasarla a MORSE...', 'Setting__run!57'],
[21, '--1--20 en minúsculas', 'setting__run!57'],
[22, '--1--21 separado en caracteres sueltos', ['s', 'e', 't', 't', 'i', 'n', 'g', '_', '_', 'r', 'u', 'n', '!', '5', '7']],
[23, '--1--·s, -s y espacios Morse NEUTROS acumulados del parrafo 0 que van a salir en HTML', "DEMO ·-·´·-··´··'... ·-·´·-´-"],
[24, '--1--Tiempo en milisegundos (string) de los ·s, -s y espacios morse del parrafo 0', '50,100,300,100,80,350,80,100,300,100,80,100,80,350,80,100,80'],
[25, 'Vibracion Local 24 acumulada ONTIME', ''],
[26, '--1--Serie NÚMEROS SEÑAS ANIMADAS de un guion 5,76,28 PARA LA ANIMACION', ''],
[27, '----html de la ruta', ''],
[28, 'Html Internacional en Señas ANIMADA de la ruta', ''],
[29, 'Html Internacional en Braille de la ruta', ''],
[30, 'Html Internacional en Morse de la ruta', ''],
[31, '--1--Serie TEXTOS GLOSAS de las señas ANIMADAS de un guion "I","L","I" PARA LA ANIMACION', ''],
[32, '--1--HTML NEUTRO acumulado en lengua de señas tipo libro del parrafo 0, cada palabra de 4 se separa con espacios', '<img src=...>...</img>'],
[33, 'Html Internacional en Señas tipo libro de la ruta', ''],
[],//LIBRE //34									,'* * * serie NÚMEROS SEÑAS TIPO LIBRO de un guion 5,76,28 PARA LA ANIMACION'			,''],
[],//LIBRE //35									,'* * * serie TEXTOS GLOSAS de las señas TIPO LIBRO de un guion "I","L","I" PARA LA ANIMACION'			,''],
[36, '--1--Serie NÚMEROS de IMAGEN/SEÑA repetida(s) o escena(s) de un guion 1,1,2,1 PARA LA ANIMACION', ''],
[37, '', '']
];





var tLanPAIS = [[0, 'langABR', 'langPais'],
[1, 'ar', 'ar-SA'],
[2, 'cs', 'cs-CZ'],
[3, 'da', 'da-DK'],
[4, 'de', 'de-DE'],
[5, 'el', 'el-GR'],
[6, 'en', 'en   '],
[7, 'en', 'en-AU'],
[8, 'en', 'en-GB'],
[9, 'en', 'en-IE'],
[10, 'en', 'en-IN'],
[11, 'en', 'en-US'],
[12, 'en', 'en-ZA'],
[13, 'es', 'es-AR'],
[14, 'es', 'es-ES'],
[15, 'es', 'es-MX'],
[16, 'es', 'es-US'],
[17, 'fi', 'fi-FI'],
[18, 'fr', 'fr-CA'],
[19, 'fr', 'fr-FR'],
[20, 'he', 'he-IL'],
[21, 'hi', 'hi-IN'],
[22, 'hu', 'hu-HU'],
[23, 'id', 'id-ID'],
[24, 'it', 'it-IT'],
[25, 'ja', 'ja-JP'],
[26, 'ko', 'ko-KR'],
[27, 'nb', 'nb-NO'],
[28, 'nl', 'nl-BE'],
[29, 'nl', 'nl-NL'],
[30, 'pl', 'pl-PL'],
[31, 'pt', 'pt-BR'],
[32, 'pt', 'pt-PT'],
[33, 'ro', 'ro-RO'],
[34, 'ru', 'ru-RU'],
[35, 'sk', 'sk-SK'],
[36, 'sv', 'sv-SE'],
[37, 'th', 'th-TH'],
[38, 'tr', 'tr-TR'],
[39, 'zh', 'zh-CN'],
[40, 'zh', 'zh-HK'],
[41, 'zh', 'zh-TW']
];


const t2Propi = [[0, 1, 2, 3, 4, 5],
['1Iniciales', 'T/BIs', 'T/CIs', 'T/HMc', 'T/Ker', 'T/SGe'],
['2AbrevInterna', 'bv', 'fr', 'hm', 'fr', 'gs'],
['3Idioma', 0, 3, 1, 3, 1],
['4VozLocal', 0, 5, 51, 5, 51],
['5LangPais', 0, 18, 8, 18, 8],
['6SeñasLocales', 0, 1, 1, 1, 1]
];



//Suramerica..
const t7Propi = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
['1Iniciales', 'Argen', 'Boliv', 'Brazi', 'Chile', 'Colom', 'Ecuad', 'Guyan', 'Parag', 'Peru', 'Surin', 'Trini', 'Urugu', 'Venez', 'T/Aru', 'T/Bon', 'T/Cur', 'T/FIs', 'T/FGu', 'T/SGe'],
['2AbrevInterna', 'ar', 'bo', 'br', 'cl', 'co', 'ec', 'gf', 'py', 'pe', 'sr', 'tt', 'uy', 've', 'aw', 'bq', 'cw', 'fk', 'gf', 'gs'],
['3Idioma', 2, 2, 4, 2, 2, 2, 3, 2, 2, 0, 1, 2, 2, 0, 0, 0, 1, 3, 1],
['4VozLocal', 10, 1, 24, 1, 1, 1, 55, 1, 1, 0, 34, 1, 1, 0, 0, 0, 34, 55, 34],
['5LangPais', 13, 15, 31, 15, 15, 15, 19, 15, 15, 0, 11, 15, 15, 0, 0, 0, 11, 19, 11],
['6SeñasLocales', 1, 1, 1, 1, 2, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1]
];



//LISTA DE IDIOMAS Y DE SEÑAS "DISPONIBLES" CON ABREVIATURAS ORGANIZADOS POR FILAS 4ExpReg = ExpresionRegular, ver s00ExpReg - Braille:
const kLineIdi =/**/[[0, '1AbrIngles', '2Linea/Idioma', '3LagHTML', '4ExpReg'],
[1, 'En', '-Ingles', 'en', 7],
[2, 'Sp', '-Español', 'es', 7],
[3, 'Fr', '-Francés', 'fr', 7],
[4, 'Po', '-Portugués', 'pt', 0],
[5, 'Al', '-Alemán', 'de', 0],
[6, 'Ar', '-Árabe', 'ar', 0],
[7, 'Ch', '-Chino', 'zh', 0],
[8, 'Co', '-Coreano', , 0],
[9, 'Ja', '-Japonés', , 0],
[10, 'Ru', '-Ruso', , 0],
[11, 'Tu', '-Turco', , 0],
[12, '  ', '', , 0],
[13, '  ', '', , 0],
[14, '  ', '', , 0],
[15, '  ', '', , 0]
];



/*
Falta arrays de Glosas, mapas, fotos y videos??? cómo conectar todo con el reproductor y recursos???



*/

/* Cuadro Control de TEXTOS
COLS:
0	ID
1 	id texto/GLOSA
1	FECHA CREACION
2 	fecha fin
	IDIOMA
3	TIPO DE TEXTO - anuncio, caso, descripcion imagen


COLS
0	id TEXTO
1 	


FILAS A
0	-TITULOS
1	INGLES
2	ESPAÑOL
3	FRANCES

FILAS B
0	-TITULOS
1	GLOSA ASL
2	GLOSA LSC
3	GLOSA LSE


*/
/*
MATRICES DE RECURSOS MULTIMEDIA:
	d000[A][B][C][D]
	d001: ANUNCIOS
	d002: CASOS
	d003: Etc..


MATRIZ DE ANUNCIOS:
d001[A][B]->B columna de la matriz: 1,2,3,etc y cada columna representa a un ANUNCIO/CASO/ ETC.., cuando se crea o elimina un ANUNCIO/caso/ETC se debe crear o eliminar toda ESA columna que contiene datos
	[1][B]->'Strings en multiples idiomas'
	[1][B][C]->ID idioma ej:
	[1][B][0]'Strings/TEXTOS En Ingles' 
	[1][B][1]'Strings/TEXTOS En español'
	[1][B][2]'Strings/TEXTOS En frances'
	[1][B][C][0]->'Anuncio resumido' 
	[1][B][C][1]->'Anuncio completo'
	[1][B][C][2]->'Descripción imagen'
	[1][B][C][3]->'Descripción mapa'
	[1][B][C][4]->'Descripción infograma'
	[1][B][C][5]->'transcripción video/audio Youtube'

	[2][B]->'Glosas en multiples señas'
	[2][B][C]->ID seña ej:
	[2][B][0]'ASL' 
	[2][B][1]'LSC'
	[2][B][2]'LSE'
	[2][B][C][0]->'Anuncio resumido en glosa' 
	[2][B][C][1]->'Anuncio completo en glosa'
	[2][B][C][2]->'Descripción imagen en glosa'
	[2][B][C][3]->'Descripción mapa en glosa'
	[2][B][C][4]->'Descripción infograma en glosa'
	[2][B][C][5]->'transcripción video/audio Youtube en glosa'

	[3][B]->'Enlaces'
	[3][B][C]->ID enlance ej:
	[3][B][0]->'link video/audio Youtube' 
	[3][B][1]->'link mapa Google maps'
	[3][B][2]->'link fotografía'
	[3][B][3]->'link infograma'

	[4][B]->'Anexos - Otros datos'
	[4][B][C]->Id VARIOS EJ:
	[4][B][0]->Id usuario/Fuente
	[4][B][0]->Id comunidad Fuente
	[4][B][1]->ESTADO 1:ACTIVO 0:INACTIVO
	[4][B][2]->Fecha creación
	[4][B][3]->Fecha ACTUALIZACIÓN
	[4][B][4]->DIAS activo
	[4][B][5]->Dias inactivo
	
	


*/

var d000 = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
[1, [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
[2, [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
[3, [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
];

d000[1][1] = [['thank', 'you', 'hello', 'world'],
['muchas', 'gracias', 'hola', 'mundo'],
['hallo', 'ette', 'cest', 'monned']];

d000[2][1] = ['www.di1.com', 'www.di2.com', 'www.di3.com'];

d000[3][1] = ['Youtube//.1dgrtetretr1', 'Youtube//.2dgrtetfdsfretr2', 'Youtube//.3dgraasdasdtetretr'];


//4 dimenciones
//d000[1][1][1][3] - 'mundo'
const ddd = [[1],
[2, ''],
[3]];


//RUTA 5 MULTIMEDIA: DESCRIPCION DE IMAGENES, GUÍONES DE VIDEO O INFOGRAMAS
const d8005A =/**/[['Casillas', 1, 2, 3],
[1, '', 'in the image Greta Thunberg, a young girl, with white skin, light eyes, long blonde hair with a braid, blue short-sleeved cotton shirt', 'a tutorial is a method of knowledge transfer or an instructional system of short duration and based on self-learning, and can be part of a larger learning process.'],
[2, '', 'en la imagen Greta Thunberg, una chica joven, de piel blanca, ojos claros, el cabello largo y rubio con una trenza, camiza azúl de manga corta en algodón', 'un tutorial es un método de transferencia de conocimiento o un sistema instructivo de corta duración y basado en el autoaprendizaje, pudiendo ser parte de un proceso de aprendizaje mayor.'],
[3, '', 'dans l\'image Greta Thunberg, une jeune fille, à la peau blanche, aux yeux clairs, aux longs cheveux blonds avec une tresse, chemise bleue en coton à manches courtes', 'un tutoriel est une méthode de transfert de connaissances ou un système d\'enseignement de courte durée et basé sur l\'auto-apprentissage, et peut faire partie d\'un processus d\'apprentissage plus large.']
];
//trabajar de la mano con g00VARS[11][2]::LÍNEA(S)DeLectura:0TodasLasLíneas,1Texto,2Morse,3Braille,4Señas
//['1 0:Imagen,1:Icono,2:Texto,3ImagenAlta,4VideoAlto,5Texto+Icono,6Icono+Icono serie
//['5 0:FotoIcono 1:VideoMulti 2:FotoMulti 3:TextoMulti 4:InEntrada 5:OutSalida
//['10 0:Normal sin nada, 1:Deshabilitado o Deseleccionado /slash, 2:Campo Vacio obligatorio ?pregunta, 3:Campo con info o Respuesta _RayaInferior, 4:Campo vacio opcional -GuionMedio 	
const d8005B =/**/[['Recursos/ Casillas..', 1, 2, 3],
['1 0:Imag,1:Icon,2:Texto,3ImagenA,4VideoA', 0, 0, 0],
['2 id de la Imag, Icon o Texto', 1, 1, 1],
['3 onclick function, vacio=NO PERMITIDA(INFO)', 17, 12, 12],
['4 Visible 1:SI 0:no', 1, 1, 1],
['5 0:FotI 1:Vide 2:FotM 3:Text 4:In 5:Out', 1, 1, 1],//,1 	,2 	,3 	],  - 0k 0,0,0
['6 id Video([5]1) o id foto([5]0/2)', 1, 2, 0],
['7 id Texto Icono', 0, 0, 0],
['8 ids Iconos Capa1', 0, 0, 0],
['9 ids Iconos Capa2', 0, 0, 0],
['10 Capa3 Estado 0: 1:/ 2:_ 3: ? 4: -', 0, 0, 0]
];








//============================================================
//MONGO DB DATOS EN LA NUBE DE LA APP




//IMAGENES    drive -- ilifebogota@gmail.com - texto de apoyo para mostrar las imagenes : https://youtu.be/FgaaJCa0YNU   Cómo subir imágenes a Google Drive que podamos usar en un blog, en Twine o en cualquier página Web
const kTapa0 =/**/[['idImagen', 'Nombre', 'LISTA imagenes', 'fuente /marca o autor', 'enlace completo de la fuente gratuita'],
[1, 'Fotografía Greta Thumberg', 'files/greta.png'],
[2, 'Fotografía Greta Thumberg', 'files/greta2.jpeg'],
[3, 'Fotografía Convocatoria MinTic', 'files/convocatoria.jpg'],
[4, 'Bienvenido', 'files/bienvenido.jpg'],
[5, 'qr code ilife2', 'files/711-8-4.png'],//Este es el logo que sale en menu, hacerlo dinamico - interactivo!!
[6, 'caminata', 'files/caminata.jpg'],
[7, 'caminata2', 'files/caminata2.jpeg'],
[8, 'botonesder', 'https://lh3.googleusercontent.com/d/1ESFRCMOaaijR6K4WXxlqfXdjZsGF5My1', ''],//COMPARTIDO DESDE DRIVE PUBLICO:: https://drive.google.com/file/d/1ESFRCMOaaijR6K4WXxlqfXdjZsGF5My1/view?usp=sharing
[9, 'Capslock', 'https://lh3.googleusercontent.com/d/1kALMfFpFpxoii0bR8dlxxqhN3pYbE54X'],//,'files/capslock.jpg'],//https://photos.app.goo.gl/vTreHtFHh3LDVRid7
[10, 'Teclado', 'https://lh3.googleusercontent.com/d/12acuZqZ1qJKjxGbeOrQd87EWDkvxF1Am'],//,'files/keyboard.png'],//https://photos.app.goo.gl/TbkQbsfWKcpG3VVV8
[11, 'Ciega', 'https://lh3.googleusercontent.com/d/1Q-IzfWDVwxnKxPhsttOJFB-VSfpspTr2'],//,'files/ciega.png'],//https://photos.app.goo.gl/RKXQPE8guRngGHPHA
[12, 'manco', 'https://lh3.googleusercontent.com/d/1G5RgVLEB154VSP6RLW3-NdYyEbwsiXNL'],//,'files/manco.png'],//https://photos.app.goo.gl/mh13dQYTcgqsmTwv6
[13, 'botonesizq', 'https://lh3.googleusercontent.com/d/127VFkmFp3CrM3gn9EkPGdW-goYWtKeO8'],//,'files/botonesizq.png']//https://photos.app.goo.gl/FV6eq8DfVdkisdxAA
[14, 'Asistente', 'https://lh3.googleusercontent.com/d/1XuFHkt_wDppKj2GcrMbnQyQbT_D0IkhQ'],
[15, 'Asistente con corona sonriente', 'https://lh3.googleusercontent.com/d/1iRGdxX7HLiAiEW17D1FD_kM1hz2VeUzf', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[16, '4 Logos discapacidad', 'https://lh3.googleusercontent.com/d/1XXJQJ7SsIJqSB0Zx0YzXns5_nVapEji2', 'pixabay.com', 'https://pixabay.com/es/illustrations/desventaja-logo-sordo-se%c3%b1alizaci%c3%b3n-1173331/'],
[17, 'pies y silla mujer sentada', 'https://lh3.googleusercontent.com/d/1XHYKFQ5-SjPnytY5TV6CijTV-W2Yx0KU', 'pexels.com', 'https://www.pexels.com/search/disabilities/'],
[18, 'hombre montañismo', 'https://lh3.googleusercontent.com/d/1SnlEzVgnX5g5L6kqiB2TAhuii0oa4iaq', 'pixabay.com', 'https://pixabay.com/es/photos/monta%c3%b1ismo-hombre-rastro-sendero-455338/'],
[19, 'Asistente con corona sonriente', 'https://lh3.googleusercontent.com/d/1iRGdxX7HLiAiEW17D1FD_kM1hz2VeUzf', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[20, 'Africa', 'https://lh3.googleusercontent.com/d/1EDIFa8PtXKH4SnhuznYuGvfvU4iD3ALZ', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[38, 'Andalucia', 'https://lh3.googleusercontent.com/d/1Qxal8B_WWNOX-ncZK9vOdkvHALtaZov5', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[39, 'Antioquia', 'https://lh3.googleusercontent.com/d/1idtHERnf4fmIKmz9gXueLXcwL9_9YmXe', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[26, 'Antartida', 'https://lh3.googleusercontent.com/d/1xlAVFa7DJuD0Y4gPnhK9FpBTXgix0vqj', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[27, 'Argentina', 'https://lh3.googleusercontent.com/d/1So1in1XWjVUyQ0jDjblDsyaUlu3P4_Lz', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[22, 'Asia', 'https://lh3.googleusercontent.com/d/1QqxLbpMTZtly0TyvlalgtO6TXhsK5peS', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[29, 'Australia', 'https://lh3.googleusercontent.com/d/1dJmaF6tgC3BnsBRBBlrFAbxu8FKMM_ao', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[28, 'Bogota', 'files/wifi4.png'],//,'https://lh3.googleusercontent.com/d/1hCq_IAVTfxpIcaU4lel-gRi41pcm3iAp'	,'pixabay.com' 		,'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[40, 'Boyaca', 'https://lh3.googleusercontent.com/d/1Znx_KcJ3kEz7-oVJh3_MtySLo3M43NTn', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],//https://lh3.googleusercontent.com/d/1Znx_KcJ3kEz7-oVJh3_MtySLo3M43NTn
[52, 'Catalonia neighborhood', 'files/wifi6.png'],//,'https://lh3.googleusercontent.com/d/1ZvSAVnrjdYncuQYvv21u7o1YeCh8ZLUF'	,'pixabay.com' 		,'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[53, 'Central Chapinero neighborhood', 'files/wifi7.png'],//,'https://lh3.googleusercontent.com/d/19GqX3_bkFD_QW6MgAfstPakYrKo7g5kn'	,'pixabay.com' 		,'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[30, 'Colombia', 'files/wifi8.png'],//,'https://lh3.googleusercontent.com/d/1tylMs2os6FmMPM_JCqRSu9uW2rYlTbtn'	,'pixabay.com' 		,'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[41, 'Cundinamarca', 'files/wifi9.png'],//,'https://lh3.googleusercontent.com/d/193b2xggxWx5-g8x5gxPkoU8eEFtLzGBT'	,'pixabay.com' 		,'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[31, 'EquatorialGuinea', 'https://lh3.googleusercontent.com/d/1BXLwZqCOz-sI2Vc_8ZDyt3pu2qMyIOLB', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[23, 'Europa', 'https://lh3.googleusercontent.com/d/1zs79H3qgXDKAfqg9sc1lAi-vzk3ZnKEA', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[32, 'France', 'https://lh3.googleusercontent.com/d/1XOBR9VYXMJsOmX4-Jt2p68WWFCkmJn5C', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[36, 'HopeBay', 'https://lh3.googleusercontent.com/d/1DgKpjRA7HOzxzG5Y3VfHQphM3rqYV_5K', 'wikipedia.com', 'https://en.wikipedia.org/wiki/Hope_Bay'],
[45, 'location Chapinero', 'files/wifi15.png'],//,'https://lh3.googleusercontent.com/d/1GTKeLHiwNAJWK-oe4ItFas054Jv2wKf8'	,'pixabay.com' 		,'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[46, 'location Kenedy', 'files/wifi12.png'],//,'https://lh3.googleusercontent.com/d/1mauCQabqkABY5JO2IyFoyfWnSSHp5d6P'	,'pixabay.com' 		,'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[47, 'location Puente Aranda', 'files/wifi13.png'],//,'https://lh3.googleusercontent.com/d/1wlPezPjQHea4iLmF5QgDvq_R4UVE0n0Q'	,'pixabay.com' 		,'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[48, 'location Usaquen', 'files/wifi14.png'],//,'https://lh3.googleusercontent.com/d/1uEDPqhEPkuABEydxzuSXlp06nhD2JWc0'	,'pixabay.com' 		,'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[49, 'Madrid', 'https://lh3.googleusercontent.com/d/1bgc3PieI5qInzerKgwnUOKcrlqEuOcMc', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[43, 'MadridsCommunity', 'https://lh3.googleusercontent.com/d/19lyoeujVqWCc-hSHj47RUkkJJh30kF55', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[55, 'Marly neighborhood', 'files/wifi20.png'],//,'https://lh3.googleusercontent.com/d/1XxvGJHdYQ5peM2wDANIgMzLRTYE1mB0e'	,'pixabay.com' 		,'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[50, 'Medellin', 'https://lh3.googleusercontent.com/d/1ouKCkronJzeGzgHLEZArekqmqaBICwoe', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[33, 'Mexico', 'https://lh3.googleusercontent.com/d/1YCsKIcAbrI8SXYVpd2PId3aYnbhLEb4m', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[44, 'Narino', 'https://lh3.googleusercontent.com/d/18-xuNXZK-FL_lA-a0-7yMrR6ae3rG2Q9', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[24, 'NorteAmerica', 'https://lh3.googleusercontent.com/d/1dOj2UtQ9jzMDHtxD8HnF_RqY2lnc6y3j', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[54, 'North Chapinero neighborhood', 'files/wifi22.png'],//,'https://lh3.googleusercontent.com/d/1fyuR0TunSqRaguiQABEx5MnojVaAJip4'	,'pixabay.com' 		,'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[21, 'Oceania', 'https://lh3.googleusercontent.com/d/18uP_bfEor1AgHFPfTXk9SboTSrBBklpg', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[51, 'Pasto', 'https://lh3.googleusercontent.com/d/1uWkDmbGt4krOIch2fnMLyoTinvVm8cJl', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[56, 'Porciuncula neighborhood', 'files/wifi24.png'],//,'https://lh3.googleusercontent.com/d/1QHtG9hvhrubtGdvO6BQ1cNOtKe0xLLa-'	,'pixabay.com' 		,'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[57, 'Quinta Camacho neighborhood', 'files/wifi3.png'],//,'https://lh3.googleusercontent.com/d/1HMshWxRc4ccRcUkNhF4HDR6M_BIJz2mv'	,'pixabay.com' 		,'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[34, 'SouthKorea', 'https://lh3.googleusercontent.com/d/13iPZfSyxLNIaJ_gJ0aPePrQLSKPZiEp5', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[25, 'SurAmerica', 'files/wifi26.png'],//,'https://lh3.googleusercontent.com/d/13Xy2Ic4tKotAqLdvBymNjJ1LcyzJcZ-h'	,'pixabay.com' 		,'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[35, 'Spain', 'https://lh3.googleusercontent.com/d/1JqshECXr4QBSbxNRrYoa2KCrLMm9AqB3', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[58, 'Sucre neighborhood', 'https://lh3.googleusercontent.com/d/1e_Nm6F6sEWAceCc39-vo4TqlGIfvBakE', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[42, 'TrinityPeninsula', 'https://lh3.googleusercontent.com/d/1pbGBpuFj0ya6vdysqGzGKcd89NRzRIJH', 'propia', 'hecha en painbrush online'],
[37, 'UnitedStates', 'https://lh3.googleusercontent.com/d/1-7vK687KNEaTbi3yqdW1bPGaCINd4sNc', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
//lugares ordenados hasta aqui..
[59, '', 'https://lh3.googleusercontent.com/d/HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[60, 'FlagCali', 'https://lh3.googleusercontent.com/d/1Ba0XyJIyFTfILiDYl-Ku1op2ibgfG_AH', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[61, 'FlagArgentina', 'https://lh3.googleusercontent.com/d/1PPlFAoaw4qqxv2vBd_5spgG4F9m5h_Mb', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[62, 'FlagAustralia', 'https://lh3.googleusercontent.com/d/1-NOVC8nTqGP9FCI3nog1swDbhqJvF6yK', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[63, 'FlagColombia', 'files/wifi2.png'],//,'https://lh3.googleusercontent.com/d/1jgaaa3R1pweWuiwVqTkYaJxSqTEMxNpu'	,'pixabay.com' 		,'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[64, 'FlagEquatorial Guinea', 'https://lh3.googleusercontent.com/d/1SuyuB-aB9MSHn7_zMsOXPZ1y8q2nQRlC', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[65, 'FlagFrance', 'https://lh3.googleusercontent.com/d/12h1n6afe5yvBTvmHzscO0NFHJHeJpyko', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[66, 'FlagMexico', 'https://lh3.googleusercontent.com/d/1kKsuIGg5QDZw0MBbKnnq0HCua2VzEhg2', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[67, 'FlagSouth Korea', 'https://lh3.googleusercontent.com/d/1WjqDm1Iv_X-gV9Q8GPE4o0eMJx0ko56e', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[68, 'FlagSpain', 'https://lh3.googleusercontent.com/d/1CYb0toVJqdn22oz1TD6wpcTwD0WyPsDP', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[69, 'FlagTrinidad Peninsula', 'https://lh3.googleusercontent.com/d/1Zz98gwpFAFw2HHMMb_5PaomU5j_y5qMv', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[70, 'FlagUnited States of America', 'https://lh3.googleusercontent.com/d/1q4K73heFbkykLNBfsGiUPhlUEbo8kyH_', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[71, 'FlagAndalusia', 'https://lh3.googleusercontent.com/d/1hOIDgFB6DxVce75V0eJchkX8Qv_q2cKy', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[72, 'FlagAntioquia', 'https://lh3.googleusercontent.com/d/1GfE2OyYqdGyMMmcVwC9yNebHLJ6zAdOt', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[73, 'FlagBogota', 'files/wifi16.png'],//,'https://lh3.googleusercontent.com/d/1J_4bDwz5E7Wzur_TrPr42pfoiZdWPmLZ'	,'pixabay.com' 		,'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[74, 'FlagBoyaca', 'https://lh3.googleusercontent.com/d/18Dp74o-rQWge48hZM64fEIppjakcnh7E', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[75, 'FlagCundinamarca', 'https://lh3.googleusercontent.com/d/1IZlRwfwihf5NwxevhJMh_zC2XPP2MG4h', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[76, 'FlagHope Bay', 'https://lh3.googleusercontent.com/d/1l443xUjOqmsv_0ucH4tcUbMfhtHQjrRy', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[77, 'FlagMadrid\'s community', 'https://lh3.googleusercontent.com/d/1wub1d4IRYY6KgQhkqLlTwHe4tVrAJNun', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[78, 'FlagNarino', 'https://lh3.googleusercontent.com/d/1AMq1x6DJiXXqspS0Jx4w-s96k8CBhjzN', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[79, 'FlagMadrid', 'https://lh3.googleusercontent.com/d/1pvXEnsZYgF_jEXkw-rebLev-d6Ro07Gf', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[80, 'FlagMedellin', 'https://lh3.googleusercontent.com/d/1P855cJbkfGKp3Z86POc3FOL-VVBvmfoC', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[81, 'FlagPasto', 'https://lh3.googleusercontent.com/d/1hbo71HfofUM__U3weov-ZiAPjX6NNQtf', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[82, 'Rendición cuentas puentearanda', 'files/wifi10.png'],//,'https://lh3.googleusercontent.com/d/1S902aIhvrYLCXvVymTYV0f9JgcSDLftO'	,'pixabay.com' 		,'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],//'http://www.puentearanda.gov.co/sites/puentearanda.gov.co/files/styles/banner-noticia-sgd/public/Noticias/fedesas.png?itok=iVwcTdm9'			,'web líder' 		,'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[83, 'Jovenes a la U', 'http://www.puentearanda.gov.co/sites/puentearanda.gov.co/files/styles/banner-noticia-sgd/public/Noticias/jovenes_0.png?itok=FymePFf2', 'web líder', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[84, 'Patruya purpura promujer', 'files/wifi23.png'],//,'https://lh3.googleusercontent.com/d/1GFEP5_pMuAXzfFGDskBpi1_mYBjQ558J'	,'pixabay.com' 		,'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],//'http://www.puentearanda.gov.co/sites/puentearanda.gov.co/files/styles/banner-noticia-sgd/public/Noticias/patrulla_purpura.png?itok=n79Vn8-s'	,'web líder' 		,'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[85, 'Musicay cutura puentearanda', 'files/wifi21.png'],//,'https://lh3.googleusercontent.com/d/1Ip7N2sZ8vz8fu1Bfqh8o1AQUhhs5T-vu'	,'pixabay.com' 		,'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],//'http://www.puentearanda.gov.co/sites/puentearanda.gov.co/files/styles/banner-noticia-sgd/public/Noticias/acsxascds.png?itok=o37PglDZ'			,'web líder' 		,'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[86, 'Feria deportiva puente aranda', 'https://bogota.gov.co/sites/default/files/styles/1050px/public/2023-05/feria-hecho-en-bogota-20-22-mayo-2023.jpg', 'web líder', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[87, 'emprendimiento puente aranda', 'files/wifi11.png'],//,'https://bogota.gov.co/sites/default/files/styles/1050px/public/2023-04/impulso-local-nota_0.jpg'												,'web líder' 		,'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[88, '123 emergencias', 'files/wifi1.jpeg'],//,'https://lh3.googleusercontent.com/d/1NJZCGPYRJoupXFW-edeq1cReCl4HWuCU'	,'pixabay.com' 		,'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],//'https://www.subredsur.gov.co/sites/default/files/documentos/Transparencia/logos/123.jpeg'														,'web líder' 		,'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[89, 'Parceros Por Bogotá', 'files/wifi5.png'],//,'https://lh3.googleusercontent.com/d/1oz2MfR6H42Qrhiec1RXWP1GofV5aV3vC'	,'pixabay.com' 		,'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],//'https://scontent.fbog3-2.fna.fbcdn.net/v/t39.30808-6/345572346_195636706750469_9129111886499350226_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=PUyGGdOHgbIAX-MTotf&_nc_ht=scontent.fbog3-2.fna&oh=00_AfAZkmeApNOnb-T4PuLU0pl8OLF3qP4UxNtb0nCJEKROvg&oe=646F44AB'	,'pixabay.com' 		,'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[90, 'Manzanas del cuidado 1', 'files/wifi17.jpg'],//,'https://lh3.googleusercontent.com/d/156D99DR7-AVMjM5h9cd4-YPMtqu8vjt8'	,'pixabay.com' 		,'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],//'https://www.manzanasdelcuidado.gov.co/buses/ima_/ima-slider-um_/ima-sidicu-sld-4_.jpg'					,'pixabay.com' 		,'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[91, 'Actividades manzanas del cuidado', 'files/wifi19.jpeg'],//,'https://lh3.googleusercontent.com/d/1n2U8Fne_x1tUyVFVbyVivhq8BILbpiK0'	,'pixabay.com' 		,'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],//'https://www.integracionsocial.gov.co/images/_img/2023/BOLETINES/MAYO/MANZANA_DEL_CUIDADO_186.jpeg'		,'pixabay.com' 		,'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[92, 'Cuidadora', 'files/wifi18.jpg'],//,'https://lh3.googleusercontent.com/d/1xx7UrOXTcTs1rThz5xSmWn3I8PB2rCNO'	,'pixabay.com' 		,'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],//'https://www.manzanasdelcuidado.gov.co/buses/ima_/ima-slider-um_/ima-sidicu-sld-2_.jpg'					,'pixabay.com' 		,'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[93, 'Impulso Local', 'files/wifi11.jpg'],//,'https://lh3.googleusercontent.com/d/1igOvmaALBD2c261HGQe5MEK6ZlkHBcNo'	,'pixabay.com' 		,'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],//'https://bogota.gov.co/sites/default/files/styles/1050px/public/2023-04/impulso-local-nota_0.jpg'			,'pixabay.com' 		,'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[94, 'Taller residuos chapinero', 'files/chapiResid.png'],
[95, 'Taller baile chapinero', 'files/bailechapi.png'],
[96, 'Todo el territotio fas fa-street-view', 'files/sin-divi-terr.png'],
[97, 'Africa', 'https://lh3.googleusercontent.com/d/HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[98, 'Africa', 'https://lh3.googleusercontent.com/d/HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[99, 'Africa', 'https://lh3.googleusercontent.com/d/HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[100, 'Africa', 'https://lh3.googleusercontent.com/d/HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[101, 'Africa', 'https://lh3.googleusercontent.com/d/HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[102, 'Africa', 'https://lh3.googleusercontent.com/d/HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[103, 'Africa', 'https://lh3.googleusercontent.com/d/HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[104, 'Africa', 'https://lh3.googleusercontent.com/d/HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[105, 'Africa', 'https://lh3.googleusercontent.com/d/HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[106, 'Africa', 'https://lh3.googleusercontent.com/d/HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[107, 'Africa', 'https://lh3.googleusercontent.com/d/HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[108, 'Africa', 'https://lh3.googleusercontent.com/d/HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[109, 'Africa', 'https://lh3.googleusercontent.com/d/HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[110, 'Africa', 'https://lh3.googleusercontent.com/d/HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[110, 'Africa', 'https://lh3.googleusercontent.com/d/HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[110, 'Africa', 'https://lh3.googleusercontent.com/d/HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
[110, 'Africa', 'https://lh3.googleusercontent.com/d/HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH', 'pixabay.com', 'https://pixabay.com/es/photos/agente-negocio-llamada-centrar-18762/'],
];

/*https://drive.google.com/file/d/127VFkmFp3CrM3gn9EkPGdW-goYWtKeO8/view?usp=sharing
https://drive.google.com/file/d/1ESFRCMOaaijR6K4WXxlqfXdjZsGF5My1/view?usp=sharing
https://drive.google.com/file/d/1kALMfFpFpxoii0bR8dlxxqhN3pYbE54X/view?usp=sharing
https://drive.google.com/file/d/12acuZqZ1qJKjxGbeOrQd87EWDkvxF1Am/view?usp=sharing
https://drive.google.com/file/d/1Q-IzfWDVwxnKxPhsttOJFB-VSfpspTr2/view?usp=sharing
https://drive.google.com/file/d/1G5RgVLEB154VSP6RLW3-NdYyEbwsiXNL/view?usp=share_link
https://drive.google.com/file/d/1iRGdxX7HLiAiEW17D1FD_kM1hz2VeUzf/view?usp=sharing
https://drive.google.com/file/d/1XXJQJ7SsIJqSB0Zx0YzXns5_nVapEji2/view?usp=sharing
https://drive.google.com/file/d/19SWSWn2EOi1QZXdgVRKa5qlvAR_2Zu6n/view?usp=sharing
https://drive.google.com/file/d/13id_3ifQBOUYntfxZyrlUlyhBbrJrPIy/view?usp=sharing
https://drive.google.com/file/d/1XHYKFQ5-SjPnytY5TV6CijTV-W2Yx0KU/view?usp=sharing
https://drive.google.com/file/d/1SnlEzVgnX5g5L6kqiB2TAhuii0oa4iaq/view?usp=sharing


'Andalusia'					
'Antioquia'					
'Bogota'						
'Boyaca'						
'Cundinamarca'					
'Hope Bay'						
'Madrid\'s community'			
'Narino'						





/
*
	//VIDEOS
const 	kTapa3		= [	[0		,'ID YT'				,''					,'Nombre'],
							[1		,'WjqiU5FgsYc'			,'BlspNhSxkVc'		,'The Present - OFFICIAL'																	],
							[2		,'K13P7-j5bKg'			,'BlspNhSxkVc'		,'Proyecto agua, plantas y energía (HD)'													],
							[3		,'Icx7hBWeULM'			,'BlspNhSxkVc'		,'Erste Christmas Ad 2018: What would Christmas be without love?'							],
							[4		,'BlspNhSxkVc'			,'BlspNhSxkVc'		,'Cápsula TIC: Aprende qué es una cápsula informativa'										],
							[5		,'38y_1EWIE9I'			,'BlspNhSxkVc'		,'Snack Attack'																				],
							[6		,'U9c60r0PzQE'			,'BlspNhSxkVc'		,'El latido de mi corazón COVER'															],
							[7		,'x_HmNQO_MVE'			,'BlspNhSxkVc'		,'UN POCO LOCO COCO - Cover Ukelele / Mayte'												],
							[8		,'IeLFaBKfIaQ'			,'BlspNhSxkVc'		,'“Mi libro de lectroescritura en señas”, una herramienta para entender la discapacidad'	],
							[9]
						];//variable del reproductor de youtube API - iframe  '56.25%': 16:9 Aspect Ratio (divide 9 by 16 = 0.5625)   4:3 3/4= '75%' 

*/


//Para ocultar un color (no visible) se comenta con // la fila para que no salga
const wColor = [['0-color FUERTE', '1-color velo', '2-id:key strings app', '3-En ingles(lista ordenada)', '4-Desc. ing', '5-Español', '6-Desc. esp', '7-frances', '8-Desc. fra', '9-coreano', '10-Desc. cor'],
// - - -
['rgb(195,161,120)', 'rgba(195,161,120,0.02)', 1, 'brown border', 'ink drop', 'borde marrón', 'gota de tinta', 'bordure marron', 'd\'encre turquoise', '갈색 테두리', '잉크 방울'],
['rgb(255,140,26)', 'rgba(255,140,26,0.01)', 2, 'orange border', 'ink drop', 'borde naranja', 'gota de tinta', 'bordure orange', 'd\'encre turquoise', '주황색 테두리', '잉크 방울'],
['rgb(255,225,16)', 'rgba(255,225,16,0.02)', 3, 'yellow border', 'ink drop', 'borde amarillo', 'gota de tinta', 'bordure jaune', 'd\'encre turquoise', '노란색 테두리', '잉크 방울'],
['rgb(100,255,0)', 'rgba(100,255,0,0.01)', 12, 'yellow green border', 'ink drop', 'borde verde amarillo', 'gota de tinta', 'bordure verte jaune', 'd\'encre turquoise', '황록색 테두리', '잉크 방울'],
['rgb(51,153,102)', 'rgba(51,153,102,0.01)', 4, 'green border', 'ink drop', 'borde verde', 'gota de tinta', 'bordure vert', 'd\'encre turquoise', '녹색 테두리', '잉크 방울'],
['rgb(51,204,204)', 'rgba(51,204,204,0.01)', 5, 'turquoise border', 'ink drop', 'borde turquesa', 'gota de tinta', 'bordure turquoise', 'd\'encre turquoise', '청록색 테두리', '잉크 방울'],
['rgb(26,144,255)', 'rgba(26,144,255,0.02)', 6, 'blue border', 'ink drop', 'borde azul', 'gota de tinta', 'bordure bleu', 'd\'encre turquoise', '파란색 테두리', '잉크 방울'],
['rgb(81,51,204)', 'rgba(81,51,204,0.02)', 13, 'violet border', 'ink drop', 'borde violeta', 'gota de tinta', 'bordure violet', 'd\'encre turquoise', '보라색 테두리', '잉크 방울'],
['rgb(205,26,245)', 'rgba(205,26,245,0.02)', 7, 'magenta border', 'ink drop', 'borde magenta', 'gota de tinta', 'bordure magenta', 'd\'encre turquoise', '마젠타 테두리', '잉크 방울'],
['rgb(255,153,204)', 'rgba(255,153,204,0.01)', 8, 'pink border', 'ink drop', 'borde rosado', 'gota de tinta', 'bordure rose', 'd\'encre turquoise', '분홍색 테두리', '잉크 방울'],
['rgb(255,0,0)', 'rgba(255,0,0,0.01)', 9, 'red border', 'ink drop', 'borde rojo', 'gota de tinta', 'bordure rouge', 'd\'encre turquoise', '빨간색 테두리', '잉크 방울'],
['rgb(178,178,178)', 'rgba(0,0,0,0.02)', 10, 'gray border', 'ink drop', 'borde gris', 'gota de tinta', 'bordure grise', 'd\'encre turquoise', '회색 테두리', '잉크 방울'],
['transparent', 'transparent', 11, 'border color same as text', 'ink drop', 'color del borde igual que el texto', 'gota de tinta', 'couleur de bordure identique au texte', 'd\'encre turquoise', '텍스트와 동일한 테두리 색상', '잉크 방울'],
];

const wModeA = [['Casillas', 1, 2, 3, 4, 5, 6, 7, 8],
[1, 'mode 1: to see everything smaller', 'mode 2: to receive vibrations of dots and dashes', 'mode 3: for large print', 'mode 4: to see everything bigger', 'mode 5: to see the text in yellow', 'mode 6: To see the interpreter and disable the audio', 'mode 7: to display braille', 'count, change'],
[2, 'modo 1: para ver todo más pequeño', 'modo 2: para recibir vibraciones de puntos y rayas', 'modo 3: para letra grande', 'modo 4: para ver todo más grande', 'modo 5: para ver el texto en color amarillo', 'modo 6: para ver el intérprete y deshabilitar el audio', 'modo 7: para mostrar el braille', 'cuenta, cambiar'],
[3, 'mode 1: pour tout voir plus petit', 'mode 2: pour recevoir des vibrations de points et de tirets', 'mode 3: pour les gros caractères', 'mode 4: pour tout voir en plus grand', 'mode 5: pour voir le texte en jaune', 'mode 6: Pour voir l\'interprète et désactiver l\'audio', 'mode 7: pour afficher le braille', 'compte, changer'],
[4, '모드 1: 모든 것을 더 작게 보려면', '모드 2: 도트 및 대시 진동을 수신하려면', '모드 3: 큰 활자용', '모드 4: 전체를 더 크게 보려면', '모드 5: 텍스트를 노란색으로 보려면', '모드 6: 통역사를 보고 오디오를 비활성화하려면', '모드 7: 점자 표시', '경쟁, 변화']
];
/*
const 	wModeZ		=[		['Casillas'	,1													,2																		,3														,4				,5																,6		   															,7													,8																		,9													,10						],
							[1			,'icon of two arrows pointing to the center'		,'to receive vibrations of dots and dashes, select'						,'audio text: to listen to the texts, select'			,'glasses'		,'max text:to see everything bigger, select'					,'black background: to see the text in yellow, select'				,'signs: to see the interpreter, select'			,'braille: to display braille and hear the text, select'				,'to see the english translation, select'			,'count, select'		],
							[2			,'icono de una persona junto a un engranaje'		,'icono de un corazón con pulsaciones'									,'audio texto: para escuchar los textos, seleccionar'	,'lentes'		,'altura máxima: para ver todo más grande, seleccionar'			,'fondo negro: para ver el texto en color amarillo, seleccionar'	,'señas: para ver el interprete, seleccionar'		,'braille: para mostrar el braille y escuchar el texto, seleccionar'	,'para ver la traducción al ingles, seleccionar'	,'cuenta, seleccionar'	],
							[3			,'icône de deux flèches pointant vers le centre'	,'pour recevoir des vibrations de points et de tirets, sélectionner'	,'texte audio: pour écouter les textes, sélectionner'	,'lunettes'		,'hauteur maximale: pour tout voir en plus grand, sélectionner'	,'fond noir: pour voir le texte en jaune, sélectionner'				,'signes: pour voir l\'interprète, sélectionner'	,'braille: pour afficher le braille et entendre le texte, sélectionner'	,'pour voir la traduction en anglais, sélectionner'	,'compte, sélectionner'	],
							[4			,'중앙을 가리키는 두 개의 화살표 아이콘'						,'pour recevoir des vibrations de points et de tirets, sélectionner'	,'texte audio: pour écouter les textes, sélectionner'	,'안경'			,'hauteur maximale: pour tout voir en plus grand, sélectionner'	,'fond noir: pour voir le texte en jaune, sélectionner'				,'signes: pour voir l\'interprète, sélectionner'	,'braille: pour afficher le braille et entendre le texte, sélectionner'	,'pour voir la traduction en anglais, sélectionner'	,'compte, sélectionner'	]
						];
*/
/*
const 	wModeA		= [		['Casillas'	,1												,2																		,3												,4															,5		   										,6															,7											,8																,9																,10						],
							[1			,'thumbnail mode: to see everything smaller'	,'vibrator mode: to receive vibrations of dots and dashes'				,'audio text mode: to listen to the texts'		,'glasses mode: for large print and no audio'				,'giant mode: to see everything bigger'			,'black background mode: to see the text in yellow'			,'signs mode: to see the interpreter'		,'braille mode: to display braille and activate audio'			,'American mode: for English and Sign Language'					,'count, change'		],
							[2			,'modo miniatura: para ver todo más pequeño'	,'modo vibrador: para recibir vibraciones de puntos y rayas'			,'modo audio texto: para escuchar los textos'	,'modo lentes: para letra grande y sin audio'				,'modo gigante: para ver todo más grande'		,'modo fondo negro: para ver el texto en color amarillo'	,'modo señas: para ver el interprete'		,'modo braille: para mostrar el braille y activar audio'		,'modo Americano: para inglés y lengua de señas'				,'cuenta, cambiar'		],
							[3			,'mode miniature: pour tout voir plus petit'	,'mode vibreur: pour recevoir des vibrations de points et de tirets'	,'mode texte audio: pour écouter les textes'	,'mode lunettes: pour les gros caractères et pas de son'	,'mode géant: pour tout voir en plus grand'		,'mode fond noir: pour voir le texte en jaune'				,'mode signes: pour voir l\'interprète'		,'mode braille: pour afficher le braille et activer le son'		,'mode Américain: pour l\'anglais et la langue des signes'		,'compte, changer'		],
							[4			,'썸네일 모드: 모든 것을 더 작게 보려면'				,'진동기 모드: 도트 및 대시 진동을 수신하려면'									,'오디오 텍스트 모드: 텍스트를 들으려면'					,'안경 모드: 큰 활자 및 오디오 없음의 경우 선택'						,'거대한 모드: 전체를 더 크게 보려면'					,'검은색 배경 모드: 텍스트를 노란색으로 보려면'						,'징후 모드: 통역사를 보려면 다음을 선택하십시오'		,'점자 모드: 점자를 표시하고 오디오를 활성화하려면'							,'미국 모드: 영어 및 수화용'											,'경쟁, 변화'				]
						];

const 	wModeZ		=[		['Casillas'	,1													,2																		,3														,4				,5																,6		   															,7													,8																		,9													,10						],
							[1			,'icon of two arrows pointing to the center'		,'to receive vibrations of dots and dashes, select'						,'audio text: to listen to the texts, select'			,'glasses'		,'max text:to see everything bigger, select'					,'black background: to see the text in yellow, select'				,'signs: to see the interpreter, select'			,'braille: to display braille and hear the text, select'				,'to see the english translation, select'			,'count, select'		],
							[2			,'icono de dos fechas apuntando al centro'			,'icono de un corazón con pulsaciones'									,'audio texto: para escuchar los textos, seleccionar'	,'lentes'		,'altura máxima: para ver todo más grande, seleccionar'			,'fondo negro: para ver el texto en color amarillo, seleccionar'	,'señas: para ver el interprete, seleccionar'		,'braille: para mostrar el braille y escuchar el texto, seleccionar'	,'para ver la traducción al ingles, seleccionar'	,'cuenta, seleccionar'	],
							[3			,'icône de deux flèches pointant vers le centre'	,'pour recevoir des vibrations de points et de tirets, sélectionner'	,'texte audio: pour écouter les textes, sélectionner'	,'lunettes'		,'hauteur maximale: pour tout voir en plus grand, sélectionner'	,'fond noir: pour voir le texte en jaune, sélectionner'				,'signes: pour voir l\'interprète, sélectionner'	,'braille: pour afficher le braille et entendre le texte, sélectionner'	,'pour voir la traduction en anglais, sélectionner'	,'compte, sélectionner'	],
							[4			,'중앙을 가리키는 두 개의 화살표 아이콘'					,'pour recevoir des vibrations de points et de tirets, sélectionner'	,'texte audio: pour écouter les textes, sélectionner'	,'안경'			,'hauteur maximale: pour tout voir en plus grand, sélectionner'	,'fond noir: pour voir le texte en jaune, sélectionner'				,'signes: pour voir l\'interprète, sélectionner'	,'braille: pour afficher le braille et entendre le texte, sélectionner'	,'pour voir la traduction en anglais, sélectionner'	,'compte, sélectionner'	]
						];

const 	wModeB		=[	['Recursos/ Casillas..'								,1	,2	,3	,4	,5	,6	,7	,8	,9	,10	],
							['1 0:Imag,1:Icon,2:Texto,3Image,4Vid,5TI,6II'	,6 	,6	,9	,9	,8	,7	,6 	,6	,6	,6	],
							['2 id de la Imag, Icon o Texto'				,27 ,46	,52	,64	,57	,61	,6  ,49 ,79	,53	],
							['3 onclick function, vacio=NO PERMITIDA(INFO)'	,50 ,51	,54	,53	,56	,57	,58 ,59	,60	,60	],
							['4 Visible 1:SI 0:no'							,1 	,1	,1	,1	,1	,1	,1 	,1	,1	,0	],
							['5 0:FotI 1:Vide 2:FotM 3:Text 4:In 5:Out'		,0 	,0	,0	,0	,0	,0	,0 	,0	,0	,0	],
							['6 id Video([5]1) o id foto([5]0/2)'			,0 	,0	,0	,0	,0	,0	,0 	,0	,0	,0	],
							['7 id Texto Icono (cuando es 5 en 1)'			,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ],
							['8 ids Iconos Capa1'							,0 	,0	,0	,0	,0	,0	,0  ,0  ,0  ,0  ],
							['9 ids Iconos Capa2'							,0 	,0	,0	,0	,0	,0	,0  ,0  ,0  ,0  ],
							['10 Capa3 Estado 0: 1:/ 2:_ 3: ? 4: -'			,0 	,0	,0	,0	,0	,0	,0  ,0  ,0  ,0  ]
						];
*/
/*
//RUTA 7 FORMATO - ACCESO - PRESENTACIÓN
const 	r007A		=[	['Casillas'	,1																																																																																																																																																																																																																																																																																																																																																																																																									,2													,3																			,4													,5																,6		   											,7																,8												,9																	,10																	,11						],
							[1			,['Hello! you are going to receive local ads, you are at the hall, below this reading you will find several resources, select the most appropriate resource to receive the ads'										,'on this website you will find accessible information through several resources'			,'the resources are miniature, vibrator, audio text, glasses, giant, black background, signs, braille and american'			,'To access the information, select the resource of your preference by clicking on the element, if that element has the focus, you can also click the round button, or the 6 key. For more information on the round button or the 6 key, keep reading...'								,'Navigation, to navigate there are 6 navigation buttons, on the screen they go from top to bottom'		,'there are 3 buttons on the left side, the square menu button, the diagonal button to cancel or exit and the triangle button up to go up or back'					,'and on the right side there are 3 other buttons, the vertical quick information bar button, the round button to accept or enter and the down triangle button to go down or go forward'		,'To enable navigation buttons on a physical keyboard, turn on caps lock button'										,'square button is 7 or N, diagonal button is 4 or M, triangle up button is 1 or comma, the vertical bar button is 9 or V, the round button is 6, C or space, and the down triangle button is 3, X or tab']																					,'miniature: to see everything smaller, choose'		,'vibrator: to receive vibrations of dots and dashes, choose'				,'audio text: to listen to the texts, choose'		,'glasses: for large print and no audio, choose'				,'giant:to see everything bigger, choose'			,'black background: to see the text in yellow, choose'			,'signs: to see the interpreter, choose'		,'braille: to display braille and activate audio, choose'			,'American: for English and Sign Language, choose'					,'count, choose'		],
							[2			,['¡Hola! vas a recibir anuncios locales, estás en la sala, debajo de esta lectura encontrarás varios recursos, selecciona el recurso más adecuado para recibir los anuncios'										,'en esta web encontrarás información accesible a través de varios recursos'				,'los recursos son miniatura, vibrador, audio texto, lentes, gigante, fondo negro, señas, braille y americano'	 			,'Para acceder a la información, seleccione el recurso de su preferencia haciendo clic en el elemento, si ese elemento tiene el foco, también puede hacer clic en el botón redondo, o en la tecla 6. Para más información sobre el botón redondo o la tecla 6, sigue leyendo...'		,'Navegación, para navegar hay 6 botones de navegación, en pantalla van desde arriba hacia abajo'		,'hay 3 botones al lado izquierdo, el botón cuadrado de menú, el botón diagonal para cancelar o salir y el botón de triángulo hacia arriba para subir o retroceder'	,'y al lado derecho hay otros 3 botones, el botón barra vertical de información rápida, el botón redondo para aceptar o ingresar y el botón de triángulo hacia abajo para ir abajo o avanzar'	,'Para habilitar los botones de navegación en un teclado físico, active el botón de bloqueo de mayúsculas'				,'el botón cuadrado es el 7 o la N, el botón diagonal es el 4 o la M, el botón de triángulo hacia arriba es el 1 o la coma, el botón barra vertical es el 9 o la V, el botón redondo es el 6, la C o el espacio, y el botón de triángulo hacia abajo es el 3, la X o el tabulador']			,'miniatura: para ver todo más pequeño, elegir'		,'vibrador: para recibir vibraciones de puntos y rayas, elegir'				,'audio texto: para escuchar los textos, elegir'	,'lentes: para letra grande y sin audio, elegir'				,'gigante: para ver todo más grande, elegir'		,'fondo negro: para ver el texto en color amarillo, elegir'		,'señas: para ver el interprete, elegir'		,'braille: para mostrar el braille y activar audio, elegir'			,'Americano: para inglés y lengua de señas, elegir'					,'cuenta, elegir'		],
							[3			,['Salut! vous allez recevoir des annonces locales, vous êtes à la salle, en dessous de cette lecture vous trouverez plusieurs ressources, sélectionnez la ressource la plus appropriée pour recevoir les annonces'	,"Sur ce site, vous trouverez des informations accessibles à travers plusieurs ressources"	,"les ressources sont miniature, vibreur, texte audio, lunettes, géant, fond noir, signes, braille et américain"			,"Pour accéder aux informations, sélectionnez la ressource de votre choix en cliquant sur l'élément, si cet élément a le focus, vous pouvez également cliquer sur le bouton rond, ou sur la touche 6. Pour plus d'informations sur le bouton rond ou la touche 6, continue de lire..."	,"Navigation, pour naviguer il y a 6 boutons de navigation, sur l'écran ils vont de haut en bas"		,"il y a 3 boutons sur le côté gauche, le bouton menu carré, le bouton diagonal pour annuler ou sortir et le bouton triangle haut pour monter ou dos"				,"et sur le côté droit il y a 3 autres boutons, le bouton barre d'information rapide verticale, le bouton rond pour accepter ou entrer et le bouton triangle bas pour descendre ou avancer"		,"Pour activer les boutons de navigation sur un clavier physique, activez le bouton de verrouillage des majuscules"		,"le bouton carré est 7 ou N, le bouton diagonal est 4 ou M, le bouton triangle vers le haut est 1 ou virgule, le bouton de la barre verticale est 9 ou V, le bouton rond est 6, C ou espace, et le bouton triangle vers le bas est 3, X ou tabulation"]									,'miniature: pour tout voir plus petit, choisir'	,'vibreur: pour recevoir des vibrations de points et de tirets, choisir'	,'texte audio: pour écouter les textes, choisir'	,'lunettes: pour les gros caractères et pas de son, choisir'	,'géant: pour tout voir en plus grand, choisir'		,'fond noir: pour voir le texte en jaune, choisir'				,'signes: pour voir l\'interprète, choisir'		,'braille: pour afficher le braille et activer le son, choisir'		,'Américain: pour l\'anglais et la langue des signes, choisir'		,'compte, choisir'		],
							[4			,['안녕하세요! 지역 공지사항을 수신할 예정입니다. 방에 있습니다. 이 판독값 아래에 여러 리소스가 있습니다. 공지사항을 수신할 가장 적절한 리소스를 선택하세요.'																							,"이 웹 사이트에서 다양한 리소스를 통해 액세스할 수 있는 정보를 찾을 수 있습니다."								,"리소스는 미니어처, 진동기, 오디오 텍스트, 안경, 거인, 검정색 배경, 표지판, 점자 및 미국식입니다."												,"정보에 액세스하려면 요소를 클릭하여 원하는 리소스를 선택하고 해당 요소에 포커스가 있는 경우 둥근 버튼 또는 6 키를 클릭할 수도 있습니다. 둥근 버튼 또는 6 키에 대한 자세한 내용은 계속 읽으세요..."																																,"탐색, 탐색을 위해 화면에서 위에서 아래로 이동하는 6개의 탐색 버튼이 있습니다."											,"왼쪽에는 사각형 메뉴 버튼, 취소 또는 종료를 위한 대각선 버튼, 위로 또는 뒤로 가기를 위한 위쪽 삼각형 버튼 3개의 버튼이 있습니다."																,"오른쪽에는 3개의 다른 버튼이 있습니다. 세로 빠른 정보 표시줄 버튼, 수락 또는 입력을 위한 원형 버튼, 아래로 이동 또는 앞으로 이동을 위한 아래쪽 삼각형 버튼입니다."																	,"실제 키보드에서 탐색 버튼을 활성화하려면 Caps Lock 버튼을 켜십시오."																,"사각형 버튼은 7 또는 N, 대각선 버튼은 4 또는 M, 삼각형 위쪽 버튼은 1 또는 쉼표, 세로 막대 버튼은 9 또는 V, 둥근 버튼은 6 , C 또는 스페이스, 아래쪽 삼각형 버튼은 3, X, 또는 탭"]																																			,'세밀화: 모든 것을 더 작게 보려면, 선택하다'					,'진동기: 도트 및 대시 진동을 수신하려면, 선택하다'										,'오디오 텍스트: 텍스트를 들으려면, 선택하다'					,'안경: 큰 활자 및 오디오 없음의 경우 선택, 선택하다'						,'거대한: 전체를 더 크게 보려면, 선택하다'					,'검은색 배경: 텍스트를 노란색으로 보려면, 선택하다'						,'징후: 통역사를 보려면 다음을 선택하십시오, 선택하다'		,'점자: 점자를 표시하고 오디오를 활성화하려면, 선택하다'							,'미국: 영어 및 수화용, 선택하다'											,'경쟁, 선택하다'			]
						];

const 	r007Z		=[	['Casillas'	,1																																																																																																																																																																																																																																																																																																																,2															,3																,4																		,5															,6		   		,7																,8																	,9													,10																		,11																			],
							[1			,['Young woman in white sweater, headphones and microphone.'	,'Blind young woman with hearing aids, using her cell phone'							,'There are four blue icons: wheelchair person, deaf ear, blind eye and the last one is an icon with 2 faces'					,'In front of a woman in a wheelchair, there is a man who holds her hands'			,'In front of a laptop is an adult man without his right arm, the man looks at the screen and holds his glasses with his left hand'								,'there are 3 buttons on the left side, the square menu button, the diagonal button to cancel or exit and the triangle button up to go up or back'					,'and on the right side there are 3 other buttons, the vertical quick information bar button, the round button to accept or enter and the down triangle button to go down or go forward.'			,'To enable navigation buttons on a physical keyboard, turn on caps lock button'										,'square button is 7 or N, diagonal button is 4 or M, triangle up button is 1 or comma, the vertical bar button is 9 or V, the round button is 6, C or space, and the down triangle button is 3, X or tab']																			,'minimun height: to see everything smaller, select'			,'to receive vibrations of dots and dashes, select'						,'audio text: to listen to the texts, select'			,'glasses'		,'max text:to see everything bigger, select'					,'black background: to see the text in yellow, select'				,'signs: to see the interpreter, select'			,'braille: to display braille and hear the text, select'				,'to see the english translation, select'			,'count, select'		],
							[2			,['Mujer joven con sueter blanco, auriculares y micrófono'		,'Mujer joven ciega con audífonos, usando su teléfono celular'							,'Hay cuatro iconos azules: persona en silla de ruedas, oído sordo, ojo ciego y el último es un icono con 2 caras'	 			,'Frente a una mujer en silla de ruedas, hay un hombre que le toma las manos'		,'Frente a una computadora portátil hay un hombre adulto sin su brazo derecho, el hombre mira la pantalla y sostiene sus anteojos con la mano izquierda'		,'hay 3 botones al lado izquierdo, el botón cuadrado de menú, el botón diagonal para cancelar o salir y el botón de triángulo hacia arriba para subir o retroceder'	,'y al lado derecho hay otros 3 botones, el botón barra vertical de información rápida, el botón redondo para aceptar o ingresar y el botón de triángulo hacia abajo para ir abajo o avanzar.'		,'Para habilitar los botones de navegación en un teclado físico, active el botón de bloqueo de mayúsculas'				,'el botón cuadrado es el 7 o la N, el botón diagonal es el 4 o la M, el botón de triángulo hacia arriba es el 1 o la coma, el botón barra vertical es el 9 o la V, el botón redondo es el 6, la C o el espacio, y el botón de triángulo hacia abajo es el 3, la X o el tabulador']	,'altura mínima: para ver todo más pequeño, seleccionar'		,'icono de un corazón con pulsaciones'									,'audio texto: para escuchar los textos, seleccionar'	,'lentes'		,'altura máxima: para ver todo más grande, seleccionar'			,'fondo negro: para ver el texto en color amarillo, seleccionar'	,'señas: para ver el interprete, seleccionar'		,'braille: para mostrar el braille y escuchar el texto, seleccionar'	,'para ver la traducción al ingles, seleccionar'	,'cuenta, seleccionar'	],
							[3			,['Jeune femme en pull blanc, casque et microphone.'			,"Jeune femme aveugle avec des prothèses auditives, à l'aide de son téléphone portable"	,"Il y a quatre icônes bleues : personne en fauteuil roulant, sourde oreille, aveugle et la dernière est une icône à 2 visages"	,"Devant une femme en fauteuil roulant, il y a un homme qui lui tient les mains"	,"Devant un ordinateur portable se trouve un homme adulte sans son bras droit, l'homme regarde l'écran et tient ses lunettes avec sa main gauche"				,"il y a 3 boutons sur le côté gauche, le bouton menu carré, le bouton diagonal pour annuler ou sortir et le bouton triangle haut pour monter ou dos"				,"et sur le côté droit il y a 3 autres boutons, le bouton barre d'information rapide verticale, le bouton rond pour accepter ou entrer et le bouton triangle bas pour descendre ou avancer."		,"Pour activer les boutons de navigation sur un clavier physique, activez le bouton de verrouillage des majuscules"		,"le bouton carré est 7 ou N, le bouton diagonal est 4 ou M, le bouton triangle vers le haut est 1 ou virgule, le bouton de la barre verticale est 9 ou V, le bouton rond est 6, C ou espace, et le bouton triangle vers le bas est 3, X ou tabulation"]							,'hauteur minimale: pour tout voir plus petit, sélectionner'	,'pour recevoir des vibrations de points et de tirets, sélectionner'	,'texte audio: pour écouter les textes, sélectionner'	,'lunettes'		,'hauteur maximale: pour tout voir en plus grand, sélectionner'	,'fond noir: pour voir le texte en jaune, sélectionner'				,'signes: pour voir l\'interprète, sélectionner'	,'braille: pour afficher le braille et entendre le texte, sélectionner'	,'pour voir la traduction en anglais, sélectionner'	,'compte, sélectionner'	],
							[4			,['흰색 스웨터, 헤드폰 및 마이크를 가진 젊은 여자'							,"Jeune femme aveugle avec des prothèses auditives, à l'aide de son téléphone portable"	,"Il y a quatre icônes bleues : personne en fauteuil roulant, sourde oreille, aveugle et la dernière est une icône à 2 visages"	,"Devant une femme en fauteuil roulant, il y a un homme qui lui tient les mains"	,"Devant un ordinateur portable se trouve un homme adulte sans son bras droit, l'homme regarde l'écran et tient ses lunettes avec sa main gauche"				,"il y a 3 boutons sur le côté gauche, le bouton menu carré, le bouton diagonal pour annuler ou sortir et le bouton triangle haut pour monter ou dos"				,"et sur le côté droit il y a 3 autres boutons, le bouton barre d'information rapide verticale, le bouton rond pour accepter ou entrer et le bouton triangle bas pour descendre ou avancer."		,"Pour activer les boutons de navigation sur un clavier physique, activez le bouton de verrouillage des majuscules"		,"le bouton carré est 7 ou N, le bouton diagonal est 4 ou M, le bouton triangle vers le haut est 1 ou virgule, le bouton de la barre verticale est 9 ou V, le bouton rond est 6, C ou espace, et le bouton triangle vers le bas est 3, X ou tabulation"]							,'hauteur minimale: pour tout voir plus petit, sélectionner'	,'pour recevoir des vibrations de points et de tirets, sélectionner'	,'texte audio: pour écouter les textes, sélectionner'	,'안경'			,'hauteur maximale: pour tout voir en plus grand, sélectionner'	,'fond noir: pour voir le texte en jaune, sélectionner'				,'signes: pour voir l\'interprète, sélectionner'	,'braille: pour afficher le braille et entendre le texte, sélectionner'	,'pour voir la traduction en anglais, sélectionner'	,'compte, sélectionner'	]
						];

//Do you want to receive local and accessible news?
//¿Quieres recibir noticias locales y accesibles?
						//hola, estás en el sitio web que hace que la información sea accesible para la mayoría de las personas. Para ello los usuarios cuentan con 9 estilos: 
//trabajar de la mano con g00VARS[11][2]::LÍNEA(S)DeLectura:0TodasLasLíneas,1Texto,2Morse,3Braille,4Señas,5Tuto
//['1 0:Imagen,1:Icono,2:Texto,3ImagenAlta,4VideoAlto,5Texto+Icono,6Icono+Icono serie
//['5 0:FotoIcono 1:VideoMulti 2:FotoMulti 3:TextoMulti 4:InEntrada 5:OutSalida
//['10 0:Normal sin nada, 1:Deshabilitado o Deseleccionado /slash, 2:Campo Vacio obligatorio ?pregunta, 3:Campo con info o Respuesta _RayaInferior, 4:Campo vacio opcional -GuionMedio 	
const 	r007B		=[	['Recursos/ Casillas..'							,1								,2	,3	,4	,5	,6	,7	,8	,9	,10	,11	],
							['1 0:Imag,1:Icon,2:Texto,3Image,4Vid,5TI,6II'	,[3	,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ]	,6 	,6	,9	,9	,8	,7	,6 	,6	,6	,6	],
							['2 id de la Imag, Icon o Texto'				,[15,11,16,17,12,13,8 ,9 ,10]	,27 ,46	,52	,64	,57	,61	,6  ,49 ,79	,53	],//64  48
							['3 onclick function, vacio=NO PERMITIDA(INFO)'	,0								,50 ,51	,54	,53	,56	,57	,58 ,59	,60	,60	],
							['4 Visible 1:SI 0:no'							,1								,1 	,1	,1	,1	,1	,1	,1 	,1	,1	,0	],
							['5 0:FotI 1:Vide 2:FotM 3:Text 4:In 5:Out'		,[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ]	,0 	,0	,0	,0	,0	,0	,0 	,0	,0	,0	],
							['6 id Video([5]1) o id foto([5]0/2)'			,[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ]	,0 	,0	,0	,0	,0	,0	,0 	,0	,0	,0	],
							['7 id Texto Icono (cuando es 5 en 1)'			,[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ]	,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ],
							['8 ids Iconos Capa1'							,[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ]	,0 	,0	,0	,0	,0	,0	,0  ,0  ,0  ,0  ],
							['9 ids Iconos Capa2'							,[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ]	,0 	,0	,0	,0	,0	,0	,0  ,0  ,0  ,0  ],
							['10 Capa3 Estado 0: 1:/ 2:_ 3: ? 4: -'			,[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ]	,0 	,0	,0	,0	,0	,0	,0  ,0  ,0  ,0  ]
						];
						*/


//Tomar las abreviaturas de https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
const wIdi = [['0-En ingles(lista ordenada)', '1-Escrito Local(desordenada)', '2-Abreviatura', '3-id:key strings app', '4-Inter(cons)0 Local(vari)1', '5-Estado:Visible1 off0(Ocultar)', '6-idSeñaIniPredet'],
// - - -
['english language (US), change', 'english language (US), change', 'en', 1, 0, 1, 3],
['french language, change ', 'langue française, changer', 'fr', 3, 0, 1, 8],
['korean language, change', '한국어, 변경', 'ko', 4, 0, 1, 7],
['spanish language, change', 'idioma español, cambiar', 'es', 2, 0, 1, 2],
['spanish language (MX), change', 'idioma español (MX), cambiar', 'es-mx', 6, 0, 0, 4],
['wayuu language (CO), change', 'iiiii iiiii, iiiii', '', 5, 1, 0, 0],
];

const wSign = [['0-En ingles(lista ordenada)', '1-Escrito Local(desordenada)', '2-Abreviatura', '3-id:key strings app', '4-Inter(cons)0 Local(vari)1', '5-Estado:Visible1 off0(Ocultar)', '6-país', '7-Idioma(dentro del país[6]) según 3-id:key strings app de wIdi]'],
['universal sign language', 'universal sign language', 'UNI', 1, 0, 0, 0, 0],
// - - -
['american sign language, change', 'american sign language, change', 'ASL', 3, 0, 1, 2, 1],
['colombian sign language, change', 'lengua de señas colombiana, cambiar', 'LSC', 2, 0, 1, 1, 2],
['colombian sign language (Cali), change', 'lengua de señas colombiana (Cali), cambiar', 'LSC(cali)', 6, 1, 1, 4, 2],
['korean sign language, change', '한국어 수화, 변경', 'KSL', 7, 0, 1, 5, 4],
['mexican sign language, change', 'lengua de señas mexicana, cambiar', 'LSM', 4, 0, 0, 4, 6],
['spanish sign language, change', 'lengua de señas española, cambiar', 'LSE', 5, 0, 1, 3, 2],
['french sign language, change', 'langue des signes française, changer', 'LSF', 8, 0, 1, 6, 3],
];

//wPAPAx					 1 2 3 4 5 6 7 8 9 10
//Rutas sugeridas			 0 1 2 3 4 5 6 7 8 9  (EL TOPE ES 8 O 9?)
const wSug = [	//[4,3],//4,6   españa
	[2, 9, 5],
	[3,5],
	[4, 3, 6, 6],//4,6   madrid españa
	[5,4],
	[6,10],
	//	[7,11,7,1*,2,5,2,4,2,3],
	//	[7,11,9,7,2,5,2,4,2,4],
	//	[7,11,9,1*,2,5,2,4,2],
	//	[7,11,9,1*,2,5,2,4,8],
	[7, 11, 8, 2, 8],//Barrio cataluña en chapinero
	[7, 11, 8, 4],//Alcaldía puente aranda
	[7, 11, 8, 2, 2],//Barrio chapinero central
	//	[7,1,1,1,2,5,2,4,2,2],
	//[8,8]
];

















//====================================================================
//===============================================INICIO MORSE=========
//====================================================================
//###########################################
//###########################################
//###########################################


//inicio funciones puntos y rayas..
var any = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9];//CONTROLA ENTRADA DE DATOS TIPO MOUSEDOWN=0, KEYDOWN=2, ONTOUCHSTAR=4, 'any'TODOS=9 cualquier otro valor (1,3,5,6,7,8) BLOQUEA LA SIGUIENTE ENTRADA DE DATOS
const cut = 120;//CORTE EN MILISEGUNDOS PUNTO-RAYA; DEJAR CONSTANTE EN 200MS???
var cycle = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//cycle MAX DE 12 INDICE DEL REGISTRO1 DE LA TECLA DOWN
var deS;//true: DESLIZAMIENTO sobre el touch/ false: TOQUE sobre el touch PARA CUANDO ESTA EN MODO DISCAPACIDAD
var doble;//DEMORA MAXIMA PARA HACER DOS CLICKS
const dos = 500;//TIEMPO MAXIMO EN MILISEGUNDOS PARA QUE PASEN DOS CLICS
var edit = true;//editor de texto activado:true -quitar esto que no hace nada, el editor siempre estará disponible!!!
var esTAS = false;//SI ENCUENTRA EL EQUIVALENTE MORSE SE PONE TRUE
//+ + + const 	key={			A1:49,B1:82,C1:97,A2:50,B2:84,C2:98,A3:51,B3:89,C3:99,A4:52,B4:70,C4:100,A6:54,B6:72,C6:102,A7:55,B7:67,C7:103,A8:56,B8:86,C8:104,A9:57,B9:66,C9:105,A0:53,B0:71,C0:101,SP0:32};
var libre = [true, true, true, true, true, true, true, true, true, true, true];//POSICION DE LA TTTECLA
var lin = [false, false, false, false, false, false, false, false, false, false, false];//SI ES una RAYA - SE PONE TRUE (sino es un punto FALSE)
var m;//HORA/DIA ACTUAL EN mILISEGUNDOS DESDE EL 1ERO DE ENERO DE 1970
var max = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//ESPACIO maxIMO EN MILISEGUNDOS PERMITIDO
var min = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//RAYA minIMA EN MILISEGUNDOS PERMITIDA
var mn = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//HORA/DIA FINAL EN MILISEGUNDOS DESDE EL 1ERO DE ENERO DE 1970
var msg = new SpeechSynthesisUtterance();//API que crea un objeto de audio para ser leido por el sintetizador de voz de google
var nn = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//HORA/DIA ACTUAL EN MILISEGUnnnnDOS
var nm = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//HORA/DIA InmICIO EN MILISEGUNDOS DESDE EL 1ERO DE ENERO DE 1970
//          --l
//var		outW = ['','','','','','','','','',''];//SALIDA
var outX = ['', '', '', '', '', '', '', '', '', '', ''];//VARIABLE INGRESADA DENTRO DEL CODIGO
var pare = [true, true, true, true, true, true, true, true, true, true, true];//RELOJ ESTA DESCANSANDO
////var pv = false;//true;// false;//true;//PRIMER INTERACCION CON EL TOUCH - creo que pv y pw quedaron false para que no sean bloqueantes en pantallas que no son touch 26abr025
////var pw = false;//true;//false;//true;//COPIA VIRTUAL DE pv;
var regW = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];//REGISTRO3 CAMBIO A ESTADO SOSTENIDO DE LA TECLA 3:ESTADO SOSTENIDO DEL BOTON/TECLA
var regX = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];//REGISTRO1 5/6 CAMBIOS DE ESTADO TECLA, DIFERENCIAS EN milisgs del inicio de la tecla oprimida ej 100,150,100, etc
var regY = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];//REGISTRO2 RESULTADO DE ESTADO TECLA 0:SIN-ASIGNAR 1:PUNTO 2:RAYA 3:
var sigo = [true, true, true, true, true, true, true, true, true, true, true];//EN TOUCH 'BLOCKEA' EL SIGUIENTE CLICK DEL MOUSE POR DAR CLIC
var tM;//[6]=TIEMPO MAXIMO PARA REALIZAR UN PUNTO O UNA RAYA, [!6]=CUANDO UNA RAYA SOBREPASA ESTE VALOR ES UN SOSTENIDO
const vF = 5;//8? TIEMPO DE ESPERA: 4 DA TIEMPO PARA PENSAR; 3 ESTRICTO DE NORMA CODIGO MORSE; 10 CANTIDAD MAXIMA DE PUNTOS VACIOS PARA LA TERMINACION INGRESO DE SEÑALES DE LETRA POR TIEMPO DE ESPERA
const vT = 50;//20 -70 MILISEGUNDOS DE CADA DELTA DE TIEMPO


var touch;
//const 	touch 			= "ontouchstart" in window || window.navigator.maxTouchPoints;//este metodo no parece ser tan "acertado"
const
	isTouchDevice = function()//DETECTAR si es touch al intentar crear un evento Touch, si falla en el intento retorna un error ES DECIR NO ES TOUCH
	{
		try {
			document.createEvent('TouchEvent');
			touch = 1;
			iV6a.style.backgroundColor = 'yellow';
			console.log('pantalla CON TOUCH!');
		}
		catch (e) {
			touch = 0;
			iV6a.style.backgroundColor = 'blue';
			////pv = false;//no requiere PRIMER INTERACCION CON EL TOUCH
			////pw = false;//no requiere PRIMER INTERACCION CON EL TOUCH
			console.log('pantalla SIN TOUCH!');
		}
	}
isTouchDevice();


function 		//AUDIO Punto
	audiPun()
		{	audPun.currentTime = 0; audPun.play()
		}

function 		//AUDIO Raya
	audiRay()
		{	audRay.currentTime = 0; audRay.play()
		}

function		//SIMPLIFICAR ESTO Reinicio de variables
	ceros(c) {
	console.log('_____@- ceros(c)');
	esTAS = false; console.log('esTAS=', esTAS);
	console.log('esTAS=' + esTAS);
	switch (c)//RESET DE TODOS LOS REGISTROS
	{
		case 0://USO EXCLUSIVO CODIGO MORSE
			//esTAS = false; console.log('esTAS=', esTAS);
			regW[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			regX[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			regY[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			break;
		case 1:
			regW[1] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			regX[1] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			regY[1] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			break;
		case 2:
			regW[2] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			regX[2] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			regY[2] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			break;
		case 3:
			regW[3] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			regX[3] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			regY[3] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			break;
		case 4:
			regW[4] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			regX[4] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			regY[4] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			break;
		case 6:
			regW[6] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			regX[6] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			regY[6] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			break;
		case 7:
			regW[7] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			regX[7] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			regY[7] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			break;
		case 8:
			regW[8] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			regX[8] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			regY[8] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			break;
		case 9:
			regW[9] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			regX[9] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			regY[9] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			break;
	}
	cycle[c] = 0; console.log('cycle[c]=' + cycle[c]);//RESET INDICE
	any[c] = 9; console.log('any[c]=' + any[c]);//RESET PARA CUALQUIER ENTRADA KEY TOUCH O MOUSE
	pare[c] = true; console.log('pare[c]=' + pare[c])
}//permite que SE ACTIVEN LOS CICLOS


function		//ACTIVACION O ACTUALIZACION DEL CICLO      --l3866
	ciclo0(){		//console.log('_____@- ciclo0()');  //boton 5 morse 0
				if(!pare[0])
				{	if(cycle[0]==13)//'STOP' PARA DAR PASO AL RESULTADO
					{	cycle[0] = 12;//console.log('cycle[0]='+cycle[0]);
					}
					hora();
					nn[0] = m;//console.log('nn[0]='+ nn[0]);
					if((libre[0])&&(nn[0] > max[0]))
					{	morse(0);
					}
					if((!libre[0])&&(nn[0] > min[0])&&(!lin[0]))
					{	lin[0] = true;//console.log('lin[0]=' + lin[0]);//SE ACTIVO LA LINEA/RAYA
						oscu();
						audiRay();//ACTIVA EL SONIDO RAYA - o sostenido
						regY[0][cycle[0]] = 4;//sostenido tipo alerta (4) o de otro tipo (3)
					}
					setTimeout(ciclo0, vT);
				}}//ciclo0()

function		//ACTIVACION O ACTUALIZACION DEL CICLO
ciclo1(){		//console.log('_____@- ciclo2()');
				if(!pare[1])
				{	if(cycle[1]==11)//'STOP' PARA DAR PASO AL RESULTADO
					{	cycle[1] = 10;console.log('cycle[1]='+cycle[1]);
					}
					hora();
					nn[1] = m;console.log('nn[1]='+ nn[1]);
					if((libre[1])&&(nn[1] > max[1]))
					{	morse(1);
					}
					if((!libre[1])&&(nn[1] > min[1])&&(!lin[1]))
					{	lin[1] = true;console.log('lin[1]=' + lin[1]);//SE ACTIVO LA LINEA/RAYA
						oscu();
						//audiRay();//ACTIVA EL SONIDO RAYA
						regY[1][cycle[1]] = 2;
					}
					setTimeout(ciclo1, vT);
				}}//ciclo2()

function		//ACTIVACION O ACTUALIZACION DEL CICLO
ciclo2(){		//console.log('_____@- ciclo2()');
				if(!pare[2])
				{	if(cycle[2]==11)//'STOP' PARA DAR PASO AL RESULTADO
					{	cycle[2] = 10;console.log('cycle[2]='+cycle[2]);
					}
					hora();
					nn[2] = m;console.log('nn[2]='+ nn[2]);
					if((libre[2])&&(nn[2] > max[2]))
					{	morse(2);
					}
					if((!libre[2])&&(nn[2] > min[2])&&(!lin[2]))
					{	lin[2] = true;console.log('lin[2]=' + lin[2]);//SE ACTIVO LA LINEA/RAYA
						oscu();
						//audiRay();//ACTIVA EL SONIDO RAYA
						regY[2][cycle[2]] = 2;
					}
					setTimeout(ciclo2, vT);
				}}//ciclo2()


function		//ACTIVACION O ACTUALIZACION DEL CICLO
	ciclo3() {		//console.log('_____@- ciclo3()');
	if (!pare[3]) {
		if (cycle[3] == 11)//'STOP' PARA DAR PASO AL RESULTADO
		{	cycle[3] = 10; console.log('cycle[3]=' + cycle[3]);
		}
		hora();
		nn[3] = m;console.log('nn[3]=' + nn[3]);
		if ((libre[3]) && (nn[3] > max[3]))
		{	morse(3);
		}
		if ((!libre[3]) && (nn[3] > min[3]) && (!lin[3]))
		{	lin[3] = true; console.log('lin[3]=' + lin[3]);//SE ACTIVO LA LINEA/RAYA
			oscu();
			audiRay();//ACTIVA EL SONIDO RAYA
			regY[3][cycle[3]] = 2;
		}
		setTimeout(ciclo3, vT);
	}
}//ciclo3()


function		//ACTIVACION O ACTUALIZACION DEL CICLO
ciclo4(){		//console.log('_____@- ciclo4()');
				if(!pare[4])
				{	if(cycle[4]==11)//'STOP' PARA DAR PASO AL RESULTADO
					{	cycle[4] = 10;console.log('cycle[4]='+cycle[4]);
					}
					hora();
					nn[4] = m;console.log('nn[4]='+ nn[4]);
					if((libre[4])&&(nn[4] > max[4]))
					{	morse(4);
					}
					if((!libre[4])&&(nn[4] > min[4])&&(!lin[4]))
					{	lin[4] = true;console.log('lin[4]=' + lin[4]);//SE ACTIVO LA LINEA/RAYA
						oscu();
						//audiRay();//ACTIVA EL SONIDO RAYA
						regY[4][cycle[4]] = 2;
					}
					setTimeout(ciclo4, vT);
				}}//ciclo4()
function		//ACTIVACION O ACTUALIZACION DEL CICLO
ciclo6(){		//console.log('_____@- ciclo6()');
				if(!pare[6])
				{	if(cycle[6]==11)//'STOP' PARA DAR PASO AL RESULTADO
					{	cycle[6] = 10;console.log('cycle[6]='+cycle[6]);
					}
					hora();
					nn[6] = m;console.log('nn[6]='+ nn[6]);
					if((libre[6])&&(nn[6] > max[6]))
					{	morse(6);
					}
					if((!libre[6])&&(nn[6] > min[6])&&(!lin[6]))
					{	lin[6] = true;console.log('lin[6]=' + lin[6]);//SE ACTIVO LA LINEA/RAYA
						oscu();
						//audiRay();//ACTIVA EL SONIDO RAYA
						regY[6][cycle[6]] = 2;
					}
					setTimeout(ciclo6, vT);
				}}//ciclo6()
function		//ACTIVACION O ACTUALIZACION DEL CICLO
ciclo7(){		//console.log('_____@- ciclo7()');
				if(!pare[7])
				{	if(cycle[7]==11)//'STOP' PARA DAR PASO AL RESULTADO
					{	cycle[7] = 10;console.log('cycle[7]='+cycle[7]);
					}
					hora();
					nn[7] = m;console.log('nn[7]='+ nn[7]);
					if((libre[7])&&(nn[7] > max[7]))
					{	morse(7);
					}
					if((!libre[7])&&(nn[7] > min[7])&&(!lin[7]))
					{	lin[7] = true;console.log('lin[7]=' + lin[7]);//SE ACTIVO LA LINEA/RAYA
						oscu();
						//audiRay();//ACTIVA EL SONIDO RAYA
						regY[7][cycle[7]] = 4;//3;//sostenido corto o largo
					}
					setTimeout(ciclo7, vT);
				}}//ciclo7()

function		//ACTIVACION O ACTUALIZACION DEL CICLO
ciclo8(){		//console.log('_____@- ciclo8()');
				if(!pare[8])
				{	if(cycle[8]==11)//'STOP' PARA DAR PASO AL RESULTADO
					{	cycle[8] = 10;console.log('cycle[8]='+cycle[8]);
					}
					hora();
					nn[8] = m;console.log('nn[8]='+ nn[8]);
					if((libre[8])&&(nn[8] > max[8]))
					{	morse(8);
					}
					if((!libre[8])&&(nn[8] > min[8])&&(!lin[8]))
					{	lin[8] = true;console.log('lin[8]=' + lin[8]);//SE ACTIVO LA LINEA/RAYA
						oscu();
						//audiRay();//ACTIVA EL SONIDO RAYA
						regY[8][cycle[8]] = 4;//3;//sostenido corto o largo
					}
					setTimeout(ciclo8, vT);
				}}//ciclo8()//

function		//ACTIVACION O ACTUALIZACION DEL CICLO
ciclo9(){		//console.log('_____@- ciclo9()');
				if(!pare[9])
				{	if(cycle[9]==11)//'STOP' PARA DAR PASO AL RESULTADO
					{	cycle[9] = 10;console.log('cycle[9]='+cycle[9]);
					}
					hora();
					nn[9] = m;console.log('nn[9]='+ nn[9]);
					if((libre[9])&&(nn[9] > max[9]))
					{	morse(9);
					}
					if((!libre[9])&&(nn[9] > min[9])&&(!lin[9]))
					{	lin[9] = true;console.log('lin[9]=' + lin[9]);//SE ACTIVO LA LINEA/RAYA
						oscu();
						//audiRay();//ACTIVA EL SONIDO RAYA
						regY[9][cycle[9]] = 2;
					}
					setTimeout(ciclo9, vT);
				}}//ciclo9()


function		//CAMBIA DE COLOR DEPENDIENDO DE QUE NUMERO DE CASILLA ES
	color(col) {
	console.log('_____@- color()')
	//if(true/*t3x3*/)
	{
		switch (col) {
			case 0:
				book.style.backgroundColor = 'yellow';
				break;
			case 1:
				book.style.backgroundColor = 'orange';
				break;
			case 3:
				book.style.backgroundColor = 'red';
				break;
			case 5:
				book.style.backgroundColor = 'fuchsia';
				break;
			case 7:
				book.style.backgroundColor = 'blue';
				break;
			case 9:
				book.style.backgroundColor = 'lime';
				break;
			case 11:
				book.style.backgroundColor = 'gold';
				break;
		}
	}
}

function		//Prepara la lectura de audio
deCi(){			speechSynthesis.pause();//pausa si esta ocupado el lector para estar listo para reiniciar
				speechSynthesis.cancel()}//cancela el evento anterior si esta ocupado el lector y dejarlo listo para iniciar

function		//lee el guíon
decir(texto){	deCi();
				msg.text = texto;//LINEA NUEVA DE PRUEBA
				speechSynthesis.speak(msg);//LINEA NUEVA DE PRUEBA
				}
/*
function		//AL BAJAR UNA TECLA..
	eKb(now) {
	console.log('_____@- eKb()'); console.log(now.key + '-' + now.keyCode);//CONOCER EL KEYCODE DE LA TECLA
	//decir(texto);
	if (now.getModifierState('CapsLock'))//detecta si capslock esta on
	{	/*if((now.keyCode==key.SP0)||(now.keyCode==key.A0)||(now.keyCode==key.B0)||(now.keyCode==key.C0))
					{	if(((any[0]==2)||(any[0]==9))&&(!pv)&&(edit))
						{	any[0] = 3;console.log('any[0]=' + any[0]);//BLOQUEA ENTRADA DE DATOS HASTA QUE SEA 0
							punto0();
						}
						w7();
					}
					if((now.keyCode==key.A1)||(now.keyCode==key.B1)||(now.keyCode==key.C1))
					{	if(((any[1]==2)||(any[1]==9))&&(!pv))
						{	any[1] = 3;console.log('any[1]=' + any[1]);//BLOQUEA ENTRADA DE DATOS HASTA QUE SEA 0
							punto1();
						}
						w7();
					}
					if((now.keyCode==key.A2)||(now.keyCode==key.B2)||(now.keyCode==key.C2))
					{	if(((any[2]==2)||(any[2]==9))&&(!pv))
						{	any[2] = 3;console.log('any[2]=' + any[2]);//BLOQUEA ENTRADA DE DATOS HASTA QUE SEA 0
							punto2();
						}
						w7();
					}
					if((now.keyCode==key.A3)||(now.keyCode==key.B3)||(now.keyCode==key.C3))
					{	if(((any[3]==2)||(any[3]==9))&&(!pv))
						{	any[3] = 3;console.log('any[3]=' + any[3]);//BLOQUEA ENTRADA DE DATOS HASTA QUE SEA 0
							punto3();
						}
						w7();
					}	
					*/

/*
		if (g00VARS[26][4] && ((now.keyCode == kEY.K22) || (now.keyCode == kEY.K3) || (now.keyCode == kEY.N3) || (now.keyCode == kEY.K33)) && yKEYS[2][2])//Si esta mostrando lo botones y..
		//if((now.keyCode==key.A3)||(now.keyCode==key.B3)||(now.keyCode==key.C3))
		{
			if (((any[3] == 2) || (any[3] == 9)) && (!pv)) {
				any[3] = 3; console.log('any[3]=' + any[3]);//BLOQUEA ENTRADA DE DATOS HASTA QUE SEA 0
				punto3();
			}
			w7();
		}

		/*if((now.keyCode == kEY.K4)||(now.keyCode == kEY.N4)||(now.keyCode == kEY.K44)||(now.keyCode == kEY.KBAC))//Si esta mostrando lo botones y..
		//if(g00VARS[26][4]&&g00VARS[76][2]&&((now.keyCode == kEY.K4)||(now.keyCode == kEY.N4)||(now.keyCode == kEY.K44)||(now.keyCode == kEY.KBAC))&&yKEYS[2][3])//Si esta mostrando lo botones y..
		//if((now.keyCode==key.A4)||(now.keyCode==key.B4)||(now.keyCode==key.C4))
		{	if(((any[4]==2)||(any[4]==9))&&(!pv))
			{	any[4] = 3;console.log('any[4]=' + any[4]);//BLOQUEA ENTRADA DE DATOS HASTA QUE SEA 0
				punto4();
			}
			w7();
		}*/

		/*
		if(((now.keyCode == kEY.K55)||(now.keyCode == kEY.K6)||(now.keyCode == kEY.N6)||(now.keyCode == kEY.K66))&&yKEYS[2][4])//||(now.keyCode == kEY.KTAB))
		//if((now.keyCode==key.A6)||(now.keyCode==key.B6)||(now.keyCode==key.C6))
		{	if(((any[6]==2)||(any[6]==9))&&(!pv))
			{	any[6] = 3;console.log('any[6]=' + any[6]);//BLOQUEA ENTRADA DE DATOS HASTA QUE SEA 0
				punto6();
			}
			w7();
		}
		*/

		/*
		/*if((now.keyCode==key.A7)||(now.keyCode==key.B7)||(now.keyCode==key.C7))
		{	if(((any[7]==2)||(any[7]==9))&&(!pv))
			{	any[7] = 3;console.log('any[7]=' + any[7]);//BLOQUEA ENTRADA DE DATOS HASTA QUE SEA 0
				punto7();
			}
			w7();
		}
		if((now.keyCode==key.A8)||(now.keyCode==key.B8)||(now.keyCode==key.C8))
		{	if(((any[8]==2)||(any[8]==9))&&(!pv))
			{	any[8] = 3;console.log('any[8]=' + any[8]);//BLOQUEA ENTRADA DE DATOS HASTA QUE SEA 0
				punto8();
			}
			w7();
		}
		if((now.keyCode==key.A9)||(now.keyCode==key.B9)||(now.keyCode==key.C9))
		{	if(((any[9]==2)||(any[9]==9))&&(!pv))
			{	any[9] = 3;console.log('any[9]=' + any[9]);//BLOQUEA ENTRADA DE DATOS HASTA QUE SEA 0
				punto9();
			}
			w7();
		}*/
/*	}
}


function		//AL SUBIR UNA TECLA..
	eKs(now) {
	console.log('_____@- eKs()');
	if (now.getModifierState('CapsLock'))//detecta si capslock esta on
	{	/*if((now.keyCode==key.SP0)||(now.keyCode==key.A0)||(now.keyCode==key.B0)||(now.keyCode==key.C0))
					{	if(any[0]==3)
						{	any[0] = 2;console.log('any[0]=' + any[0]);//REACTIVA LA ENTRADA
							vacio(0);
						}
						www9();
					}
					if((now.keyCode==key.A1)||(now.keyCode==key.B1)||(now.keyCode==key.C1))
					{	if(any[1]==3)
						{	any[1] = 2;console.log('any[1]=' + any[1]);//REACTIVA LA ENTRADA
							vacio(1);
						}
						www9();
					}
					if((now.keyCode==key.A2)||(now.keyCode==key.B2)||(now.keyCode==key.C2))
					{	if(any[2]==3)
						{	any[2] = 2;console.log('any[2]=' + any[2]);//REACTIVA LA ENTRADA
							vacio(2);
						}
						www9();
					}
					if((now.keyCode==key.A3)||(now.keyCode==key.B3)||(now.keyCode==key.C3))
					{	if(any[3]==3)
						{	any[3] = 2;console.log('any[3]=' + any[3]);//REACTIVA LA ENTRADA
							vacio(3);
						}
						www9();
					}*/
/*
		if (g00VARS[26][4] && ((now.keyCode == kEY.K22) || (now.keyCode == kEY.K3) || (now.keyCode == kEY.N3) || (now.keyCode == kEY.K33)) && yKEYS[2][2])//Si esta mostrando lo botones y..
		//if((now.keyCode==key.A3)||(now.keyCode==key.B3)||(now.keyCode==key.C3))
		{
			if (any[3] == 3) {
				any[3] = 2; console.log('any[3]=' + any[3]);//REACTIVA LA ENTRADA
				vacio(3);
			}
			www9();
		}
		/*if((now.keyCode == kEY.K4)||(now.keyCode == kEY.N4)||(now.keyCode == kEY.K44)||(now.keyCode == kEY.KBAC))//Si esta mostrando lo botones y..
		//if(g00VARS[26][4]&&g00VARS[76][2]&&((now.keyCode == kEY.K4)||(now.keyCode == kEY.N4)||(now.keyCode == kEY.K44)||(now.keyCode == kEY.KBAC))&&yKEYS[2][3])//Si esta mostrando lo botones y..
		//if((now.keyCode==key.A4)||(now.keyCode==key.B4)||(now.keyCode==key.C4))
		{	if(any[4]==3)
			{	any[4] = 2;console.log('any[4]=' + any[4]);//REACTIVA LA ENTRADA
				vacio(4);
			}
			www9();
		}
		*/
		/*
		if(((now.keyCode == kEY.K55)||(now.keyCode == kEY.K6)||(now.keyCode == kEY.N6)||(now.keyCode == kEY.K66))&&yKEYS[2][4])//||(now.keyCode == kEY.KTAB))
		//if((now.keyCode==key.A6)||(now.keyCode==key.B6)||(now.keyCode==key.C6))
		{	if(any[6]==3)
			{	any[6] = 2;console.log('any[6]=' + any[6]);//REACTIVA LA ENTRADA
				vacio(6);
			}
			www9();
		}
		*/
		/*if((now.keyCode==key.A7)||(now.keyCode==key.B7)||(now.keyCode==key.C7))
		{	if(any[7]==3)
			{	any[7] = 2;console.log('any[7]=' + any[7]);//REACTIVA LA ENTRADA
				vacio(7);
			}
			www9();
		}
		if((now.keyCode==key.A8)||(now.keyCode==key.B8)||(now.keyCode==key.C8))
		{	if(any[8]==3)
			{	any[8] = 2;console.log('any[8]=' + any[8]);//REACTIVA LA ENTRADA
				vacio(8);
			}
			www9();
		}
		if((now.keyCode==key.A9)||(now.keyCode==key.B9)||(now.keyCode==key.C9))
		{	if(any[9]==3)
			{	any[9] = 2;console.log('any[9]=' + any[9]);//REACTIVA LA ENTRADA
				vacio(9);
			}
			www9();
		}*/
/*	}
}//RESETEA EVENTOS DE TECLADO DEL DOCUMENTO
*/

function		//AL BAJAR EL MOUSE..   --l4382
	eMb0(){ 	
				console.log('_____@- eMb0()');
				if(((any[0]==0)||(any[0]==9))&&(sigo[0]))////if(((any[0]==0)||(any[0]==9))&&(!pv)&&(sigo[0]))... todas tienen &&(!pv) y se les quito!
				{	any[0] = 1;console.log('any[0]=' + any[0]);//BLOQUEA ENTRADA DE DATOS HASTA QUE SEA 0
					punto0();
				}
				if(!sigo[0])
				{	sigo[0] = true;console.log('sigo[0]=' + sigo[0]);//'habilita' la siguiente entrada de datos con mouse luego de pausarse por ocurrir una subida del touch (ƒ(){})
				}
				w7()
}

function		//AL BAJAR EL MOUSE..
	eMb1(){ 	console.log('_____@- eMb1()');
				if(((any[1]==0)||(any[1]==9))&&(sigo[1]))
				{	any[1] = 1;console.log('any[1]=' + any[1]);//BLOQUEA ENTRADA DE DATOS HASTA QUE SEA 0
					punto1();
				}
				if(!sigo[1])
				{	sigo[1] = true;console.log('sigo[1]=' + sigo[1]);//'habilita' la siguiente entrada del mouse luego de pausarse por ocurrir una subida del touch (eTb2(){})
				}
				w7()}

function		//AL BAJAR EL MOUSE..
	eMb2(){ 	console.log('_____@- eMb2()');
				if(((any[2]==0)||(any[2]==9))&&(sigo[2]))
				{	any[2] = 1;console.log('any[2]=' + any[2]);//BLOQUEA ENTRADA DE DATOS HASTA QUE SEA 0
					punto2();
				}
				if(!sigo[2])
				{	sigo[2] = true;console.log('sigo[2]=' + sigo[2]);//'habilita' la siguiente entrada del mouse luego de pausarse por ocurrir una subida del touch (eTb2(){})
				}
				w7()}

function		//AL BAJAR EL MOUSE..
	eMb3() {
	console.log('_____@- eMb3()');
	if (((any[3] == 0) || (any[3] == 9))&&(sigo[3]))
	{	any[3] = 1; console.log('any[3]=' + any[3]);//BLOQUEA ENTRADA DE DATOS HASTA QUE SEA 0
		punto3();
	}
	if (!sigo[3]) {
		sigo[3] = true; console.log('sigo[3]=' + sigo[3]);//'habilita' la siguiente entrada de datos con mouse luego de pausarse por ocurrir una subida del touch (ƒ(){})
	}
	w7()
}

/*
function		//AL BAJAR EL MOUSE..
	eMb4(){ 	console.log('_____@- eMb4()');
				if(((any[4]==0)||(any[4]==9))&&(sigo[4]))
				{	any[4] = 1;console.log('any[4]=' + any[4]);//BLOQUEA ENTRADA DE DATOS HASTA QUE SEA 0
					punto4();
				}
				if(!sigo[4])
				{	sigo[4] = true;console.log('sigo[4]=' + sigo[4]);//'habilita' la siguiente entrada de datos con mouse luego de pausarse por ocurrir una subida del touch (ƒ(){})
				}
				w7()}
*/

function		//AL BAJAR EL MOUSE..
	eMb6() {
	console.log('_____@- eMb6()');
	if (((any[6] == 0) || (any[6] == 9))&&(sigo[6]))//[si es ENTRADA DE DATOS TIPO MOUSEDOWN(0) o TODOS(9)] y [no es la PRIMER INTERACCION CON EL TOUCH] y [sigue porque EN TOUCH 'NO HA BLOCKEADO' EL SIGUIENTE CLICK DEL MOUSE POR DAR CLIC]
	{	any[6] = 1; console.log('any[6]=' + any[6]);//(1) BLOQUEA LA SIGUIENTE ENTRADA DE DATOS HASTA QUE SEA 0
		punto6();
	}
	if (!sigo[6])//SI EL TOUCH 'HA BLOCKEADO' EL SIGUIENTE CLICK DEL MOUSE POR DAR CLIC..
	{	sigo[6] = true; console.log('sigo[6]=' + sigo[6]);//'habilita' la siguiente entrada de datos con mouse luego de pausarse por ocurrir una subida del touch (ƒ(){})
	}
	w7()//inicia evento 'primer' interacción
}

function		//AL BAJAR EL MOUSE..
	eMb7(){ 	console.log('_____@- eMb7()');
				if(((any[7]==0)||(any[7]==9))&&(sigo[7]))
				{	any[7] = 1;console.log('any[7]=' + any[7]);//BLOQUEA ENTRADA DE DATOS HASTA QUE SEA 0
					punto7();
				}
				if(!sigo[7])
				{	sigo[7] = true;console.log('sigo[7]=' + sigo[7]);//'habilita' la siguiente entrada del mouse luego de pausarse por ocurrir una subida del touch (eTb2(){})
				}
				w7()}

function		//AL BAJAR EL MOUSE..
	eMb8()	{ 	
				console.log('_____@- eMb8()');
				if(((any[8]==0)||(any[8]==9))&&(sigo[8]))
				{	any[8] = 1;console.log('any[8]=' + any[8]);//BLOQUEA ENTRADA DE DATOS HASTA QUE SEA 0
					punto8();
				}
				if(!sigo[8])
				{	sigo[8] = true;console.log('sigo[8]=' + sigo[8]);//'habilita' la siguiente entrada de datos con mouse luego de pausarse por ocurrir una subida del touch (ƒ(){})
				}
				w7()
}

function		//AL BAJAR EL MOUSE..
	eMb9(){ 	console.log('_____@- eMb9()');
				if(((any[9]==0)||(any[9]==9))&&(sigo[9]))
				{	any[9] = 1;console.log('any[9]=' + any[9]);//BLOQUEA ENTRADA DE DATOS HASTA QUE SEA 0
					punto9();
				}
				if(!sigo[9])
				{	sigo[9] = true;console.log('sigo[9]=' + sigo[9]);//'habilita' la siguiente entrada de datos con mouse luego de pausarse por ocurrir una subida del touch (ƒ(){})
				}
				w7()}

function		//AL SUBIR EL MOUSE..     --l4471
	eMs0(){ 	console.log('_____@- eMs0()');
				if(any[0]==1)
				{	any[0] = 0;console.log('any[0]=' + any[0]);//REACTIVA LA ENTRADA MOUSEDOWN
					vacio(0);
				}
				www9()
}

function		//AL SUBIR EL MOUSE..
	eMs1(){ 	console.log('_____@- eMs1()');
				if(any[1]==1)
				{	any[1] = 0;console.log('any[1]=' + any[1]);//REACTIVA LA ENTRADA MOUSEDOWN
					vacio(1);
				}
				www9()}

function		//AL SUBIR EL MOUSE..
	eMs2(){ 	console.log('_____@- eMs2()');
				if(any[2]==1)
				{	any[2] = 0;console.log('any[2]=' + any[2]);//REACTIVA LA ENTRADA MOUSEDOWN
					vacio(2);
				}
				www9()}

function		//AL SUBIR EL MOUSE..
	eMs3() {	console.log('_____@- eMs3()');
				if (any[3] == 1) {
				any[3] = 0; console.log('any[3]=' + any[3]);//REACTIVA LA ENTRADA MOUSEDOWN
				vacio(3);
				}
				www9()
}

/*
function		//AL SUBIR EL MOUSE..
	eMs4(){ 	console.log('_____@- eMs4()');
				if(any[4]==1)
				{	any[4] = 0;console.log('any[4]=' + any[4]);//REACTIVA LA ENTRADA MOUSEDOWN
					vacio(4);
				}
				www9()}
*/

function		//AL SUBIR EL MOUSE..
	eMs6() {	console.log('_____@- eMs6()');
				if (any[6] == 1)//Si esta bloqueado por ENTRADA DE DATOS TIPO MOUSEDOWN(0) o TODOS(9)
				{
					any[6] = 0; console.log('any[6]=' + any[6]);//REACTIVA LA ENTRADA por MOUSEDOWN
					vacio(6);
				}
				www9()//termina evento 'primer' interacción
}

function		//AL SUBIR EL MOUSE..
	eMs7(){ 	console.log('_____@- eMs7()');
				if(any[7]==1)
				{	any[7] = 0;console.log('any[7]=' + any[7]);//REACTIVA LA ENTRADA MOUSEDOWN
					vacio(7);
				}
				www9()}

function		//AL SUBIR EL MOUSE..
	eMs8(){ 	console.log('_____@- eMs8()');
				if(any[8]==1)
				{	any[8] = 0;console.log('any[8]=' + any[8]);//REACTIVA LA ENTRADA MOUSEDOWN
					vacio(8);
				}
				www9()
}

function		//AL SUBIR EL MOUSE..
	eMs9(){ 	console.log('_____@- eMs9()');
				if(any[9]==1)
				{	any[9] = 0;console.log('any[9]=' + any[9]);//REACTIVA LA ENTRADA MOUSEDOWN
					vacio(9);
				}
				www9()}

//ooojooo con esta función al parecer es especial porque 
//las otras funciones eTb3, eTb4, etc la llaman!
//revizar la parte del pw
function		//AL TOCAR EL TOUCH EN CUALQUIE PARTE..   --l4539
	eTb0(ev) {
	console.log('_____@- eTb0()');
	ev.preventDefault();// Call preventDefault() to prevent any further handling
	////if (pw)//ES LA PRIMER VEZ!  (este if nunca se ejecuta por pw false desde el inicio, se puede quitar?)
	////{
	////	console.log('Playback resumed successfully');
	////	pw = false; console.log('pw=' + pw);
	////	any[0] = 8; console.log('any[0]=' + any[0]);//BLOQUEA ENTRADA DE DATOS HASTA QUE SEA 4
	////	hora();
	////	//none();//quita el cursor tipo puntero que tiene por defecto
	////	doble = m + dos; console.log('doble=' + doble);//LIMITE PARA DOBLECLICK
	////}
	if (((any[0] == 4) || (any[0] == 9)))// && (!pv)) 
	{	any[0] = 5; console.log('any[0]=' + any[0]);//BLOQUEA ENTRADA DE DATOS HASTA QUE SEA 4
		if (sigo[0]) {
			sigo[0] = false; console.log('sigo[0]=' + sigo[0]);//'inhabilita' la siguiente entrada del mouse
		}
		punto0();//             --lAQUI NO SE NECESITA SOLO ES PARA DESBLOQUEAR EL TOUCH DE PRIMER VEZ
	}
}

function	
eTb1(ev){	console.log('_____@- eTb1()');
			ev.preventDefault();// Call preventDefault() to prevent any further handling
			////if (pv) {	//(este if nunca se ejecuta por pv y pw false desde el inicio, se puede quitar?)
			////	eTb0(ev);//AL TOCAR EL TOUCH EN CUALQUIE PARTE..
			////}
			////else//!pv
			////{
				if(((any[1]==4)||(any[1]==9)))// &&(!pv))
				{	any[1] = 5;console.log('any[1]=' + any[1]);//BLOQUEA ENTRADA DE DATOS HASTA QUE SEA 4
					if(sigo[1])
					{ 	sigo[1] = false;console.log('sigo[1]=' + sigo[1]);//'inhabilita' la siguiente entrada del mouse
					}
					punto1();
				}
			////}
		}

function	
eTb2(ev){	console.log('_____@- eTb2()');
			ev.preventDefault();// Call preventDefault() to prevent any further handling
			////if (pv) {	//(este if nunca se ejecuta por pv y pw false desde el inicio, se puede quitar?)
			////	eTb0(ev);//AL TOCAR EL TOUCH EN CUALQUIE PARTE..
			////}
			////else//!pv
			////{
				if(((any[2]==4)||(any[2]==9)))// &&(!pv))
				{	any[2] = 5;console.log('any[2]=' + any[2]);//BLOQUEA ENTRADA DE DATOS HASTA QUE SEA 4
					if(sigo[2])
					{ 	sigo[2] = false;console.log('sigo[2]=' + sigo[2]);//'inhabilita' la siguiente entrada del mouse
					}
					punto2();
				}
			////}
		}

function
	eTb3(ev) {
	console.log('_____@- eTb3()');
	ev.preventDefault();// Call preventDefault() to prevent any further handling
	////if (pv) {	//(este if nunca se ejecuta por pv y pw false desde el inicio, se puede quitar?)
	////	eTb0(ev);//AL TOCAR EL TOUCH EN CUALQUIE PARTE..
	////}
	////else//!pv
	////{
		if (((any[3] == 4) || (any[3] == 9)))//  && (!pv)) 
		{	any[3] = 5; console.log('any[3]=' + any[3]);//BLOQUEA ENTRADA DE DATOS HASTA QUE SEA 4
			if (sigo[3]) {
				sigo[3] = false; console.log('sigo[3]=' + sigo[3]);//'inhabilita' la siguiente entrada del mouse
			}
			punto3();
		}
	////}
}

/*
function	
eTb4(ev){		console.log('_____@- eTb4()');
				ev.preventDefault();// Call preventDefault() to prevent any further handling
				////if(pv)	//(este if nunca se ejecuta por pv y pw false desde el inicio, se puede quitar?)
				////{	eTb0(ev);//AL TOCAR EL TOUCH EN CUALQUIE PARTE..
				////}
				////else//!pv
				////{	
					if(((any[4]==4)||(any[4]==9)))// &&(!pv))
					{	any[4] = 5;console.log('any[4]=' + any[4]);//BLOQUEA ENTRADA DE DATOS HASTA QUE SEA 4
						if(sigo[4])
						{	sigo[4] = false;console.log('sigo[4]=' + sigo[4]);//'inhabilita' la siguiente entrada del mouse
						}
						punto4();
					}
				////}
			}
*/

function
	eTb6(ev) {
	console.log('_____@- eTb6()');
	ev.preventDefault();// Call preventDefault() to prevent any further handling
	////if (pv) {	//(este if nunca se ejecuta por pv y pw false desde el inicio, se puede quitar?)
	////	eTb0(ev);//AL TOCAR EL TOUCH EN CUALQUIE PARTE..
	////}
	////else//!pv
	////{
		if (((any[6] == 4) || (any[6] == 9)))//  && (!pv)) 
		{	any[6] = 5; console.log('any[6]=' + any[6]);//BLOQUEA ENTRADA DE DATOS HASTA QUE SEA 4
			if (sigo[6]) {
				sigo[6] = false; console.log('sigo[6]=' + sigo[6]);//'inhabilita' la siguiente entrada del mouse
			}
			punto6();
		}
	////}
}

function	
eTb7(ev){	console.log('_____@- eTb7()');
			ev.preventDefault();// Call preventDefault() to prevent any further handling
			////if (pv) {	//(este if nunca se ejecuta por pv y pw false desde el inicio, se puede quitar?)
			////	eTb0(ev);//AL TOCAR EL TOUCH EN CUALQUIE PARTE..
			////}
			////else//!pv
			////{
				if(((any[7]==4)||(any[7]==9)))// &&(!pv))
				{	any[7] = 5;console.log('any[7]=' + any[7]);//BLOQUEA ENTRADA DE DATOS HASTA QUE SEA 4
					if(sigo[7])
					{ 	sigo[7] = false;console.log('sigo[7]=' + sigo[7]);//'inhabilita' la siguiente entrada del mouse
					}
					punto7();
				}
			////}
		}

function	
	eTb8(ev){	console.log('_____@- eTb8()');
				ev.preventDefault();// Call preventDefault() to prevent any further handling
				////if (pv) {	//(este if nunca se ejecuta por pv y pw false desde el inicio, se puede quitar?)
				////	eTb0(ev);//AL TOCAR EL TOUCH EN CUALQUIE PARTE..
				////}
				////else//!pv
				////{
					if(((any[8]==4)||(any[8]==9)))// &&(!pv))
					{	any[8] = 5;console.log('any[8]=' + any[8]);//BLOQUEA ENTRADA DE DATOS HASTA QUE SEA 4
						if(sigo[8])
						{	sigo[8] = false;console.log('sigo[8]=' + sigo[8]);//'inhabilita' la siguiente entrada del mouse
						}
						punto8();
					}
				////}
}

function	
	eTb9(ev){	console.log('_____@- eTb9()');
			ev.preventDefault();// Call preventDefault() to prevent any further handling
			////if (pv) {	//(este if nunca se ejecuta por pv y pw false desde el inicio, se puede quitar?)
			////	eTb0(ev);//AL TOCAR EL TOUCH EN CUALQUIE PARTE..
			////}
			////else//!pv
			////{
				if(((any[9]==4)||(any[9]==9)))// &&(!pv))
				{	any[9] = 5;console.log('any[9]=' + any[9]);//BLOQUEA ENTRADA DE DATOS HASTA QUE SEA 4
					if(sigo[9])
					{	sigo[9] = false;console.log('sigo[9]=' + sigo[9]);//'inhabilita' la siguiente entrada del mouse
					}
					punto9();
				}
			////}
		}

//ooojooo con esta función al parecer es especial porque 
//las otras funciones eTs3, eTs4, etc la llaman!
//revizar la parte del pw
function		//AL SOLTAR EL TOUCH EN CUALQUIER PARTE..     --l4676
	eTs0() {
	console.log('_____@- eTs0()');
	////if ((pv) && (any[0] == 8)) { //(este if nunca se ejecuta por pv y pw false desde el inicio, se puede quitar?)
	////	hora();
	////	if (m < doble) {
	////		pv = false; console.log('pv=' + pv);//HA OCURRIDO LA PRIMER INTERACCION
	////		f0017(1);//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
	////		navigator.vibrate(300);//Arreglar abcdef //:/VIBRAR para una persona sordociega se entere
	////		any[0] = 4; console.log('any[0]=' + any[0]);//REACTIVA LA ENTRADA TOUCHSTART
	////	}
	////	else {
	////		pw = true;
	////	}
	////}
	if (any[0] == 5) {
		any[0] = 4; console.log('any[0]=' + any[0]);//REACTIVA LA ENTRADA TOUCHSTART
		vacio(0);//          --lAQUI NO SE NECESITA SOLO ES PARA DESBLOQUEAR EL TOUCH DE PRIMER VEZ
	}
}

function		//AL sOLTAR EL TOUCH EN UN AREA ESPECIFICA..
	eTs1(){ 	console.log('_____@- eTs1()');
			////if (pv) {//(este if nunca se ejecuta por pv y pw false desde el inicio, se puede quitar?)
			////	eTs0();//AL SOLTAR EL TOUCH EN CUALQUIER PARTE..
			////}
			////else//!pv
			////{
				if(any[1]==5)
				{	any[1] = 4;console.log('any[1]=' + any[1]);//REACTIVA LA ENTRADA TOUCHSTART
					vacio(1);
				}
			////}
		}

function		//AL sOLTAR EL TOUCH EN UN AREA ESPECIFICA..
	eTs2(){ 	console.log('_____@- eTs2()');
			////if (pv) {//(este if nunca se ejecuta por pv y pw false desde el inicio, se puede quitar?)
			////	eTs0();//AL SOLTAR EL TOUCH EN CUALQUIER PARTE..
			////}
			////else//!pv
			////{
				if(any[2]==5)
				{	any[2] = 4;console.log('any[2]=' + any[2]);//REACTIVA LA ENTRADA TOUCHSTART
					vacio(2);
				}
			////}
		}

function		//AL sOLTAR EL TOUCH EN UN AREA ESPECIFICA..
	eTs3() {
	console.log('_____@- eTs3()');
	////if (pv) {//(este if nunca se ejecuta por pv y pw false desde el inicio, se puede quitar?)
	////	eTs0();//AL SOLTAR EL TOUCH EN CUALQUIER PARTE..
	////}
	////else//!pv
	////{
		if (any[3] == 5) {
			any[3] = 4; console.log('any[3]=' + any[3]);//REACTIVA LA ENTRADA TOUCHSTART
			vacio(3);
		}
	////}
}

/*
function		//AL sOLTAR EL TOUCH EN UN AREA ESPECIFICA..
eTs4(){ 		console.log('_____@- eTs4()');
				////if(pv)//(este if nunca se ejecuta por pv y pw false desde el inicio, se puede quitar?)
				////{	eTs0();//AL SOLTAR EL TOUCH EN CUALQUIER PARTE..
				////}
				////else//!pv
				////{	
					if(any[4]==5)
					{	any[4] = 4;console.log('any[4]=' + any[4]);//REACTIVA LA ENTRADA TOUCHSTART
						vacio(4);
					}
				////}
					}
*/

function		//AL sOLTAR EL TOUCH EN UN AREA ESPECIFICA..
	eTs6() {
	console.log('_____@- eTs6()');
	////if (pv) {//(este if nunca se ejecuta por pv y pw false desde el inicio, se puede quitar?)
	////	eTs0();//AL SOLTAR EL TOUCH EN CUALQUIER PARTE..
	////}
	////else//!pv
	////{
		if (any[6] == 5) {
			any[6] = 4; console.log('any[6]=' + any[6]);//REACTIVA LA ENTRADA TOUCHSTART
			vacio(6);
		}
	////}
}

function		//AL sOLTAR EL TOUCH EN UN AREA ESPECIFICA..
	eTs7(){ 	console.log('_____@- eTs7()');
			////if (pv) {//(este if nunca se ejecuta por pv y pw false desde el inicio, se puede quitar?)
			////	eTs0();//AL SOLTAR EL TOUCH EN CUALQUIER PARTE..
			////}
			////else//!pv
			////{
				if(any[7]==5)
				{	any[7] = 4;console.log('any[7]=' + any[7]);//REACTIVA LA ENTRADA TOUCHSTART
					vacio(7);
				}
			////}
		}

function		//AL sOLTAR EL TOUCH EN UN AREA ESPECIFICA..
eTs8(){ 		console.log('_____@- eTs8()');
				////if (pv) {//(este if nunca se ejecuta por pv y pw false desde el inicio, se puede quitar?)
				////	eTs0();//AL SOLTAR EL TOUCH EN CUALQUIER PARTE..
				////}
				////else//!pv
				////{	
					if(any[8]==5)
					{	any[8] = 4;console.log('any[8]=' + any[8]);//REACTIVA LA ENTRADA TOUCHSTART
						vacio(8);
					}
				////}
}

function		//AL sOLTAR EL TOUCH EN UN AREA ESPECIFICA..
eTs9(){ 	console.log('_____@- eTs9()');
			////if (pv) {//(este if nunca se ejecuta por pv y pw false desde el inicio, se puede quitar?)
			////	eTs0();//AL SOLTAR EL TOUCH EN CUALQUIER PARTE..
			////}
			////else//!pv
			////{
				if(any[9]==5)
				{	any[9] = 4;console.log('any[9]=' + any[9]);//REACTIVA LA ENTRADA TOUCHSTART
					vacio(9);
				}
			////}
		}

function		//REGISTRA LA HORA ACTUAL EN MILISEGUNDOS
	hora() { 		//console.log('_____@- hora()');
	hd = new Date();
	m = hd.getTime();//console.log('m=' + m)
}

//morse() ver al final

function      //oscurece la capa de los colores
	oscu() {       	//if(true/*t3x3*/)
	{ doorOscu.style.backgroundColor = 'rgba(0,0,0,0.3)' }
}

function      //primer parte general del algoritmo codigo morse        --l4801
punto0(){     //console.log('_____@- punto0()');
              //puerta.classList.add('active');
              libre[0] = false;//console.log('libre[0]=' + libre[0]);//MOUSE CLICK ESTA ABAJO
              audiPun();//ACTIVA EL SONIDO DEL PUNTO
              color(cycle[0]);//ASIGNA UN COLOR A LA SEÑAL PUNTO/RAYA
              if(cycle[0]==0)
              { pare[0] = false;//console.log('pare[0]=' + pare[0]);
              }
              hora();
              nm[0] = m;//console.log('nm[0]='+ nm[0]);
			  //Hay que calibrar cut en  pantallas touch!!  min[0] = m + cut*1.7:
              min[0] = m + cut*2;//console.log('min[0]='+ min[0]);//EN EL CASO DE 0 O MORSE SON SEÑALES RAPIDAS POR LO QUE NO SE toma tM sino cut para que una parte de las rayas sean puntos y una parte de los sostenidos sean rayas
              if(cycle[0] > 0)
              { regX[0][cycle[0]] = nm[0] - mn[0];//console.log('regX[0]=' + regX[0]);
                cycle[0] += 1;//console.log('cycle[0]=' + cycle[0]);
              }
              regY[0][cycle[0]] = 1;//console.log('regY[0]=' + regY[0]);
              ciclo0()}

function      //primer parte general del algoritmo codigo morse
punto1(){     console.log('_____@- punto1()');
				//bo1.classList.add('active');
				//boT11.classList.add('active');
				libre[1] = false;console.log('libre[1]=' + libre[1]);//MOUSE CLICK ESTA ABAJO
				//audiPun();//ACTIVA EL SONIDO DEL PUNTO
				color(cycle[1]);//ASIGNA UN COLOR A LA SEÑAL PUNTO/RAYA
				if(cycle[1]==0)
				{ pare[1] = false;console.log('pare[1]=' + pare[1]);
				}
				hora();
				nm[1] = m;console.log('nm[1]='+ nm[1]);
				min[1] = m + cut*2;//m + tM;console.log('min[1]='+ min[1]);//EN EL CASO DE 2 y 8 NO SE toma cut sino tM para que los puntos sigan como puntos, las rayas sean como puntos y los sostenidos como las rayas    
				if(cycle[1] > 0)
				{ regX[1][cycle[1]] = nm[1] - mn[1];console.log('regX[1]=' + regX[1]);
				  cycle[1] += 1;console.log('cycle[1]=' + cycle[1]);
				}
				regY[1][cycle[1]] = 1;console.log('regY[1]=' + regY[1]);
				ciclo1()}

function      //primer parte general del algoritmo codigo morse
punto2(){     console.log('_____@- punto2()');
              //bo2.classList.add('active');
              //boT22.classList.add('active');
              libre[2] = false;console.log('libre[2]=' + libre[2]);//MOUSE CLICK ESTA ABAJO
              //audiPun();//ACTIVA EL SONIDO DEL PUNTO
              color(cycle[2]);//ASIGNA UN COLOR A LA SEÑAL PUNTO/RAYA
              if(cycle[2]==0)
              { pare[2] = false;console.log('pare[2]=' + pare[2]);
              }
              hora();
              nm[2] = m;console.log('nm[2]='+ nm[2]);
              min[2] = m + cut*2;//m + tM;console.log('min[2]='+ min[2]);//EN EL CASO DE 2 y 8 NO SE toma cut sino tM para que los puntos sigan como puntos, las rayas sean como puntos y los sostenidos como las rayas    
              if(cycle[2] > 0)
              { regX[2][cycle[2]] = nm[2] - mn[2];console.log('regX[2]=' + regX[2]);
                cycle[2] += 1;console.log('cycle[2]=' + cycle[2]);
              }
              regY[2][cycle[2]] = 1;console.log('regY[2]=' + regY[2]);
              ciclo2()}

function      //primer parte general del algoritmo codigo morse
punto3() {
			console.log('_____@- punto3()');
			//bo3.classList.add('active');
			//+ + +boT33.classList.add('active');
			libre[3] = false; console.log('libre[3]=' + libre[3]);//MOUSE CLICK ESTA ABAJO
			//audiPun();//ACTIVA EL SONIDO DEL PUNTO
			color(cycle[3]);//ASIGNA UN COLOR A LA SEÑAL PUNTO/RAYA
			if (cycle[3] == 0) {
				pare[3] = false; console.log('pare[3]=' + pare[3]);
			}
			hora();
			nm[3] = m; console.log('nm[3]=' + nm[3]);
			//NOTA IMPORTANTE! Si fuera punto0(Editor Morse) min vale m + cut; esto porque si no esta escribiendo morse, todas son teclas especiales que inician minimo con una raya o un sostenido, solo tienen rayas y pueden terminar con o sin un punto, ej --- --· -· ---· , esto permite que se puedan hacer múltiples clics superrápidos ....... y NO se confundan con una función especial!!!
			min[3] = m + cut*2;//m + tM; console.log('min[3]=' + min[3]);
			if (cycle[3] > 0) {
				regX[3][cycle[3]] = nm[3] - mn[3]; console.log('regX[3]=' + regX[3]);
				cycle[3] += 1; console.log('cycle[3]=' + cycle[3]);
			}
			regY[3][cycle[3]] = 1; console.log('regY[3]=' + regY[3]);
			ciclo3()
			}
/*
function      //primer parte general del algoritmo codigo morse
punto4(){     console.log('_____@- punto4()');
			  //bo4.classList.add('active');
			  //+ + +boT44.classList.add('active');
			  libre[4] = false;console.log('libre[4]=' + libre[4]);//MOUSE CLICK ESTA ABAJO
			  //audiPun();//ACTIVA EL SONIDO DEL PUNTO
			  color(cycle[4]);//ASIGNA UN COLOR A LA SEÑAL PUNTO/RAYA
			  if(cycle[4]==0)
			  { pare[4] = false;console.log('pare[4]=' + pare[4]);
			  }
			  hora();
			  nm[4] = m;console.log('nm[4]='+ nm[4]);
			  //NOTA IMPORTANTE! Si fuera punto0(Editor Morse) min vale m + cut; esto porque si no esta escribiendo morse, todas son teclas especiales que inician minimo con una raya o un sostenido, solo tienen rayas y pueden terminar con o sin un punto, ej --- --· -· ---· , esto permite que se puedan hacer múltiples clics superrápidos ....... y NO se confundan con una función especial!!!
			  min[4] = m + cut*2;//m + tM;console.log('min[4]='+ min[4]);
			  if(cycle[4] > 0)
			  { regX[4][cycle[4]] = nm[4] - mn[4];console.log('regX[4]=' + regX[4]);
				cycle[4] += 1;console.log('cycle[4]=' + cycle[4]);
			  }
			  regY[4][cycle[4]] = 1;console.log('regY[4]=' + regY[4]);
			  ciclo4()}
*/

function      //primer parte general del algoritmo codigo morse
punto6() {
			console.log('_____@- punto6()');
			//bo6.classList.add('active');
			//+ + +boT66.classList.add('active');
			libre[6] = false; console.log('libre[6]=' + libre[6]);//la tecla no esta libre porque MOUSE CLICK ESTA ABAJO
			//audiPun();//ACTIVA EL SONIDO DEL PUNTO
			color(cycle[6]);//ASIGNA UN COLOR A LA SEÑAL PUNTO/RAYA
			if (cycle[6] == 0)//Si es el ciclo 0..
			{
				pare[6] = false; console.log('pare[6]=' + pare[6]);//hay registro de actividad (PARE:Off)
			}
			hora();//Registra la hora actual
			nm[6] = m; console.log('nm[6]=' + nm[6]);//HORA/DIA InmICIO EN MILISEGUNDOS DESDE EL 1ERO DE ENERO DE 1970
			//NOTA IMPORTANTE! Si fuera punto0(Editor Morse) min vale m + cut; esto porque si no esta escribiendo morse, todas son teclas especiales que inician minimo con una raya o un sostenido, solo tienen rayas y pueden terminar con o sin un punto, ej --- --· -· ---· , esto permite que se puedan hacer múltiples clics superrápidos ....... y NO se confundan con una función especial!!!
			min[6] = m + cut*2;//m + tM; console.log('min[6]=' + min[6]);//RAYA minIMA EN MILISEGUNDOS PERMITIDA
			if (cycle[6] > 0)//Si va 1 ciclo o más..
			{
				regX[6][cycle[6]] = nm[6] - mn[6]; console.log('regX[6]=' + regX[6]);//REGISTRO1 5/6 CAMBIOS DE ESTADO TECLA  - diferencia HORA/DIA INICIAL-FINAL EN MILISEGUNDOS DESDE EL 1ERO DE ENERO DE 1970
				cycle[6] += 1; console.log('cycle[6]=' + cycle[6]);//INCREMENTA 1 CICLO, quedan números impares 1,3,5..
			}
			regY[6][cycle[6]] = 1; console.log('regY[6]=' + regY[6]);//REGISTRO2 RESULTADO DE ESTADO TECLA, inicialmente es un punto(1) y para una raya(2)
			ciclo6()
			}


function      //primer parte general del algoritmo codigo morse
punto7(){     console.log('_____@- punto7()');
			  //bo7.classList.add('active');
			  //boT77.classList.add('active');
			  libre[7] = false;console.log('libre[7]=' + libre[7]);//MOUSE CLICK ESTA ABAJO
			  //audiPun();//ACTIVA EL SONIDO DEL PUNTO
			  color(cycle[7]);//ASIGNA UN COLOR A LA SEÑAL PUNTO/RAYA
			  if(cycle[7]==0)
			  { pare[7] = false;console.log('pare[7]=' + pare[7]);
			  }
			  hora();
			  nm[7] = m;console.log('nm[7]='+ nm[7]);
			  min[7] = m + cut*2;//m + tM;console.log('min[7]='+ min[7]);//EN EL CASO DE 2 y 8 NO SE toma cut sino tM para que los puntos sigan como puntos, las rayas sean como puntos y los sostenidos como las rayas    
			  if(cycle[7] > 0)
			  { regX[7][cycle[7]] = nm[7] - mn[7];console.log('regX[7]=' + regX[7]);
				cycle[7] += 1;console.log('cycle[7]=' + cycle[7]);
			  }
			  regY[7][cycle[7]] = 1;console.log('regY[7]=' + regY[7]);
			  ciclo7()}
			




function      //primer parte general del algoritmo codigo morse
punto8(){     console.log('_____@- punto8()');
              //bo8.classList.add('active');
              //boT88.classList.add('active');
              libre[8] = false;console.log('libre[8]=' + libre[8]);//MOUSE CLICK ESTA ABAJO
              //audiPun();//ACTIVA EL SONIDO DEL PUNTO
              color(cycle[8]);//ASIGNA UN COLOR A LA SEÑAL PUNTO/RAYA
              if(cycle[8]==0)
              { pare[8] = false;console.log('pare[8]=' + pare[8]);
              }
              hora();
              nm[8] = m;console.log('nm[8]='+ nm[8]);
              min[8] = m + cut*2;//m + tM;console.log('min[8]='+ min[8]);//EN EL CASO DE 6 NO SE toma cut sino tM para que los puntos sigan como puntos, las rayas sean como puntos y los sostenidos como las rayas    
              if(cycle[8] > 0)
              { regX[8][cycle[8]] = nm[8] - mn[8];console.log('regX[8]=' + regX[8]);
                cycle[8] += 1;console.log('cycle[8]=' + cycle[8]);
              }
              regY[8][cycle[8]] = 1;console.log('regY[8]=' + regY[8]);         
              ciclo8()
}

function      //primer parte general del algoritmo codigo morse
punto9(){     console.log('_____@- punto9()');
              //boT99.classList.add('active');
              libre[9] = false;console.log('libre[9]=' + libre[9]);//MOUSE CLICK ESTA ABAJO
              //audiPun();//ACTIVA EL SONIDO DEL PUNTO
              color(cycle[9]);//ASIGNA UN COLOR A LA SEÑAL PUNTO/RAYA
              if(cycle[9]==0)
              { pare[9] = false;console.log('pare[9]=' + pare[9]);
              }
              hora();
              nm[9] = m;console.log('nm[9]='+ nm[9]);
              min[9] = m + cut*2;//m + tM;console.log('min[9]='+ min[9]);
              if(cycle[9] > 0)
              { regX[9][cycle[9]] = nm[9] - mn[9];console.log('regX[9]=' + regX[9]);
                cycle[9] += 1;console.log('cycle[9]=' + cycle[9]);
              }
              regY[9][cycle[9]] = 1;console.log('regY[9]=' + regY[9]);
              ciclo9()}

function      //sosTENIDA.. muestra en pantalla la letra mas 'sostenida de' mas el tempo en milisegundos del sostenido
	sos(s, u) {
	if (regX[s][u] > tM) 
	{	//console.error(' sostenida de ',regX[s][u],'ms, ');
		//outX[s] = outX[s].concat(' sostenida de ',regX[s][u],'ms, ');//    --lll
	}
}

function      //quita los colores de fondo tipo 'RESET' usando una capa transparente
	tran() {
	book.style.backgroundColor = 'transparent';
	doorOscu.style.backgroundColor = 'transparent'
}

function      //terminacion general de un punto o una raya: RESETEA LOS COLORES DE FONDO Y LA VARIABLE libre para que queden listas para recibir nuevos puntos y rayas
	vacio(v) {
	console.log('_____@- vacio(v)');
	/*if(v != 0)//DESACTIVA ESTILOS FONDOS BOTONES SELECCIONADOS DEL T3X3
	{ oFF(v);
	}*/
	libre[v] = true; console.log('libre[v]=' + libre[v]);//INICIA UN VACIO (DESCANSO) EN LA ENTRADA DE ENTRADA DE DATOS POSICION DE LA TTTECLA
	lin[v] = false; console.log('lin[v]=' + lin[v]);//RESET DE RAYAS/LINEAS
	tran();//quita los colores de fondo tipo 'RESET' usando una capa transparente
	hora();
	mn[v] = m; console.log('mn[v]=' + mn[v]);//registra el momento que se soltó el botón y actualiza HORA/DIA FINAL EN MILISEGUNDOS DESDE EL 1ERO DE ENERO DE 1970     	
	regX[v][cycle[v]] = mn[v] - nm[v]; console.log('regX[v]=' + regX[v]);//registra en REGISTRO1 5/6 los CAMBIOS DE ESTADO del botón/TECLA
	//REGLA * En las siguientes linea se puede quitar v==0 y v!=0 para que aplique para cualquier botón y quede igual que en la hoja a lapíz..
	///se aplica la regla * para todos///if ((v == 0) && (regX[v][cycle[v]] > tM))//Si es la tecla 0 (recibe sostenidos- con duración muy larga)
	
	
	
	
	
	
	/* original 1a * /
	if (regX[v][cycle[v]] > tM)//Si es la tecla 0 o cualquiera (recibe sostenidos- con duración muy larga)
	//if ((v == 0) && (regX[v][cycle[v]] > tM))//Si es la tecla 0 (recibe sostenidos- con duración muy larga)
	{
		regY[v][cycle[v]] = 3;//REGISTRO3 CAMBIO A ESTADO SOSTENIDO DE LA TECLA, se trata de un sostenido, el 3 lo indica
		console.log(' --- - - - - superrrrr sostenido!');
	}
	/*original 1b */

    /*2a */
	console.error('regY[v][cycle[v]]=',regW[v][cycle[v]]);
	if(regY[v][cycle[v]] == 4)//es un sostenido corto2, largo3 o muy largo4 lo filtra..
	{	console.log(' --- - - - - sostenido tipo Alerta SOS!');
		//mantener o detectar si el sostenido super largo (4)
		if (regX[v][cycle[v]] < tM*4)//Asignar 3 o 2 si recibe sostenidos largos tipo espacio(3) o raya(2)
		{	regY[v][cycle[v]] = 3;//REGISTRO3 CAMBIO A ESTADO espacio el 3 lo indica
			console.log(' --- - - - - sostenido tipo espacio!');
			if (regX[v][cycle[v]] < tM*2)//Si recibe sostenidos cortos tipo raya
			//if (regX[v][cycle[v]] < tM)//Si es la tecla 0 o cualquiera y recibe sostenidos cortos
			//if ((v == 0) && (regX[v][cycle[v]] > tM))//Si es la tecla 0 (recibe sostenidos- con duración muy larga)
			{	regY[v][cycle[v]] = 2;//REGISTRO3 CAMBIO A ESTADO RAYA el 2 lo indica
				console.log(' --- - - - - sostenido tipo raya!');
			}
		}
	}
	/*2b */

	cycle[v] += 1; console.log('cycle[v]=' + cycle[v]);//incrementa en uno el ciclo, quedan números pares 2,4,6.. 
	///se aplica la regla * para todos///if ((v != 0) && (regY[v][(cycle[v] - 1)] == 1))//Si REGISTRO2 RESULTADO DE ESTADO anterior del boton/TECLA (previo) es (1) es se trata de un punto final ---· -· --·
	//if (regY[v][(cycle[v] - 1)] == 1)//Si REGISTRO2 RESULTADO DE ESTADO anterior del boton/TECLA (previo) es (1) es se trata de un punto final ---· -· --·
	//if ((v != 0) && (regY[v][(cycle[v] - 1)] == 1))//Si REGISTRO2 RESULTADO DE ESTADO anterior del boton/TECLA (previo) es (1) es se trata de un punto final ---· -· --·
	/*{
		console.log('camino punto(1 al 9) ---· -· --· y corte');
		morse(v);
	}
	else*/ //Este fue un truco para detectar si se trataba de un punto y cuando ocurriera el primer punto termina el proceso, esto se quito para dar más libertad de atajos.., depronto se puede aplicar este truco a las teclas de subir y bajar para avanzar mas rapido hacia una casilla
	{
		console.log('camino normal o de rayas(1 al 9) --- - --');//Nota: al quitar la regla anterior de los puntos para terminar el morse, ya permite el ingreso de varios puntos o rayas
		max[v] = m + tM; console.log('max[v]=' + max[v]);
	}
}

function      //inicia evento 'primer' interacción
	w7() {
	console.log('_____@- w7()');
	////if (pw)//Si copia VIRTUAL de primer vez
	////{
	////	any[0] = 7;//Bloqueo por 'primer' interacción
	////}
}
function      //termina evento 'primer' interacción
	www9() {
	console.log('_____@- www9()');
	if (any[0] == 7)//Si tiene bloqueo 7
	{
		////pv = false;//no es la PRIMER INTERACCION CON EL TOUCH
		////pw = false;//copia vitual de pv
		any[0] = 9;//Libera el bloqueo(7) y permite cualquier tipo de entrada (9)                
		//+ + +maxi();
		//+ + +size();//ASIGNA VALORES A CADA CAJON
		//+ + +abc();//ACTIVA PUERTAS
		//+ + +audiMAmi();//SUENA.. pantalla maximizada
		//+ + +banD();//mira el estado si hay mensajes y lo indica
	}
}

function		//GENERAR el guion de la letra ingresada
zGuiIn(ltr){	{	leeme = ''.concat(kL0[ltr+1][4]);//concatena contenido de la fila con ', salida' y vPar
					decir(leeme);//lee el guión
					leeme = '';//RESET DEL GUIÓN
				}}

function		//analiza la señal si es del chat comunitario q indica que tecla fue
morse(q) {
	if(regY[q][cycle[q]-1] == 4)//si en el ultimo ciclo era un 4 de sostenido, resetee las variables y envie una señal de SOS!
	{	//vacio(q)
			console.error('  --- 4__  S.O.S.');
			console.log(' - - - boton - [5] Espacio Morse en el display M');
			//mMod = 4;
			f0145(1);//CONTROLAR la salida de la interfaz M y la opacidad segun el estado (st) 1:ACTIVAR la salida de la interfaz M y quitar la opacidad y 0:Hace todo lo contrario
			sale += '.        ¡S.O.S.Alert! ';
			colSale();//COLOREAR los espacios del display M 
			//iIntM0.textContent = salo;
			f0151();// Desplaza hacia el final el Display M
			f0146();//DETECTAR los eventos, si es el último evento sobre el botón 5 o la interfaz M resetea la interfaz M
			zGuiIn(q);//GENERAR el guion de la letra ingresada
	}//se termina el 4 sostenido
	else
	{
		if(regY[q][cycle[q]-1] == 3)//si en el ultimo ciclo era un 3 de sostenido, resetee las variables
		{	//vacio(q)
			console.error('  --- 3_');
			switch (q)
			{	case 0:
						console.log(' - - - boton - [5] Espacio Morse en el display M');
						//mMod = 4;
						f0145(1);//CONTROLAR la salida de la interfaz M y la opacidad segun el estado (st) 1:ACTIVAR la salida de la interfaz M y quitar la opacidad y 0:Hace todo lo contrario
						sale += ' ';
						colSale();//COLOREAR los espacios del display M 
						//iIntM0.textContent = salo;
						f0151();// Desplaza hacia el final el Display M
						f0146();//DETECTAR los eventos, si es el último evento sobre el botón 5 o la interfaz M resetea la interfaz M
						zGuiIn(0);//GENERAR el guion de la letra ingresada
				break;
				case 7:
						f0150();//BORRAR todo el texto de salida actual
						f0145();//CONTROLAR la activación y la desacticacion temporizada del intercomunicador M; si m es true (1) indica que el sostenido viene del boton - [5] del morse o del [menu]
				break;
				case 8:
						f0148(97);//CAMBIAR la interfaz M
				break;

			}
		}// se termina el 3 sostenido
		else// si era un 1de punto o un 2 de raya vaya al morse morse
		{	console.error('  --- 1. o 2- =>',regY[q][cycle[q]-1]);
			//inicio del morse(q)
			console.log('_____@- morse(q)');
			console.log(' - - - rrrrr q=', q);
			console.log(' - - - rrrrr cycle[q]=', cycle[q])
			console.log(' - - - rrrrr regX[q]=', regX[q]);
			console.log(' - - - rrrrr ###### #### ###### ### ##### ### ###regY[q]=', regY[q]);
			console.log(' - - - rrrrr max[q]=', max[q]);
			regX[q][cycle[q]] = nn[q] - mn[q]; console.log(' - - - rrrrr regX[q]=', regX[q]);
			if (q == 0)//boton - [5] entrada morse onclick='f0145() morse 0 BOTON MORSE 2023 IBOGOTA!!!!! DESACTIVADO - //boton 5 morse 0 -
			{		//mMod = 4;
					f0145(1);////CONTROLAR la salida de la interfaz M y la opacidad segun el estado (st) 1:ACTIVAR la salida de la interfaz M y quitar la opacidad y 0:Hace todo lo contrario
					switch (cycle[0])
					{	case 1:
							//if(regY[0][0]==1){outX[0] = 'E';zGuiIn(5);esTAS = true}
							if(regY[0][0]==1){if(regY[7][0] != 0){outX[0] = 'E'}else{outX[0] = 'e'}zGuiIn(5);esTAS = true}
							if(regY[0][0]==2){if(regY[7][0] != 0){outX[0] = 'T'}else{outX[0] = 't'}zGuiIn(21);esTAS = true}//;sos(q,0)}
						break;
						case 3:
							if((regY[0][0]==1)&&(regY[0][2]==1)){if(regY[7][0] != 0){outX[0] = 'I'}else{outX[0] = 'i'}zGuiIn(9);esTAS = true}
							if((regY[0][0]==1)&&(regY[0][2]==2)){if(regY[7][0] != 0){outX[0] = 'A'}else{outX[0] = 'a'}zGuiIn(1);esTAS = true}//;sos(q,2)}
							if((regY[0][0]==2)&&(regY[0][2]==1)){if(regY[7][0] != 0){outX[0] = 'N'}else{outX[0] = 'n'}zGuiIn(14);esTAS = true}
							if((regY[0][0]==2)&&(regY[0][2]==2)){if(regY[7][0] != 0){outX[0] = 'M'}else{outX[0] = 'm'}zGuiIn(13);esTAS = true}//;sos(q,2)}
						break;
						case 5:
							if((regY[0][0]==1)&&(regY[0][2]==1)&&(regY[0][4]==1)){if(regY[7][0] != 0){outX[0] = 'S'}else{outX[0] = 's'}zGuiIn(20);esTAS = true}
							if((regY[0][0]==1)&&(regY[0][2]==1)&&(regY[0][4]==2)){if(regY[7][0] != 0){outX[0] = 'U'}else{outX[0] = 'u'}zGuiIn(22);esTAS = true}//;sos(q,4)}
							if((regY[0][0]==1)&&(regY[0][2]==2)&&(regY[0][4]==1)){if(regY[7][0] != 0){outX[0] = 'R'}else{outX[0] = 'r'}zGuiIn(19);esTAS = true}
							if((regY[0][0]==1)&&(regY[0][2]==2)&&(regY[0][4]==2)){if(regY[7][0] != 0){outX[0] = 'W'}else{outX[0] = 'w'}zGuiIn(24);esTAS = true}//;sos(q,4)}
							if((regY[0][0]==2)&&(regY[0][2]==1)&&(regY[0][4]==1)){if(regY[7][0] != 0){outX[0] = 'D'}else{outX[0] = 'd'}zGuiIn(4);esTAS = true}
							if((regY[0][0]==2)&&(regY[0][2]==1)&&(regY[0][4]==2)){if(regY[7][0] != 0){outX[0] = 'K'}else{outX[0] = 'k'}zGuiIn(11);esTAS = true}//;sos(q,4)}
							if((regY[0][0]==2)&&(regY[0][2]==2)&&(regY[0][4]==1)){if(regY[7][0] != 0){outX[0] = 'G'}else{outX[0] = 'g'}zGuiIn(7);esTAS = true}
							if((regY[0][0]==2)&&(regY[0][2]==2)&&(regY[0][4]==2)){if(regY[7][0] != 0){outX[0] = 'O'}else{outX[0] = 'o'}zGuiIn(16);esTAS = true}//;sos(q,4)}
						break;
						case 7:
							if((regY[0][0]==1)&&(regY[0][2]==1)&&(regY[0][4]==1)&&(regY[0][6]==1)){if(regY[7][0] != 0){outX[0] = 'H'}else{outX[0] = 'h'}zGuiIn(8);esTAS = true}
							if((regY[0][0]==1)&&(regY[0][2]==1)&&(regY[0][4]==1)&&(regY[0][6]==2)){if(regY[7][0] != 0){outX[0] = 'V'}else{outX[0] = 'v'}zGuiIn(23);esTAS = true}//;sos(q,6)}
							if((regY[0][0]==1)&&(regY[0][2]==1)&&(regY[0][4]==2)&&(regY[0][6]==1)){if(regY[7][0] != 0){outX[0] = 'F'}else{outX[0] = 'f'}zGuiIn(6);esTAS = true}
							if((regY[0][0]==1)&&(regY[0][2]==1)&&(regY[0][4]==2)&&(regY[0][6]==2)){if(regY[7][0] != 0){outX[0] = ' '}else{outX[0] = ' '}zGuiIn(0);esTAS = true}//;sos(q,6)}
							if((regY[0][0]==1)&&(regY[0][2]==2)&&(regY[0][4]==1)&&(regY[0][6]==1)){if(regY[7][0] != 0){outX[0] = 'L'}else{outX[0] = 'l'}zGuiIn(12);esTAS = true}
							//if((regY[0][0]==1)&&(regY[0][2]==2)&&(regY[0][4]==1)&&(regY[0][6]==2)){if(regY[7][0] != 0){outX[0] = '<br>'}else{outX[0] = '<br>'}zGuiIn(0);esTAS = true;sos(q,6)}
							if((regY[0][0]==1)&&(regY[0][2]==2)&&(regY[0][4]==2)&&(regY[0][6]==1)){if(regY[7][0] != 0){outX[0] = 'P'}else{outX[0] = 'p'}zGuiIn(17);esTAS = true}
							if((regY[0][0]==1)&&(regY[0][2]==2)&&(regY[0][4]==2)&&(regY[0][6]==2)){if(regY[7][0] != 0){outX[0] = 'J'}else{outX[0] = 'j'}zGuiIn(10);esTAS = true}//;sos(q,6)}
							if((regY[0][0]==2)&&(regY[0][2]==1)&&(regY[0][4]==1)&&(regY[0][6]==1)){if(regY[7][0] != 0){outX[0] = 'B'}else{outX[0] = 'b'}zGuiIn(2);esTAS = true}
							if((regY[0][0]==2)&&(regY[0][2]==1)&&(regY[0][4]==1)&&(regY[0][6]==2)){if(regY[7][0] != 0){outX[0] = 'X'}else{outX[0] = 'x'}zGuiIn(25);esTAS = true}//;sos(q,6)}
							if((regY[0][0]==2)&&(regY[0][2]==1)&&(regY[0][4]==2)&&(regY[0][6]==1)){if(regY[7][0] != 0){outX[0] = 'C'}else{outX[0] = 'c'}zGuiIn(3);esTAS = true}
							if((regY[0][0]==2)&&(regY[0][2]==1)&&(regY[0][4]==2)&&(regY[0][6]==2)){if(regY[7][0] != 0){outX[0] = 'Y'}else{outX[0] = 'y'}zGuiIn(26);esTAS = true}//;sos(q,6)}
							if((regY[0][0]==2)&&(regY[0][2]==2)&&(regY[0][4]==1)&&(regY[0][6]==1)){if(regY[7][0] != 0){outX[0] = 'Z'}else{outX[0] = 'z'}zGuiIn(27);esTAS = true}
							if((regY[0][0]==2)&&(regY[0][2]==2)&&(regY[0][4]==1)&&(regY[0][6]==2)){if(regY[7][0] != 0){outX[0] = 'Q'}else{outX[0] = 'q'}zGuiIn(18);esTAS = true}//;sos(q,6)}
							//if((regY[0][0]==2)&&(regY[0][2]==2)&&(regY[0][4]==2)&&(regY[0][6]==1)){if(regY[7][0] != 0){outX[0] = ''}else{outX[0] = ''}esTAS = true}
							//if((regY[0][0]==2)&&(regY[0][2]==2)&&(regY[0][4]==2)&&(regY[0][6]==2)){if(regY[7][0] != 0){outX[0] = 'CH'}else{outX[0] = 'ch'}esTAS = true;sos(q,6)}
						break;
						case 9:
							if((regY[0][0]==1)&&(regY[0][2]==2)&&(regY[0][4]==2)&&(regY[0][6]==2)&&(regY[0][8]==2)){outX[0] = '1';zGuiIn(28);esTAS = true}
							if((regY[0][0]==1)&&(regY[0][2]==1)&&(regY[0][4]==2)&&(regY[0][6]==2)&&(regY[0][8]==2)){outX[0] = '2';zGuiIn(29);esTAS = true}
							if((regY[0][0]==1)&&(regY[0][2]==1)&&(regY[0][4]==1)&&(regY[0][6]==2)&&(regY[0][8]==2)){outX[0] = '3';zGuiIn(30);esTAS = true}
							if((regY[0][0]==1)&&(regY[0][2]==1)&&(regY[0][4]==1)&&(regY[0][6]==1)&&(regY[0][8]==2)){outX[0] = '4';zGuiIn(31);esTAS = true}
							if((regY[0][0]==1)&&(regY[0][2]==1)&&(regY[0][4]==1)&&(regY[0][6]==1)&&(regY[0][8]==1)){outX[0] = '5';zGuiIn(32);esTAS = true}
							if((regY[0][0]==2)&&(regY[0][2]==1)&&(regY[0][4]==1)&&(regY[0][6]==1)&&(regY[0][8]==1)){outX[0] = '6';zGuiIn(33);esTAS = true}
							if((regY[0][0]==2)&&(regY[0][2]==1)&&(regY[0][4]==1)&&(regY[0][6]==2)&&(regY[0][8]==1)){outX[0] = '/';zGuiIn(40);esTAS = true}
							if((regY[0][0]==2)&&(regY[0][2]==2)&&(regY[0][4]==1)&&(regY[0][6]==1)&&(regY[0][8]==1)){outX[0] = '7';zGuiIn(34);esTAS = true}
							if((regY[0][0]==2)&&(regY[0][2]==2)&&(regY[0][4]==2)&&(regY[0][6]==1)&&(regY[0][8]==1)){outX[0] = '8';zGuiIn(35);esTAS = true}
							if((regY[0][0]==2)&&(regY[0][2]==2)&&(regY[0][4]==2)&&(regY[0][6]==2)&&(regY[0][8]==1)){outX[0] = '9';zGuiIn(36);esTAS = true}
							if((regY[0][0]==2)&&(regY[0][2]==2)&&(regY[0][4]==2)&&(regY[0][6]==2)&&(regY[0][8]==2)){outX[0] = '0';zGuiIn(37);esTAS = true}
							if((regY[0][0]==2)&&(regY[0][2]==2)&&(regY[0][4]==1)&&(regY[0][6]==2)&&(regY[0][8]==2)){if(regY[7][0] != 0){outX[0] = 'Ñ'}else{outX[0] = 'ñ'};zGuiIn(15);esTAS = true}
						break;
						case 11:       
							if((regY[0][0]==1)&&(regY[0][2]==1)&&(regY[0][4]==2)&&(regY[0][6]==2)&&(regY[0][8]==1)&&(regY[0][10]==1)){outX[0] = '?';zGuiIn(39);esTAS = true}
							if((regY[0][0]==1)&&(regY[0][2]==2)&&(regY[0][4]==1)&&(regY[0][6]==2)&&(regY[0][8]==1)&&(regY[0][10]==2)){outX[0] = '.';zGuiIn(38);esTAS = true}
							if((regY[0][0]==1)&&(regY[0][2]==2)&&(regY[0][4]==2)&&(regY[0][6]==1)&&(regY[0][8]==2)&&(regY[0][10]==1)){outX[0] = '@';zGuiIn(42);esTAS = true}
							//if((regY[0][0]==2)&&(regY[0][2]==2)&&(regY[0][4]==1)&&(regY[0][6]==1)&&(regY[0][8]==2)&&(regY[0][10]==2)){outX[0] = '!';zGuiIn(30);esTAS = true}
							if((regY[0][0]==2)&&(regY[0][2]==2)&&(regY[0][4]==2)&&(regY[0][6]==1)&&(regY[0][8]==1)&&(regY[0][10]==1)){outX[0] = ':';zGuiIn(41);esTAS = true}
						break;
					}

					if(esTAS)
					{

					


					sale += outX[0];
					colSale();
					//iIntM0.textContent = salo;
					f0151();// Desplaza hacia el final el Display M

					}
		}
		else//OTROS BOTONES 2023 IBOGOTA!!!!!
		{		//+ + +		if(!(//(true/*t3x3*/)&&
			//+ + +			 (cycle[q]==1)&&(regY[q][0]==1) ))//&&((q==3)||(q==7)||(q==9))))
			//+ + +		{	//+ + +modivi();//RESET DE sentido, divi y modo, solo cuando no se trata de un click sobre alguno de los botones //*****???3, 7 y 9 en el teclado inclusivo
			//+ + +		}
			switch (cycle[q])//switch que depende del ciclo en que termino/salio la tecla q
			{
				case 1://si salio luego del primer ciclo  
					//console.error('  -- una señal');

					if (regY[q][0] == 1)//MI CLIC 2023 IBOGOTA!!!!!!!!    ###### SI SE RECIBE UN PUNTO EN.. #######
					{
						outX[q] = ' *';//ES UN PUNTO..

						if (q == 1)// 	
						{	console.log(' - - - Salir X (1) ');
							f0047(1);//Clic sobre el boton 1
						};

						if (q == 2)// 	
						{	console.log(' - - - Espacio (2) ');
							f0096(1, 1);//Clic sobre el boton 2
						};

						if (q == 3)//boton . [3] clic o enter onclick='f0096(1,1) morse 3 MI CLIC FIJO 2023 IBOGOTA!!!! 	
						{	console.log(' - - - MI CLIC FIJO 2023 IBOGOTA!!!! ');
							f0096(1, 1);//Clic sobre el boton 3
						};

						/*if(q==4)//MI CLIC FIJO 2023 IBOGOTA!!!! 	
						{	console.log(' - - - MI CLIC FIJO 2023 IBOGOTA!!!! ');
							f0047(1);//"UNDO CANCEL" - click en botón 4 | REGRESAR a una ruta secundaria o principal anterior
						};*/

						//Nota: no le tengo funciones al 5, es decir el boton 0 de la barra inclinada, el 8 esta libre por eso lo tome prestado!

						///if (q == 6)//boton V [6] avanzar adelante un item (+1) morse 6 arrow down	
						///{	console.log(' - - - arrow down! ');
						///	f0095(1);// arrow down
						///};

						if (q == 7)// 	
						{	console.log(' - - - Menu (7) ');
							//f0148(99);//DESACTIVAR la interfaz de Salida M
							//if(mMod > 0)//Si el modo no es 0
							//{	f0152();//INTERRUMPIR del conteo y DESACTIVAR el display de la interfaz M
							//}
							f0015(1);//Clic sobre el boton 7 [] menu
						};

						if (q == 8)//boton / [0] Interfaz M
						{	/*console.log(' - - - Espacio Morse en el display M');
							mMod = 4;
							f0145();////CONTROLAR la salida de la interfaz M y la opacidad segun el estado (st) 1:ACTIVAR la salida de la interfaz M y quitar la opacidad y 0:Hace todo lo contrario
							sale += ' ';
							colSale();
							//iIntM0.textContent = salo;
							f0151();// Desplaza hacia el final el Display M
							f0146();//DETECTAR los eventos, si es el último evento sobre el botón 5 o la interfaz M resetea la interfaz M
	    					*/
							//f0150();//APAGAR la interfaz de Salida M, el Dsiplay M y Borra todo el texto de salida actual
								console.log(' - - - rrrrr MOSTRAR la interfaz de Salida M que corresponda porque se oprimio 7 ([])!!!! ');
								f0148(98);//MOSTRAR la interfaz de Salida M
						
						
						
						};

					
					}
					if (regY[q][0] == 2)//MI RAYA 2023 IBOGOTA!!!!!!!  
					{
						outX[q] = ' -';//RAYA..
						//sos(q,0);


						if (q == 3)//boton . [3] raya onclick='f0096(1,1,1) morse 3 MI REVERSA FIJA 2023 IBOGOTA!!!! 	
						{	console.log(' - - - MI REVERSA FIJA 2023 IBOGOTA!!!! ');
							f0096(1, 1, 1);//Aplicar reversa al clic(botón 3) salTO -1
						};

						/////if (q == 6)//boton V [6] avanzar adelante un item (+1) morse 6 arrow down	
						/////{	console.log(' - - - arrow down! ');
						/////	f0095(1);// arrow down
						/////};

						//////if (q == 7)//boton [] [7]  cambio de entrada -> /morse/teclado normal/teclado gigante/señas/off/ morse 8 Espacio Morse	
						//////{	console.log(' - - - rrrrr MOSTRAR la interfaz de Salida M que corresponda porque se oprimio 7 ([])!!!! ');
						//////	f0148();//MOSTRAR la interfaz de Salida M que corresponda porque se oprimio 7 menu
						//////};
						if (q == 7)// 	
						{	//f0148(99);//DESACTIVAR la interfaz de Salida M
						 	//console.log(' - - - Menu (7) ');
							//if(mMod > 0)//Si el modo no es 0
							//{	f0152();//Termina el conteo y oculta el display de la interfaz M
							//}
							f0015(1);//Clic o raya sobre el boton 7 [] menu
							//sos(q,7);
						};


						if (q == 8)//boton / [0] Activar el display 
						{	
							f0148(98);//MOSTRAR la interfaz de Salida M
							/* mMod = 4;
							console.log(' - - - borrar la ultima letra del display M');
							sale = sale.slice(0, -1);
							colSale();
							//output.textContent = salo;//output.textContent.slice(0, -1);
							//f0150();//APAGAR la interfaz de Salida M, el Dsiplay M y Borra todo el texto de salida actual
							*/
						};


					

						//Nota: no le tengo funciones al 5, es decir el boton 0 de la barra inclinada, el 8 esta libre por eso lo tome prestado!
						/*
						if (q == 6)//MI REVERSA FIJA 2023 IBOGOTA!!!! 	
						{
							console.log(' - - - MI REVERSA FIJA 2023 IBOGOTA!!!! ');
							f0096(1, 1, 1);//Aplicar reversa al clic(botón 6) salTO -1
						};*/
						/*if(q==6)//MI REVERSA FIJA 2023 IBOGOTA!!!! 	
						{	console.log(' - - - MI REVERSA FIJA 2023 IBOGOTA!!!! ');
							console.log('|> Flag  -> F96 ');
							f0096(1,1,1);//aplicar reversa
						};*/

						//Nota: no le tengo funciones al 5, es decir el boton 0 de la barra inclinada, el 8 esta libre por eso lo tome prestado!
					
					}
					////       --l//if (regY[q][0] == 3)
					////       --l//{	console.error('  --raya muy larga--');
					////       --l//}
					break;
				case 3://console.log('caso 3 son dos señales: regY[q]=',regY[q]); 
					//console.error('  -- dos señales');
					if ((regY[q][0] == 1) && (regY[q][2] == 1))
					{	//console.error('  -- punto punto');
						outX[q] = ' **';//PUNTO + PUNTO..

						////if (q == 6)//boton V [6] avanzar adelante un item (+1) morse 6 arrow down	
						////{	console.log(' - - - arrow down x 2! ');
						////	f0095(1);// arrow down
						////};

						if (q == 7)//boton [menu] [7] BORRAR todo el texto de salida actual
						{	console.log(' - - - boton [Menu] [7] borrar la ultima letra del display M');
							sale = sale.slice(0, -1);
							colSale();//COLOREAR los espacios del display M
								//output.textContent = salo;//output.textContent.slice(0, -1);
								//f0150();//APAGAR la interfaz de Salida M, el Dsiplay M y Borra todo el texto de salida actual
							f0145();//CONTROLAR la activación y la desacticacion temporizada del intercomunicador M; si m es true (1) indica que el sostenido viene del boton - [5] del morse o del [menu]
							//mMod = 4;
							//console.log(' - - - borrar la ultima letra del display M');
							//sale = sale.slice(0, -1);
							//colSale();
							//output.textContent = salo;//output.textContent.slice(0, -1);
							//f0150();//APAGAR la interfaz de Salida M, el Dsiplay M y Borra todo el texto de salida actual
						};

						if (q == 8)
						{	console.log(' - - - boton / [0] Apagar el intecomunicador M');
							f0148(99);//OCULTAR la interfaz de Salida M
						}
					}

					if ((regY[q][0] == 2) && (regY[q][2] == 1))
					{	outX[q] = ' -*';//RAYA + PUNTO..

						if (q == 3)//avanzar +(1*KTE) 
						{	f0148(99);//DESACTIVAR la interfaz de Salida M
							f0096(1, 1, 2);//Aplicar 5 avances al clic(botón 3) salTO5
						}

						/*
						if (q == 6)//avanzar +(1*KTE) 
						{
							f0096(1, 1, 2);//Aplicar 5 avances al clic(botón 6) salTO5
						}*/
						console.error(' aqui voy 1');
						if (q == 8)
						{	f0148(1);//MOSTRAR la interfaz de Salida M de qwerty normal
							console.error(' aqui voy 2');
						}
					}
					if ((regY[q][0] == 2) && (regY[q][2] == 2)) {
						outX[q] = ' --';//DOS RAYAS..



						if (q == 3)//regresar -(1*KTE)
						{	f0148(99);//DESACTIVAR la interfaz de Salida M
							f0096(1, 1, 3);//Aplicar -5 avances al clic(botón 3) salTO-5
						}

						/*
						if (q == 6)//regresar -(1*KTE)
						{
							f(1, 1, 3);//Aplicar -5 avances al clic(botón 6) salTO-5
						}*/

						if (q == 7)//boton [menu] [7] BORRAR todo el texto de salida actual
						{	console.log(' - - - boton [Menu] [7] borrar la ultima letra del display M');
							sale = sale.slice(0, -1);
							colSale();//COLOREAR los espacios del display M
								//output.textContent = salo;//output.textContent.slice(0, -1);
								//f0150();//APAGAR la interfaz de Salida M, el Dsiplay M y Borra todo el texto de salida actual
							f0145();//CONTROLAR la activación y la desacticacion temporizada del intercomunicador M; si m es true (1) indica que el sostenido viene del boton - [5] del morse o del [menu]
						};

						if (q == 8)
						{	f0148(99);//OCULTAR la interfaz de Salida M
						}
					}
					break;
				case 5:
						if ((regY[q][0] == 1) && (regY[q][2] == 1) && (regY[q][4] == 1)) {
						outX[q] = ' ***';//tres puntos..

						
						if (q == 3)//avanzar +(2*KTE)
						{
							f0096(1, 1, 4);//Aplicar 25 avances al clic(botón 3)
						}

						////if (q == 6)//boton V [6] avanzar adelante un item (+1) morse 6 arrow down	
						////{	console.log(' - - - arrow down x 3! ');
						////	f0095(1);// arrow down
						////};

						if (q == 7)//Reset del display M 	
						{	f0150();//BORRAR todo el texto de salida actual
							f0145();//CONTROLAR la activación y la desacticacion temporizada del intercomunicador M; si m es true (1) indica que el sostenido viene del boton - [5] del morse o del [menu]
						};

						if (q == 8)//boton [] [7]  cambio de entrada -> /morse/teclado normal/teclado gigante/señas/off/ morse 8 Espacio Morse	
						{	f0148(97);//CAMBIAR la interfaz M
							//console.log(' - - - boton / [0] Apagar el intecomunicador M');
							//f0148(99);//OCULTAR la interfaz de Salida M
						};
					}

					if ((regY[q][0] == 2) && (regY[q][2] == 1) && (regY[q][4] == 1))
					{	outX[q] = ' -**';//raya y dos puntos..

						if (q == 8)
						{	f0148(2);//MOSTRAR la interfaz de Salida M de qwerty grande
						}
					}

					if ((regY[q][0] == 2) && (regY[q][2] == 2) && (regY[q][4] == 1)) 
					{
						outX[q] = ' --*';//dos rayas punto..

						if (q == 3)//avanzar +(2*KTE)
						{
							f0096(1, 1, 4);//Aplicar 25 avances al clic(botón 3)
						}
						/*
						if (q == 6)//avanzar +(2*KTE)
						{
							f0096(1, 1, 4);//Aplicar 25 avances al clic(botón 6)
						}*/

					}
					if ((regY[q][0] == 2) && (regY[q][2] == 2) && (regY[q][4] == 2))
					{
						outX[q] = ' ---';//tres rayas..

						if (q == 3)//regresar -(2*KTE)
						{
							f0096(1, 1, 5);//Aplicar -25 avances al clic(botón 3)
						}
						/*
						if (q == 6)//regresar -(2*KTE)
						{
							f0096(1, 1, 5);//Aplicar -25 avances al clic(botón 6)
						}*/


						if (q == 7)//Reset del display M 	
						{	f0150();//BORRAR todo el texto de salida actual
							f0145();//CONTROLAR la activación y la desacticacion temporizada del intercomunicador M; si m es true (1) indica que el sostenido viene del boton - [5] del morse o del [menu]
						};

						if (q == 8)//boton [] [7]  cambio de entrada -> /morse/teclado normal/teclado gigante/señas/off/ morse 8 Espacio Morse	
						{	f0148(97);//CAMBIAR la interfaz M
							//console.log(' - - - boton / [0] Apagar el intecomunicador M');
							//f0148(99);//OCULTAR la interfaz de Salida M
						};

					}
					break;
				case 7:
					////if((regY[q][0]==1)&&(regY[q][2]==1)&&(regY[q][4]==1)&&(regY[q][6]==1))
					////{	outX[q] = ' ****';//cuatro puntos..
					////	if (q == 8)//boton / [0]  cambio de entrada -> /morse/teclado normal/teclado gigante/señas/off/ morse 8 Espacio Morse	
					////	{	console.log(' - - - rrrrr MOSTRAR la interfaz de Salida M que corresponda porque se oprimio 7 ([])!!!! ');
					////		f0148(4);//MOSTRAR la interfaz de Salida M de señas
					////	};
					////}
					/*
					if((regY[q][0]==2)&&(regY[q][2]==2)&&(regY[q][4]==2)&&(regY[q][6]==1))
					{	outX[q] = ' ---*';//tres rayas punto..
						if(q==6)//avanzar +(3*KTE)
						{	f0096(1,1,6);//Aplicar 20 avances al clic(botón 6)
						}
					}
					if((regY[q][0]==2)&&(regY[q][2]==2)&&(regY[q][4]==2)&&(regY[q][6]==2))
					{	outX[q] = ' ----';//cuatro rayas..
						if(q==6)//regresar -(3*KTE)
						{	f0096(1,1,7);//Aplicar -20 avances al clic(botón 6)
						}
					}*/
					if((regY[q][0]==2)&&(regY[q][2]==1)&&(regY[q][4]==1)&&(regY[q][6]==1))
					{	outX[q] = ' -***';//raya y tres puntos..
						if (q == 8)//boton / [0]  cambio de entrada -> /morse/teclado normal/teclado gigante/señas/off/ morse 8 Espacio Morse	
						{	console.log(' - - - rrrrr MOSTRAR la interfaz de Salida M que corresponda porque se oprimio 7 ([])!!!! ');
							f0148(3);//MOSTRAR la interfaz de Salida M qwerty gigante
						};
					}
				break;
				case 9:
					if((regY[q][0]==2)&&(regY[q][2]==1)&&(regY[q][4]==1)&&(regY[q][6]==1)&&(regY[q][8]==1))
					{	outX[q] = ' -****';//raya y cuatro puntos..
						if (q == 8)//boton / [0]  cambio de entrada -> /morse/teclado normal/teclado gigante/señas/off/ morse 8 Espacio Morse	
						{	console.log(' - - - rrrrr MOSTRAR la interfaz de Salida M que corresponda porque se oprimio 7 ([])!!!! ');
							f0148(4);//MOSTRAR la interfaz de Salida M de señas
						};
					}
				break;

			}
		}
		//console.log('esta[q]=' + esta[q]);
		console.log('outX[q]=' + outX[q] + '(señal obtenida) ');
		//+ + +		if((edit)&&(q==0)&&(esTAS)&&(limiT-cta>0))//puede ser codigo morse o señal asociada
		//+ + +		{	outW[q] = outW[q].concat(outX[q]);console.log('outW[q]=' + outW[q] +'señal acumulada');
		//+ + +			letra();
		//+ + +		}


		//nuevo se quita esto porque no se le ve utilidad e interfiere la salida outX..
		/*if((edit)&&(q==0)&&(esTAS)&&(limiT-cta>0))//puede ser codigo morse o señal asociada, cta LLEVA EL CONTEO DE LAS LETRAS DEL EDITOR
		{	outW[q] = outW[q].concat(outX[q]);console.log('outW[q]=' + outW[q] +'señal acumulada');
			letra();//muestra en pantalla el texto actualizado
		}*/

		//sale += outX[0];
		//colSale();
		//output.textContent = salo;//+= outX[0];
		//iIntM0.textContent = salo;//+= outX[0];


		}//fin del morse
	}
	ceros(q);//console.log('ceros de morse');Reinicio de variables
}

const 	kL0=[			['Tutorial de puntos y rayas',													'icon far fa-comment-dots', '', 'Utiliza las flechas de subir o bajar el cursor, al ir avanzando escucharás el símbolo del caracter donde está el cursor seguido de su señal equivalente en puntos y rayas, tomados del código Morse, '],//l0Morse..
						['Punto, punto, raya, raya, otra forma de hacer espacios es hacer rayas sobre el botón 8, del teclado inclusivo','icon',' ','Espacio entre caracteres',			'espacio'],//zGuiIn(0)
						['Punto, raya',																	'icon',		'a',	'Letra a, de Abeja',								'a'],
						['Raya, punto, punto, punto',													'icon',		'b',	'Letra b, de Bebe',									'be'],
						['Raya, punto, raya, punto',													'icon',		'c',	'Letra c, de Casa',									'ce'],
						['Raya, punto, punto',															'icon',		'd',	'Letra d, de Dado',									'de'],
						['Punto',																		'icon',		'e',	'Letra e, de Elefante',								'e'],//zGuiIn(5)
						['Punto, punto, raya, punto',													'icon',		'f',	'Letra f, de Faro',									'efe'],
						['Raya, raya, punto',															'icon',		'g',	'Letra g, de Gato',									'ge'],	
						['Punto, punto, punto, punto',													'icon',		'h',	'Letra h, de Hilo',									'ache'],
						['Punto, punto',																'icon',		'i',	'Letra i latina, de Iglesia',						'i'],
						['Punto, raya, raya, raya',														'icon',		'j',	'Letra j, de Jarra',								'jota'],//zGuiIn(10)
						['Raya, punto, raya',															'icon',		'k',	'Letra k, de Kilo',									'ka'],
						['Punto, raya, punto, punto',													'icon',		'l',	'Letra l, de Lápiz',								'ele'],	
						['Raya, raya',																	'icon',		'm',	'Letra m, de Mamá',									'emmme'],
						['Raya, punto',																	'icon',		'n',	'Letra n, de Nené',									'enne'],
						['Raya, raya, punto, raya, raya',												'icon',		'ñ',	'Letra ñ, de Ñoñeria',								'eññe'],//zGuiIn(15)
						['Raya, raya, raya',															'icon',		'o',	'Letra o, de Oso',									'o'],
						['Punto, raya, raya, punto',													'icon',		'p',	'Letra p, de Papá',									'pe'],	
						['Raya, raya, punto, raya',														'icon',		'q',	'Letra q, de Queso',								'qu'],
						['Punto, raya, punto',															'icon',		'r',	'Letra r, de Ratón',								'erre'],
						['Punto, punto, punto',															'icon',		's',	'Letra s, de Salida',								'ese'],//zGuiIn(20)
						['Raya',																		'icon',		't',	'Letra t, de Tetero',								'te'],
						['Punto, punto, raya',															'icon',		'u',	'Letra u, de Uva',									'u'],	
						['Punto, punto, punto, raya',													'icon',		'v',	'Letra v pequeña, de Vela',							'ube'],
						['Punto, raya, raya',															'icon',		'w',	'Letra w, de Whisky',								'doble be'],
						['Raya, punto, punto, raya',													'icon',		'x',	'Letra x, de Xilófono',								'equis'],//zGuiIn(25)
						['Raya, punto, raya, raya',														'icon',		'y',	'Letra y griega, de Yate',							'ye'],
						['Raya, raya, punto, punto',													'icon',		'z',	'Letra z, de Zapato',								'zeta'],	
						['Punto, raya, raya, raya, raya',												'icon',		'1',	'Número 1',											'1'],
						['Punto, punto, raya, raya, raya',												'icon',		'2',	'Número 2',											'2'],
						['Punto, punto, punto, raya, raya',												'icon',		'3',	'Número 3',											'3'],//zGuiIn(30)
						['Punto, punto, punto, punto, raya',											'icon',		'4',	'Número 4',											'4'],
						['Punto, punto, punto, punto, punto',											'icon',		'5',	'Número 5',											'5'],	
						['Raya, punto, punto, punto, punto',											'icon',		'6',	'Número 6',											'6'],
						['Raya, raya, punto, punto, punto',												'icon',		'7',	'Número 7',											'7'],
						['Raya, raya, raya, punto, punto',												'icon',		'8',	'Número 8',											'8'],//zGuiIn(35)
						['Raya, raya, raya, raya, punto',												'icon',		'9',	'Número 9',											'9'],
						['Raya, raya, raya, raya, raya',												'icon',		'0',	'Número 0',											'0'],	
						['Punto, raya, punto, raya, punto, raya',										'icon',		'.',	'Signo de un punto',								'punto'],
						['Punto, punto, raya, raya, punto, punto',										'icon',		'?',	'Signo de interrogación al terminar una pregunta',	'interrogación al terminar una pregunta'],
						['Raya, punto, punto, raya, punto',												'icon',		'/',	'Signo de barra inclinada',							'barra inclinada'],//zGuiIn(40)
						['Raya, raya, raya, punto, punto, punto',										'icon',		':',	'Signo de dos puntos',								'dos puntos'],
						['Punto, raya, raya, punto, raya, punto',										'icon',		'@',	'Signo de arroba',									'arroba']];
						//1479 - 5036(0836)


function 
	colSale() {			//COLOREAR los espacios del display M 
						//if (yaColoreado) return; // evita que se ejecute de nuevo
						//var pprrafo = document.getElementById("texto-original");
						//var texto = parrafo.textContent.trim(); // elimina espacios al inicio y final
						//var pplabras = sale.split(/\s+/); //texto.split(/\s+/); // divide por cualquier espacio en blanco
						salo = '';
						for (var i = 0; i < sale.length; i++) 
						{	var c = sale.charAt(i);
							if (c === " ") {
								salo += "<span class='cPace'>&nbsp;</span>";
							} else {
							  	salo += "<span>" + c + "</span>";
							}
						}
						iIntM0.innerHTML = salo;//
						//output.innerHTML = salo;
				}


				/*


				function colorearEspacios() {
    			if (yaColoreado) return;

    			var parrafo = document.getElementById("texto-original");
    			var texto = parrafo.textContent;
    			var resultado = "";

    			for (var i = 0; i < texto.length; i++) {
    			  var c = texto.charAt(i);
    			  if (c === " ") {
    			    resultado += "<span class='space'>&nbsp;</span>";
    			  } else {
    			    resultado += "<span>" + c + "</span>";
    			  }
    			}




				{		//if (yaColoreado) return; // evita que se ejecute de nuevo

						var pprrafo = document.getElementById("texto-original");
						//var texto = parrafo.textContent.trim(); // elimina espacios al inicio y final
						var pplabras = pprrafo.split(/\s+/); //texto.split(/\s+/); // divide por cualquier espacio en blanco
						var rrsultado = "";
				  
						for (var i = 0; i < pplabras.length; i++) {
						  rrsultado += "<span>" + pplabras[i] + "</span>";
						  if (i < pplabras.length - 1) {
							rrsultado += "<span class='cPace'>&nbsp;</span>";
						  }
						}
						pprrafo.innerHTML = rrsultado;
				}

				*/


//boton - [5] entrada morse onclick='f0145() morse 0
boT0.addEventListener('mousedown',eMb0);
boT0.addEventListener('mouseleave',eMs0);
boT0.addEventListener('mouseup',eMs0);
boT0.addEventListener('touchend',eTs0);
boT0.addEventListener('touchstart',eTb0);
fBot5.addEventListener('mousedown',eMb0);
fBot5.addEventListener('mouseleave',eMs0);
fBot5.addEventListener('mouseup',eMs0);
fBot5.addEventListener('touchend',eTs0);
fBot5.addEventListener('touchstart',eTb0);

//1479 - 5036(0836)
//boton x [1] salir o cancelar onclick='f0047(1)' morse 1
yBot1.addEventListener('mousedown', eMb1);
yBot1.addEventListener('mouseleave', eMs1);
yBot1.addEventListener('mouseup', eMs1);
yBot1.addEventListener('touchend', eTs1);
yBot1.addEventListener('touchstart', eTb1);
fBot1.addEventListener('mousedown', eMb1);
fBot1.addEventListener('mouseleave', eMs1);
fBot1.addEventListener('mouseup', eMs1);
fBot1.addEventListener('touchend', eTs1);
fBot1.addEventListener('touchstart', eTb1);

//1479 - 5036(0836)
//boton . [3] clic o enter onclick='f0096(1,1) morse 3
yBot3.addEventListener('mousedown', eMb3);
yBot3.addEventListener('mouseleave', eMs3);
yBot3.addEventListener('mouseup', eMs3);
yBot3.addEventListener('touchend', eTs3);
yBot3.addEventListener('touchstart', eTb3);
fBot3.addEventListener('mousedown', eMb3);
fBot3.addEventListener('mouseleave', eMs3);
fBot3.addEventListener('mouseup', eMs3);
fBot3.addEventListener('touchend', eTs3);
fBot3.addEventListener('touchstart', eTb3);

/*
yBot1.addEventListener('mousedown',eMb4);
yBot1.addEventListener('mouseleave',eMs4);
yBot1.addEventListener('mouseup',eMs4);
yBot1.addEventListener('touchend',eTs4);
yBot1.addEventListener('touchstart',eTb4);
*/
//1479 - 5036(0836)
//boton V [6] avanzar adelante un item (+1) morse 6
//yBot6.addEventListener('mousedown',eMb6);
//yBot6.addEventListener('mouseleave',eMs6);
//yBot6.addEventListener('mouseup',eMs6);
//yBot6.addEventListener('touchend',eTs6);
//yBot6.addEventListener('touchstart',eTb6);
//fBot6.addEventListener('mousedown',eMb6);
//fBot6.addEventListener('mouseleave',eMs6);
//fBot6.addEventListener('mouseup',eMs6);
//fBot6.addEventListener('touchend',eTs6);
//fBot6.addEventListener('touchstart',eTb6);


//boton [] [7] menu onclick='f0015(1)' morse 7
yBot7.addEventListener('mousedown', eMb7);
yBot7.addEventListener('mouseleave', eMs7);
yBot7.addEventListener('mouseup', eMs7);
yBot7.addEventListener('touchend', eTs7);
yBot7.addEventListener('touchstart', eTb7);
fBot7.addEventListener('mousedown', eMb7);
fBot7.addEventListener('mouseleave', eMs7);
fBot7.addEventListener('mouseup', eMs7);
fBot7.addEventListener('touchend', eTs7);
fBot7.addEventListener('touchstart', eTb7);



//1479 - 5036(0836)
//boton / [0] cambio de entrada -> /morse/teclado normal/teclado gigante/señas/off/ morse 8  --l5814  
yBoto.addEventListener('mousedown',eMb8);
yBoto.addEventListener('mouseleave',eMs8);
yBoto.addEventListener('mouseup',eMs8);
yBoto.addEventListener('touchend',eTs8);
yBoto.addEventListener('touchstart',eTb8);
fBot0.addEventListener('mousedown',eMb8);
fBot0.addEventListener('mouseleave',eMs8);
fBot0.addEventListener('mouseup',eMs8);
fBot0.addEventListener('touchend',eTs8);
fBot0.addEventListener('touchstart',eTb8);
//document.addEventListener('keydown', eKb);
//document.addEventListener('keyup', eKs);




//============================================================
//d9000 EVENTOS TRANSVERSALES
//window.addEventListener('hashchange',f0141);

document.oncontextmenu = new Function("return false;");//HABILITAR/deshabilitar esta linea para Deshabilitar clic derecho:: https://www.techiedelight.com/es/disabling-text-selection-cut-copy-right-click/
document.addEventListener('keydown', f0098);
document.addEventListener('keyup', f0100);
//f0139();//CARGAR el anuncio vacio en r003
//f0140();//CARGAR anuncios en r003


///Off temporal:
//window.addEventListener('hashchange', f0155);//Cada vez que la URL cambia de fragmento (#), se dispara el evento hashchange



document.onload = f0000();//PREPARAR ambiente en 0-blanco, 1-desarrollo o 2-producción (SI ya cargo el documento)