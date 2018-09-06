soggettoList = ["Io", "Tu", "Lui", "Lei", "Noi", "Voi", "Loro"];
// ["", "", "", "", "", ""],
verboList = [
    ["abito", "abiti", "abita", "abitiamo", "abitate", "abitano"],
    ["accendo", "accendi", "accende", "accendiamo", "accendete", "accendono"],
    ["aiuto", "aiuti", "aiuta", "aiutiamo", "aiutate", "aiutano"],
    ["amo", "ami", "ama", "amiamo", "amate", "amano"],
    ["vado", "vai", "va", "andiamo", "andate", "vanno"],
    ["apro", "apri", "apre", "apriamo", "aprite", "aprono"],
    ["arrivo", "arrivi", "arriva", "arriviamo", "arrivate", "arrivano"],
    ["ascolto", "ascolti", "ascolta", "ascoltiamo", "ascoltate", "ascoltano"],
    ["aspetto", "aspetti", "aspetta", "aspettiamo", "aspettate", "aspettano"],
    ["bacio", "baci", "bacia", "baciamo", "baciate", "baciano"],
    ["ballo", "balli", "balla", "balliamo", "ballate", "ballano"],
    ["sono", "sei", "è", "siamo", "siete", "sono"],
    ["ho", "hai", "ha", "abbiamo", "avete", "hanno"],
    ["mangio", "mangi", "mangia", "mangiamo", "mangiate", "mangiano"],
    ["dormo", "dormi", "dorme", "dormiamo", "dormite", "dormono"],
    ["leggo", "leggi", "legge", "leggiamo", "leggete", "leggono"],
    ["seguo", "segui", "segue", "seguiamo", "seguite", "seguono"],
    ["bevo", "bevi", "beve", "beviamo", "bevete", "bevono"],
];

