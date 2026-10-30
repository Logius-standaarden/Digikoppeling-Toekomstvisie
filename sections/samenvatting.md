In de Notitie Toelichting Toekomstvisie Digikoppeling (zie bijlage) wordt voorgesteld om:
1.	De scope van Digikoppeling uit te breiden van “alleen Overheid naar Overheid” naar zowel “Overheid naar Overheid” als “Overheid naar Bedrijfsleven”
2.	Open Data via Digikoppeling uit te wisselen wanneer het gaat om bedrijfsprocessen waar hoge eisen wordt gesteld aan betrouwbaarheid en transparantie van verwerking;
3.	Digikoppeling te zien als een gereedschapskist van (koppelvlak)standaarden waarbij standaarden worden opgenomen die voor een bepaalde toepassing en architectuur het meest geschikt zijn
4.	De geformuleerde regels voor Lifecycle management (LCM) van de (koppelvlak)standaarden te volgen
5.	Wat betreft Lifecycle management (LCM): <BR>
a.	De standaard ebMS2 de status “uit te faseren” te geven <BR>
b.	De standaard ebMS3/AS4 (eDelivery) in te voeren <BR>

### Argumenten
Hieronder worden per voorstel uit de toekomstvisie beknopt aangegeven wat de argumenten hiervoor zijn, een uitgebreide beschrijving van de toekomstvisie vindt u in de bijlage;

1.1	_Voor de gegevensuitwisseling “Overheid naar Bedrijfsleven” zijn nu nog geen standaarden voorgeschreven._
Door dit wel binnen scope van Digikoppeling te plaatsen wordt de toepassing van de Digikoppeling standaard eenduidiger en wordt het bedrijfsleven een (meer) uniform mechanisme voor gegevensuitwisseling met de overheid geboden;

2.1 _Door Digikoppeling ook voor Open Data te gebruiken kan betrouwbaarheid en verantwoording worden gerealiseerd._ Dit heeft vooral voordeel als er kritische besluiten worden genomen op
     basis van de open data en het belangrijk is dat bij problemen nagegaan kan worden wie 
     afzender en ontvanger was van bepaalde gegevens.
     
3.1 _Door Digikoppeling als gereedschapskist van standaarden te zien kan voldoende ondersteuning worden geboden voor de verschillende vraagstukken en architecturen die een rol spelen in het domein Gegevensuitwisseling;_
     Uitgangspunt is dat Digikoppeling voldoende functionaliteit biedt, maar ook bewaakt dat 
     opgenomen standaarden specifieke waarde hebben binnen het domein en daarbij dat
     overlap in functionaliteit zoveel mogelijk wordt voorkomen.
     
4.1  _Op dit moment zijn de regels voor life-cycle-management (LCM) niet geformaliseerd._
     Het vastleggen en volgen van de regels voor LCM zorgt ervoor dat de standaard actueel kan  
     worden gehouden en dit biedt ook ruimte voor innovatie en vernieuwing
     
5a.1 _De internationale standaard ebMS2 wordt niet langer doorontwikkeld en kent een teruglopende ondersteuning in de markt._ De standaard is hierdoor niet langer een geschikt bouwblok voor nieuwe ontwikkelingen en systemen, door de status “uit te faseren” aan te geven kan dit ook duidelijk aan de gebruikers van Digikoppeling worden aangegeven. (NB gebruik van de standaard in huidige systemen blijft mogelijk conform de termijn afspraken die gemaakt gaan worden hierover)

5b.1 _ebMS3/AS4 (eDelivery) is een standaard die ook in de EU als bouwblok wordt aangeboden en is voor specifieke use cases een geschikte opvolger van ebMS2._ 
ebMS3/AS4 (eDelivery) biedt net als ebMS2 bepaalde functionaliteiten in het protocol voor asynchroon berichtenverkeer en voor gegarandeerde aflevering van berichten wat voor bepaalde use cases specifiek gewenste functionaliteit is;

5b.2 _ebMS3/AS4 (eDelivery) is een volwassen standaard met uitgebreide ondersteuning ook vanuit de EU._ De EU biedt o.a. open source componenten, compliance tooling en documentatie aan, voordeel is dat we in NL hiervan gebruik kunnen maken en deze niet zelf hoeven te ontwikkelen of onderhouden;

5b.3 _ebMS3/AS4 (eDelivery) biedt functionaliteit “out-of-the-box” die in REST-API standaarden niet gestandaardiseerd zijn._ ebMS3/AS4 (eDelivery) is daarmee een geschikte uitbreiding voor Digikoppeling. <BR> 
__Kanttekening__ <BR>
NB in eerdere discussies is ook het “REST-API only” scenario besproken waarbij de ontbrekende functionaliteiten in REST-API context nog zouden kunnen worden toegevoegd; 
Hoewel zeker niet onmogelijk, zijn kosten en tijdsduur voordat een betrouwbare gelijkwaardige standaard op deze manier beschikbaar komt onbekend. 
Het heeft daarom de voorkeur om het kant en klare bouwblok ebMS3/AS4 (eDelivery) ter beschikking te hebben binnen Digikoppeling voor kritische gegevensstromen waar de specifieke functionaliteit van ebMS3/AS4 namelijk asynchroon verkeer en betrouwbare aflevering een rol speelt. 
(Bij het uitfaseren van ebMS2 kan per geval gekeken worden of voor de specifieke use case het huidige REST-API koppelvlak gebruikt kan worden – of dat ebMS3/AS4 het best gebruikt kan worden.)