nomeList = ["Zenone", "Zeno", "Vladimiro", "Vittorio", "Vito", "Virgilio", "Vinicio", "Vincenzo", "Valter", "Valerio", "Valentino", "Umberto", "Ulisse", "Ugo", "Ubaldo", "Tullio", "Torquato", "Tommaso", "Tolomeo", "Tobia", "Tiziano", "Tito", "Tino", "Timoteo", "Tiberio", "Teseo", "Teodoro", "Teo", "Stefano", "Simone", "Silvio", "Silvestro", "Silvano", "Sergio", "Serafino", "Sebastiano", "Saverio", "Sandro", "Samuele", "Salvo", "Salvatore", "Ruggero", "Rosario", "Romolo", "Romeo", "Romano", "Rodrigo", "Rodolfo", "Rocco", "Roberto", "Rinaldo", "Riccardo", "Renzo", "Renato", "Remo", "Remigio", "Remedio", "Raniero", "Ranieri", "Raimondo", "Raffaello", "Raffaele", "Priamo", "Ponzio", "Pompeo", "Plinio", "Placido", "Pio", "Pietropaolo", "Pietro", "Pietrantonio", "Pietrangelo", "Piersilvio", "Piersandro", "Pierpasquale", "Pierpaolo", "Piero", "Piermauro", "Piermatteo", "Piermario", "Piermaria", "Piermarco", "Pierluigi", "Pierluca", "Pierlorenzo", "Panfilo", "Piergiovanni", "Piergiorgio", "Piergaetano", "Pierfranco", "Pierfrancesco", "Palmiro", "Pierdomenico", "Pierdavide", "Piercarlo", "Pierbattista", "Pierantonio", "Pierangelo", "Pierandrea", "Pieramedeo", "Peppe", "Pellegrino", "Peleo", "Peano", "Patrizio", "Pasqualino", "Pasquale", "Paride", "Paolo", "Paolino", "Ovidio", "Ottavio", "Ottaviano", "Otello", "Osvaldo", "Oscar", "Oronzo", "Orlando", "Orio", "Oricolo", "Orazio", "Onorio", "Onorato", "Onofrio", "Omero", "Omar", "Olmo", "Oliviero", "Olindo", "Odorico", "Oddone", "Oddo", "Nunzio", "Novilio", "Novenio", "Noè", "Nino", "Nicolò", "Nicolas", "Nicola", "Nico", "Niccolò", "Nestore", "Nerio", "Nereo", "Nello", "Nazzareno", "Nazario", "Natale", "Narciso", "Nando", "Naldo", "Muzio", "Mosè", "Moreno", "Modesto", "Misaele", "Miro", "Mirko", "Mino", "Milo", "Migdonio", "Michele", "Michelangelo", "Metodio", "Merulo", "Melezio", "Melchiorre", "Mederico", "Mauro", "Maurizio", "Maurilio", "Mattia", "Matteomaria", "Matteo", "Massimo", "Massimimo", "Massimiliano", "Marzio", "Marziano", "Martino", "Mario", "Marino", "Mariano", "Marco", "Marciano", "Marcello", "Marcellino", "Marcaurelio", "Marcantonio", "Manuele", "Manuel", "Manolo", "Manlio", "Manilio", "Manfredo", "Malco", "Maino", "Maffeo", "Luigino", "Luigi", "Ludovico", "Lucrezio", "Lucio", "Luciano", "Luchino", "Luca", "Loris", "Lorenzo", "Livio", "Lionello", "Lio", "Lino", "Lidio", "Licio", "Libero", "Leto", "Leopoldo", "Leonio", "Leone", "Leonardo", "Leo", "Lelio", "Leandro", "Lazzaro", "Lanfranco", "Lamberto", "Jonathan", "Jacopo", "Ivo", "Ivio", "Ivano", "Ivan", "Iuri", "Isidoro", "Isaia", "Isacco", "Ireneo", "Ippolito", "Iorio", "Innocenzo", "Innocente", "Indro", "Imerio", "Ilarione", "Ilario", "Ignazio", "Igino", "Iginio", "Icio", "Icilio", "Gustavo", "Guidobaldo", "Guido", "Guidernesto", "Guidermanno", "Gaio", "Guidalfredo", "Guidalberto", "Guglielmo", "Guelfo", "Gualtiero", "Gregorio", "Graziano", "Goffredo", "Glicerio", "Glauco", "Giusto", "Giuseppe", "Giulio", "Giuliano", "Gisleno", "Girolamo", "Giovannino", "Giovanni", "Giovanmaria", "Giovanbattista", "Gabriele", "Giosuè", "Giorgio", "Giorgino", "Giordano", "Giona", "Gioele", "Giobbe", "Gioacchino", "Gino", "Gildo", "Gilberto", "Gianvito", "Gianugo", "Giansilvio", "Giansandro", "Gianrico", "Gianpietro", "Gianpiero", "Gianpasquale", "Gianpaolo", "Giano", "Gianni", "Gianmauro", "Gianmatteo", "Gianmario", "Gianmaria", "Gianmarco", "Gianluigi", "Gianluca", "Galileo", "Giangaleazzo", "Giangaetano", "Gianfranco", "Gianfrancesco", "Giandomenico", "Giandavide", "Giancarmine", "Giancarlo", "Galeazzo", "Gianantonio", "Gianandrea", "Giampietro", "Giammauro", "Giammario", "Giammaria", "Giammarco", "Giambruno", "Gaetano", "Giairo", "Giacomo", "Giacomino", "Giacobbe", "Giacinto", "Getulio", "Gesù", "Gervasio", "Germano", "Geremia", "Gerardo", "Gennaro", "Genesio", "Gelasio", "Gedeone", "Gavino", "Gaudenzio", "Gastone", "Gaspare", "Gandolfo", "Furio", "Fulvio", "Fulgenzio", "Fulberto", "Franco", "Francesco", "Fosco", "Fortunato", "Folco", "Flavio", "Flaviano", "Flaminio", "Fiorenzo", "Fiorello", "Fiore", "Filoteo", "Filippo", "Filiberto", "Fidenzio", "Ferruccio", "Fernando", "Fermo", "Ferdinando", "Feliciano", "Felice", "Fedro", "Federico", "Fedele", "Fausto", "Faustino", "Fabrizio", "Fabio", "Fabiano", "Ezio", "Ezechiele", "Evaristo", "Evaldo", "Eustachio", "Eusebio", "Eugenio", "Eudoro", "Eudemo", "Ettore", "Erveo", "Eros", "Ernesto", "Erminio", "Ermes", "Ermenegildo", "Ermanno", "Eric", "Eriberto", "Ercole", "Ercolano", "Erberto", "Erasmo", "Eraldo", "Enzo", "Enrico", "Ennio", "Eneo", "Emilio", "Emiliano", "Emidio", "Emanuele", "Elvio", "Elviano", "Elpidio", "Eliseo", "Elio", "Eligio", "Elia", "Eleano", "Egisto", "Egidio", "Egberto", "Efisio", "Edoardo", "Edmondo", "Edgardo", "Eberardo", "Durante", "Duilio", "Donato", "Donatello", "Domizio", "Domiziano", "Domenico", "Dionisio", "Diomede", "Dino", "Diletto", "Diego", "Didimo", "Desiderio", "Dennis", "Denis", "Demo", "Demetrio", "Delfino", "Decimo", "Davide", "Dario", "Dante", "Danilo", "Daniele", "Daniel", "Damiano", "Cuniberto", "Cristoforo", "Cristo", "Cristino", "Cristiano", "Cristian", "Crisante", "Creziano", "Crescenzo", "Crescentino", "Crescente", "Costantino", "Corrado", "Cornelio", "Corebo", "Concetto", "Colmano", "Clodio", "Cleto", "Clementino", "Clemente", "Claudio", "Claudiano", "Ciro", "Cirillo", "Cipriano", "Cesidio", "Cesarino", "Cesare", "Celso", "Celio", "Celestino", "Celeste", "Cecilio", "Caterino", "Cassio", "Casimiro", "Carmine", "Carmelo", "Carlo", "Canzio", "Candido", "Camillo", "Calogero", "Callisto", "Caio", "Cafiero", "Bruno", "Brizio", "Bonifacio", "Boiardo", "Boezio", "Biblide", "Biagio", "Bettino", "Bertoldo", "Bernardo", "Berardo", "Benvenuto", "Benigno", "Beniamino", "Benedetto", "Bellino", "Beano", "Battista", "Bastiano", "Basilio", "Bartolomeo", "Bartolo", "Barsimeo", "Barnaba", "Baldovino", "Baldo", "Baldassarre", "Bachisio", "Azzurro", "Aurelio", "Augusto", "Attilio", "Attila", "Atanasio", "Astolfo", "Ascanio", "Arturo", "Arsenio", "Arsace", "Arrigo", "Aronzio", "Aroldo", "Arnoldo", "Arnaldo", "Armido", "Armando", "Aristotele", "Aristodemo", "Aristide", "Ariosto", "Ariberto", "Arezio", "Arduino", "Ardito", "Arcibaldo", "Archimede", "Arcangelo", "Apollinare", "Antonmatteo", "Antonmaria", "Antoniomaria", "Antonio", "Antonino", "Antongiulio", "Antonello", "Antonangelo", "Antioco", "Antimo", "Antenore", "Anselmo", "Ansano", "Ansaldo", "Annunziato", "Annibale", "Aniceto", "Angelo", "Angelino", "Angelico", "Andrea", "Anatolio", "Anastasio", "Anacleto", "Amparo", "Amos", "Amore", "Amone", "Amleto", "Amintore", "Amilcare", "Amerigo", "Amelio", "Amedeo", "Ambrogiotto", "Ambrogio", "Amato", "Amaranto", "Amanzio", "Amalio", "Amabile", "Alvise", "Alvaro", "Altero", "Almiro", "Alighiero", "Alfredo", "Alfonso", "Alfio", "Alfiero", "Alessio", "Alessandro", "Aleramo", "Aleardo", "Aldobrando", "Aldo", "Alderico", "Alcide", "Alceo", "Alberto", "Alberico", "Albano", "Alarico", "Aladino", "Aimone", "Aidano", "Aiace", "Agostino", "Agenore", "Agapito", "Adriele", "Adriano", "Adrasto", "Adorato", "Adone", "Adolfo", "Ado", "Adino", "Adeodato", "Ademaro", "Adelmo", "Adelfo", "Adelardo", "Adamo", "Adamino", "Adalrico", "Adalgiso", "Adalfredo", "Adalberto", "Acuzio", "Acilio", "Achille", "Acacio", "Abramo", "Abilio", "Abenzio", "Abele", "Abbondio", "Abbondanzio", "Abaco", "Zora", "Zoia", "Zoe", "Zita", "Zina", "Zelmira", "Zara", "Viviana", "Vittoria", "Virginia", "Violetta", "Viola", "Vincenza", "Vilma", "Veturia", "Veronica", "Veridiana", "Verdiana", "Vera", "Venera", "Velia", "Vanna", "Vania", "Vanessa", "Vanda", "Valeria", "Valentina", "Ursula", "Ubalda", "Tullia", "Trofimena", "Tosca", "Tommasina", "Tiziana", "Titina", "Tina", "Tilde", "Tiberia", "Tessa", "Teresa", "Teodora", "Tecla", "Tea", "Tara", "Tania", "Tamara", "Tabita", "Sveva", "Susanna", "Stella", "Stefania", "Sonia", "Solidea", "Sofia", "Smeralda", "Siria", "Sira", "Simonetta", "Simona", "Silvia", "Silvana", "Sibilla", "Severina", "Severa", "Serenella", "Serena", "Serafina", "Senia", "Selvaggia", "Sebastiana", "Scolastica", "Scilla", "Sara", "Santina", "Santa", "Sandra", "Samuela", "Samantha", "Sabrina", "Sabina", "Rubina", "Rossella", "Rossana", "Rosetta", "Rosanna", "Rosangela", "Rosamaria", "Rosalia", "Rosalba", "Rosachiara", "Rosa", "Romina", "Romilda", "Romea", "Romana", "Roberta", "Ritanna", "Rina", "Riccangela", "Rica", "Renata", "Regina", "Rebecca", "Rea", "Ramona", "Raimonda", "Raffaella", "Radegonda", "Rachele", "Prisca", "Prassede", "Porzia", "Pompea", "Polissena", "Piera", "Pia", "Perpetua", "Penelope", "Patty", "Patrizia", "Pasqualina", "Paolina", "Paola", "Pamela", "Palmira", "Ottavia", "Osvalda", "Osanna", "Ortensia", "Orsola", "Ornella", "Orietta", "Oriana", "Oria", "Onorina", "Onoria", "Onorata", "Onofria", "Olinda", "Olimpia", "Olga", "Ofelia", "Nuccia", "Norma", "Nora", "Noemi", "Nina", "Nilla", "Nilde", "Nila", "Nicoletta", "Nicole", "Nica", "Nerina", "Nedda", "Nazaria", "Natascia", "Natalina", "Natalia", "Nadia", "Morena", "Monica", "Monegonda", "Modesta", "Miriam", "Mirella", "Miranda", "Mira", "Mina", "Milvia", "Milena", "Michelangela", "Michela", "Micaela", "Messalina", "Merina", "Melissa", "Melania", "Medea", "Matrona", "Matilde", "Marzia", "Mary", "Martina", "Marta", "Maristella", "Marisa", "Marinella", "Marina", "Marilena", "Marilda", "Marika", "Mariella", "Mariaurora", "Mariastella", "Mariarosa", "Marianna", "Mariangela", "Marialuisa", "Marialaura", "Mariachiara", "Maria", "Margherita", "Marfisa", "Mareta", "Marcolfa", "Mara", "Mamelta", "Malvina", "Magda", "Mafalda", "Madruina", "Maddalena", "Macra", "Luisella", "Luisanna", "Luisa", "Luigia", "Ludovica", "Ludmilla", "Lucrezia", "Lucilla", "Luciana", "Lucia", "Luana", "Loretta", "Lorenza", "Lorena", "Loredana", "Lora", "Livia", "Lisanna", "Lisa", "Lina", "Lilia", "Lidia", "Licia", "Libera", "Lia", "Letizia", "Leopolda", "Leonida", "Leonarda", "Lena", "Leila", "Leda", "Lea", "Lavinia", "Laura", "Larissa", "Lara", "Laila", "Jessica", "Ivia", "Iva", "Isotta", "Isaura", "Isa", "Irma", "Irene", "Iona", "Iole", "Iolanda", "Ines", "Immacolata", "Imma", "Imelda", "Ilenia", "Ileana", "Ildegonda", "Ilde", "Ilaria", "Igina", "Ifigenia", "Idia", "Idanna", "Idalia", "Idalba", "Ida", "Iana", "Gunilde", "Guia", "Guglielmina", "Guendalina", "Grimilde", "Greta", "Graziella", "Graziana", "Grazia", "Gloria", "Giustina", "Giuseppina", "Giulietta", "Giulia", "Giuditta", "Gisella", "Giovanna", "Giorgina", "Giorgia", "Giordana", "Gioia", "Gioconda", "Ginevra", "Gina", "Gilda", "Gilberta", "Giannunzia", "Giannita", "Giannica", "Giada", "Giacinta", "Gervasia", "Germana", "Gerarda", "Genoveffa", "Gennarina", "Gemma", "Geltrude", "Gavina", "Gaspara", "Gardenia", "Gandolfa", "Galilea", "Gaia", "Gaetana", "Gabriela", "Fulvia", "Fulgenzia", "Frida", "Francesca", "Franca", "Fosca", "Fortunata", "Florisa", "Floriana", "Floranna", "Floraleda", "Floralba", "Flora", "Flavia", "Flaminia", "Fiormaria", "Fiorisa", "Fiorenza", "Fiorella", "Fiore", "Fioranna", "Fiorangela", "Fioralda", "Fioralba", "Filomena", "Filippa", "Fiammetta", "Fiamma", "Ferdinanda", "Fenisia", "Felicita", "Felicia", "Fedra", "Fedora", "Federica", "Febronia", "Febe", "Fausta", "Fara", "Fabrizia", "Fabiola", "Fabiana", "Fabia", "Ezia", "Evia", "Evelina", "Eva", "Euterpe", "Eusebia", "Eurosia", "Eunice", "Eulalia", "Eugenia", "Eudossia", "Ester", "Esperia", "Esmeralda", "Esia", "Ersilia", "Ernesta", "Erminia", "Ermenegilda", "Ermelinda", "Erina", "Erica", "Ercolina", "Era", "Enza", "Enrica", "Emma", "Emilia", "Emerenziana", "Emanuela", "Elvira", "Elvia", "Elvezia", "Elma", "Elisea", "Elisabetta", "Elisa", "Eligia", "Elga", "Elfrida", "Elettra", "Eletta", "Eleonora", "Elena", "Elda", "Eglantina", "Egista", "Egidia", "Efesia", "Edvige", "Edoarda", "Edera", "Edda", "Ebe", "Duilia", "Drusiana", "Dorotea", "Doris", "Doralice", "Dora", "Donatella", "Donata", "Domenica", "Diomira", "Dina", "Diletta", "Diana", "Desolina", "Desideria", "Denise", "Demetria", "Demetra", "Delia", "Delfina", "Debora", "Daria", "Danila", "Daniela", "Dana", "Damiana", "Dalila", "Dalia", "Dafne", "Cristina", "Cristiana", "Costanza", "Cornelia", "Cordelia", "Cora", "Consolata", "Concettina", "Concetta", "Clotilde", "Clorinda", "Cloe", "Clementina", "Clelia", "Claudia", "Clarabella", "Cinzia", "Chiara", "Chantal", "Cesira", "Cesarina", "Cenerina", "Celina", "Celia", "Cecilia", "Caterina", "Cassia", "Casimira", "Carmen", "Carmela", "Carla", "Candida", "Camilla", "Cabiria", "Brunilde", "Brunilda", "Bruna", "Brigida", "Bona", "Blandina", "Bibiana", "Bianca", "Bettina", "Betta", "Bertrada", "Bernarda", "Berenice", "Benina", "Benilde", "Beniamina", "Benedetta", "Bellina", "Belinda", "Belina", "Belilde", "Beatrice", "Bea", "Battistina", "Batilde", "Basilia", "Bartolomea", "Barbara", "Balbina", "Azzurra", "Ava", "Aurora", "Aurelia", "Aura", "Augusta", "Attilia", "Astrid", "Assunta", "Aspasia", "Asia", "Artemisia", "Arnalda", "Armida", "Armanda", "Arianna", "Arabella", "Antonia", "Antonella", "Annunziata", "Annetta", "Annarosa", "Annarita", "Annapaola", "Annamaria", "Annaluisa", "Annalisa", "Annalia", "Annachiara", "Annabella", "Anna", "Anita", "Angelina", "Angelica", "Angela", "Andreina", "Anastasia", "Amina", "Amelia", "Amedea", "Ambrosia", "Ambrogia", "Ambra", "Amata", "Amaranta", "Amanda", "Amalia", "Altrice", "Altea", "Alma", "Allegra", "Alida", "Alice", "Alfreda", "Alfonsa", "Alfia", "Alessia", "Alessandra", "Alda", "Alcina", "Alceste", "Albina", "Alberta", "Alberica", "Albarosa", "Alba", "Aida", "Agrippina", "Agostina", "Agnese", "Aglaia", "Agea", "Agata", "Agape", "Adriana", "Adorata", "Adina", "Adelma", "Adelinda", "Adelina", "Adelia", "Adele", "Adelasia", "Adelaide", "Addolorata", "Adalberta", "Ada"];
animaleList = ["Airone", "Albatro", "Alce", "Alligatore", "Allocco", "Allodola", "Alpaca", "Anaconda", "Anatra", "Anguilla", "Antilope", "Ape", "Aquila", "Aragosta", "Armadillo", "Arpia", "Asino", "Astice", "Avvoltoio", "Babbuino", "Balena", "Balenottera", "Barbagianni", "Barracuda", "Beccaccia", "Beluga", "Bertuccia", "Biacco", "Biscia", "Bisonte", "Blatta", "Boa", "Bonobo", "Bradipo", "Bruco", "Bucero", "Bue", "Bufalo", "Caimano", "Calabrone", "Calamaro", "Camaleonte", "Cammello", "Camoscio", "Canarino", "Cane", "Canguro", "Capibara", "Capodoglio", "Capra", "Capriolo", "Cardellino", "Caribù", "Carpa", "Castoro", "Cavalletta", "Cavallo", "Cernia", "Cervo", "Chiocciola", "Cicala", "Cicogna", "Cigno", "Cinciallegra", "Cinghiale", "Civetta", "Cobra", "Coccinella", "Coccodrillo", "Coguaro", "Coleotteri", "Colibrì", "Colomba", "Colubro", "Condor", "Coniglio", "Cormorano", "Cornacchia", "Corvo", "Coyote", "Criceto", "Cuculo", "Daino", "Danio", "Delfino", "Dentice", "Donnola", "Dromedario", "Dugongo", "Elefante", "Ermellino", "Facocero", "Fagiano", "Faina", "Falco", "Faraona", "Farfalla", "Fenicottero", "Foca", "Forbicina", "Formica", "Formichiere", "Fringuello", "Furetto", "Gabbiano", "Gallina", "Gallo", "Gamberetto", "Gatto", "Gattopardo", "Gazza", "Gazzella", "Geco", "Ghepardo", "Ghiandaia", "Ghiottone", "Ghiro", "Giaguaro", "Gibbone", "Gipeto", "Giraffa", "Gorilla", "Granchio", "Grifone", "Grillo", "Grizzly", "Gru", "Gufo", "Halibut", "Ibis", "Iena", "Iguana", "Impala", "Ippopotamo", "Istrice", "Kiwi", "Koala", "Kookaburra", "Lama", "Lamantino", "Larva", "Lemure", "Leone", "Leopardo", "Lepre", "Libellula", "Lince", "Locusta", "Lombrico", "Lontra", "Luccio", "Lucciola", "Lucertola", "Lumaca", "Lupo", "Macaco", "Maiale", "Mamba", "Mammuth", "Mandrillo", "Mangusta", "Mantide", "Marabù", "Marmotta", "Martora", "Medusa", "Merlo", "Merluzzo", "Moffetta", "Mosca", "Mucca", "Muflone", "Mulo", "Murena", "Narvalo", "Nasello", "Nibbio", "Nottola", "Nutria", "Oca", "Opossum", "Orango", "Orata", "Orbettino", "Orca", "Ornitorinco", "Orso", "Ostrica", "Otaria", "Paguro", "Panda", "Pantera", "Papera", "Pappagallo", "Passero", "Pavone", "Pecora", "Pellicano", "Pernice", "Pesce", "Pettirosso", "Picchio", "Piccione", "Pidocchio", "Pinguino", "Pipistrello", "Piragna", "Pitone", "Poiana", "Pollo", "Polpo", "Porcospino", "Procione", "Pulce", "Puma", "Puzzola", "Quaglia", "Quokka", "Raganella", "Ragno", "Ramarro", "Rana", "Ratto", "Renna", "Riccio", "Rinoceronte", "Rondine", "Rospo", "Salamandra", "Salmone", "Scarabeo", "Scarafaggio", "Sciacallo", "Scimmia", "Scimpanzé", "Scoiattolo", "Scorpione", "Seppia", "Serpente", "Sogliola", "Squalo", "Stambecco", "Storione", "Storno", "Struzzo", "Suricato", "Tacchino", "Talpa", "Tapiro", "Tarantola", "Tartaruga", "Tasso", "Termiti", "Testuggine", "Tigre", "Tinca", "Tonno", "Topo", "Toporagno", "Tordo", "Toro", "Tortora", "Tricheco", "Tritone", "Trota", "Tucano", "Upupa", "Usignolo", "Varano", "Verme", "Vespa", "Vipera", "Visone", "Vitello", "Volpe", "Vombato", "Vongola", "Yak", "Zanzara", "Zebra", "Zecca", "Zibellino", "Zibetto"];
aggettivoList = ["suo", "questo", "tutto", "quello", "altro", "primo", "mio", "grande", "nuovo", "stesso", "ogni", "nostro", "qualche", "ultimo", "alcuno", "piccolo", "molto", "vero", "bello", "proprio", "italiano", "buono", "poco", "diverso", "certo", "tanto", "politico", "secondo", "lungo", "solo", "pubblico", "scorso", "ex", "possibile", "alto", "vecchio", "unico", "maggiore", "importante", "tuo", "giovane", "difficile", "prossimo", "forte", "mezzo", "americano", "pieno", "nessuno", "economico", "migliore", "tale", "nero", "pronto", "bianco", "che", "sociale", "europeo", "facile", "giusto", "chiaro", "necessario", "terzo", "semplice", "libero", "vario", "generale", "internazionale", "nazionale", "antico", "intero", "francese", "grave", "sicuro", "aperto", "umano", "rosso", "comune", "duro", "quale", "simile", "vostro", "elettorale", "presente", "famoso", "noto", "breve", "storico", "lontano", "naturale", "ricco", "particolare", "grosso", "attuale", "basso", "qualsiasi", "romano", "speciale", "privato", "felice", "povero", "strano", "straordinario", "capace", "vicino", "principale", "caro", "profondo", "inglese", "tedesco", "personale", "numeroso", "reale", "locale", "mondiale", "bravo", "interno", "culturale", "chiuso", "massimo", "tecnico", "caldo", "televisivo", "centrale", "moderno", "superiore", "convinto", "quanto", "civile", "femminile", "impossibile", "preciso", "normale", "perfetto", "troppo", "medio", "verde", "ufficiale", "positivo", "utile", "militare", "solito", "sportivo", "popolare", "precedente", "milanese", "comunale", "vivo", "serio", "pesante", "tranquillo", "finanziario", "ottimo", "recente", "scientifico", "successivo", "assoluto", "stretto", "inutile", "brutto", "sessuale", "pericoloso", "classico", "doppio", "futuro", "segreto", "fisico", "interessante", "prezioso", "tradizionale", "ampio", "diretto", "freddo", "terribile", "dolce", "fondamentale", "leggero", "cattivo", "estremo", "enorme", "socialista", "musicale", "eventuale", "minore", "negativo", "quarto", "continuo", "relativo", "attento", "regionale", "straniero", "commerciale", "delicato", "puro", "industriale", "fermo", "finale", "minimo", "esterno", "violento", "morale", "impegnato", "professionale", "drammatico", "artistico", "disponibile", "totale", "azzurro", "celebre", "largo", "familiare", "russo", "cosiddetto", "adatto", "disposto", "fresco", "pari", "privo", "religioso", "completo", "blu", "intenso", "misterioso", "urbano", "evidente", "complesso", "incredibile", "quotidiano", "secco", "singolo", "cattolico", "fiscale", "qualunque", "contrario", "falso", "raro", "inferiore", "legato", "autentico", "elegante", "niente", "splendido", "seduto", "definitivo", "sufficiente", "nudo", "originale", "rapido", "concreto", "ideale", "indispensabile", "potente", "immediato", "attivo", "democratico", "giudiziario", "istituzionale", "ulteriore", "veloce", "contento"];
fruttaList = ["Albicocca", "Alkekengi", "Amarena", "Ananas", "Anguria", "Arancia", "Avocado", "Banana", "Bergamotto", "Caco", "Cappero", "Carrube", "Castagna", "Cedro", "Chinotto", "Ciliegia", "Clementina", "Cocco", "Cocomero", "Corbezzolo", "Corniolo", "Cotogno", "Dattero", "Durian", "Fico", "Fiorone", "Fragola", "mela", "Gelso", "Ghianda", "Giuggiola", "Guaranà", "Kiwi", "Lampone", "Lime", "Limone", "Litchy", "Mandarancio", "Mandarino", "Mango", "Mela", "Melograno", "Melone", "Mirtillo", "Mora", "Nespola", "Nettarina", "Nocciola", "Noce", "Oliva", "Papaya", "Pera", "Pesca", "Pomelo", "Pompelmo", "Prugna", "Ribes", "Sorbo", "Susina", "Tamarindo", "Uva", "Vaniglia", "Zucca", "Zucchina"];
avverbioList = ["spesso", "bene", "male", "poco", "molto", "meno", "tanto", "qui", "là", "fuori", "sotto", "prima", "poi", "ora", "subito", "forse", "sicuramente", "dove", "quando", "come", "perché", "ecco"];
fioreList = ["Azalea", "Anemone", "Alloro", "Altea", "Begonia", "Biancospino", "Bucaneve", "Camelia", "Ciclamino", "Crisantemo", "Calendula", "Campanula", "Dalia", "Edera", "Fiordaliso", "Garofano", "Giacinto", "Giglio", "Girasole", "Gelsomino", "Geranio", "Gardenia", "Ginestra", "Genziana", "Gladiolo", "Iris", "Ibisco", "Lavanda", "Loto", "Margherita", "Magnolia", "Mimosa", "Mughetto", "Ninfea", "Narciso", "Orchidea", "Ortensia", "Primula", "Petunia", "Rosa", "Tulipano", "Viola", "Violetta", "Zinnia"];
dolceList = ["Babà", "BananaSplit", "Bignè", "Biscotti", "Bombolone", "Brioche", "Budino", "Cannoli", "Cappuccino", "Caramelle", "Cassata", "siciliana", "Chiacchere", "Ciambelle", "Cioccolatini", "Cioccolata", "Colomba", "Confetti", "Crema", "Crèpe", "Croissant", "Crostata", "Frappè", "Frittelle", "Gelato", "Ghiaccioli", "Gianduiotti", "Granita", "Krapfen", "Leccalecca", "Macaron", "Marmellata", "MarronGlacé", "Marshmallow", "Marzapane", "Miele", "Millefoglie", "Muffin", "Mousse", "Pandoro", "Panettone", "Pancake", "PannaCotta", "Pasticcini", "Profiterole", "Sfogliatella", "Sorbetto", "Strudel", "Tiramisù", "Torrone", "Uovo", "di", "Pasqua", "Zabaione", "ZuccheroFilato", "ZuppaInglese"];
pietraList = ["Acquamarina", "Ametista", "Corallo", "Diamante", "Lapislazzulo", "Onice", "Opale", "Ossidiana", "Perla", "Quarzo", "Rubino", "Smeraldo", "Topazio", "Tormalina", "Turchese", "Zaffiro", "Zircone"];
emozioneList = ["Abbandonato", "Accettato", "Alienato", "Allegro", "Annoiato", "Ansioso", "Arrabbiato", "Confuso", "Contento", "Coraggioso", "Costernato", "Deluso", "Depresso", "Desideroso", "Devastato", "Disperato", "Distrutto", "Divertito", "Eccitato", "Energico", "Escluso", "Estasiato", "Fiducioso", "Frustrato", "Furioso", "Geloso", "Gioioso", "Ignorato", "Imbarazzato", "Impaurito", "Impotente", "Inadatto", "Incuriosito", "Inferiore", "Infuriato", "Insicuro", "Insignificante", "Interessato", "Intimorito", "Irritato", "Ispirato", "Libero", "Malinconico", "Orgoglioso", "Ottimista", "Perplesso", "Potente", "Preoccupato", "Respinto", "Risentito", "Rispettato", "Scettico", "Scioccato", "Seccato", "Sensibile", "Sereno", "Soddisfatto", "Sospettoso", "Sottomesso", "Spaventato", "Spensierato", "Speranzoso", "Stupito", "Terrorizzato", "Tranquillo", "Triste", "Umiliato", "Vergognoso", "Vittimizzato", "Vulnerabile", "Vuoto"];
strumentoList = ["Armonica", "Arpa", "Balalaica", "Banjo", "Basso", "Batteria", "Bongo", "Campana", "Campanaccio", "Cetra", "Chitarra", "Clarinetto", "Clavicembalo", "Contrabbasso", "Cornamusa", "Corno", "Djembe", "Fagotto", "Fisarmonica", "Flauto", "Gong", "Grancassa", "Lira", "Liuto", "Mandolino", "Maracas", "Marimba", "Metallofono", "Nacchere", "Oboe", "Organo", "Pianoforte", "Pianola", "Piatto", "Sax", "Tamburello", "Tamburo", "Timpano", "Triangolo", "Tromba", "Trombone", "Tuba", "Violino", "Violoncello", "Xilofono", "Zampogna", "Zufolo"];
specialiList = ["|","!","+","-","*","/",",",".","_","#","[","]","(",")"];

function UcFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function tira(max) {
    return Math.floor(Math.random() * max);
}

function scegli(arr) {
    return arr[tira(arr.length)];
}

function rimuovi(arr, elemento) {
    return arr.filter(e => e !== elemento);
}

function makeUsername() {
    let componenti = [];

    // Controlla da form le tipologie da tenere e da eliminare
    //let tipologie = ["Animale", "Aggettivo", "Numero", "Nome", "Verbo", "Avverbio", "Fiore", "Frutta", "Dolce", "Pietra", "Emozione", "Strumento"];
    let tipologie = [];
    if(document.querySelector("#Animale:checked")) {
        tipologie.push("Animale")
    }
    if(document.querySelector("#Aggettivo:checked")) {
        tipologie.push("Aggettivo")
    }
    if(document.querySelector("#Numero:checked")) {
        tipologie.push("Numero")
    }
    if(document.querySelector("#Nome:checked")) {
        tipologie.push("Nome")
    }
    if(document.querySelector("#Verbo:checked")) {
        tipologie.push("Verbo")
    }
    if(document.querySelector("#Avverbio:checked")) {
        tipologie.push("Avverbio")
    }
    if(document.querySelector("#Fiore:checked")) {
        tipologie.push("Fiore")
    }
    if(document.querySelector("#Frutta:checked")) {
        tipologie.push("Frutta")
    }
    if(document.querySelector("#Dolce:checked")) {
        tipologie.push("Dolce")
    }
    if(document.querySelector("#Pietra:checked")) {
        tipologie.push("Pietra")
    }
    if(document.querySelector("#Emozione:checked")) {
        tipologie.push("Emozione")
    }
    if(document.querySelector("#Strumento:checked")) {
        tipologie.push("Strumento")
    }
    if(document.querySelector("#Speciali:checked")) {
        tipologie.push("Speciali")
    }

    while(tipologie.length>0) {
        let risultato = scegli(tipologie);
        switch (risultato) {
            case "Animale":
                componenti.push(UcFirst(scegli(animaleList)));
                break;
            case "Aggettivo":
                componenti.push(UcFirst(scegli(aggettivoList)));
                break;
            case "Pietra":
                componenti.push(UcFirst(scegli(pietraList)));
                break;
            case "Emozione":
                componenti.push(UcFirst(scegli(emozioneList)));
                break;  
            case "Avverbio":
                componenti.push(UcFirst(scegli(avverbioList)));
                break;    
            case "Nome":
                componenti.push(UcFirst(scegli(nomeList)));
                break;
            case "Fiore":
                componenti.push(UcFirst(scegli(fioreList)));
                break;
            case "Frutta":
                componenti.push(UcFirst(scegli(fruttaList)));
                break;
            case "Dolce":
                componenti.push(UcFirst(scegli(dolceList)));
                break;
            case "Numero":
                componenti.push(Math.floor(Math.random() * 98)+1);
                break;
            case "Strumento":
                componenti.push(UcFirst(scegli(strumentoList)));
                break;
            case "Verbo":
                let indiceSoggetto = tira(soggettoList.length);
                componenti.push(UcFirst(soggettoList[indiceSoggetto]));
                let verbo = scegli(verboList);
                if(indiceSoggetto>2) {
                    componenti.push(UcFirst(verbo[indiceSoggetto-1]));
                } else {
                    componenti.push(UcFirst(verbo[indiceSoggetto]));
                }
                break;
            case "Speciali":
                componenti.push(scegli(specialiList));
                break;
        }
        tipologie = rimuovi(tipologie, risultato);
    }
    return componenti.join("");
}

function isLetter(carattere) {
    switch (carattere.toLowerCase()) {
        case 'a':
        case 'b':
        case 'c':
        case 'd':
        case 'e':
        case 'f':
        case 'g':
        case 'h':
        case 'i':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
        case 'n':
        case 'o':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'u':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
        case 'à':
        case 'è':
        case 'é':
        case 'ì':
        case 'ò':
        case 'ù':
            return true;
            break;
        default:
            return false;
            break;
    }
}

function trasformaTxtToArray(testo) {
    // scorri finchè non c'è un carattere testuale, se no chiudi la parola
    // ritorna un array
    let risultato = [];
    let parola = [];

    for(let indice = 0; indice <= testo.length; indice++ ) {
        if(isLetter(testo.charAt(indice))) {
            parola.push(testo.charAt(indice));        
        } else {
            if(parola.length > 0) {
                risultato.push(parola.join(""));
                parola = [];
            }            
        }
    }
    return risultato;
}

function logArray(arr) {
    let risultato = "";
    for(let indice = 0; indice < arr.length; indice++ ) {
        risultato = risultato + '\"' + arr[indice] + '\", '; 
    }
    console.log(risultato);
}

// Se devo convertire delle stringhe in array - utilità
let testo1 = ``;
let testo2 = ``;

let tt = trasformaTxtToArray(testo1);
logArray(tt);

function get_action() {
    // creo le password
    document.querySelector("#pw0").innerHTML = makeUsername();
    document.querySelector("#pw1").innerHTML = makeUsername();
    document.querySelector("#pw2").innerHTML = makeUsername();
    document.querySelector("#pw3").innerHTML = makeUsername();
    document.querySelector("#pw4").innerHTML = makeUsername();
    document.querySelector("#pw5").innerHTML = makeUsername();
    document.querySelector("#pw6").innerHTML = makeUsername();
    document.querySelector("#pw7").innerHTML = makeUsername();
    document.querySelector("#pw8").innerHTML = makeUsername();
    document.querySelector("#pw9").innerHTML = makeUsername();
}

