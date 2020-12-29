quelle = new Array(8);
for(i=0; i<=8; i++)
{quelle[i] = new Array(2);quelle[i][1] = new Boolean(false);}
quelle[0][0]="img/mem_friend.gif";
quelle[1][0]="img/mem_spiegel.gif";
quelle[2][0]="img/mem_masch.gif";
quelle[3][0]="img/mem_persp.gif";
quelle[4][0]="img/mem_home.gif";
quelle[5][0]="img/passreihe.gif";
quelle[6][0]="img/gelb.gif";
quelle[7][0]="img/orange.gif";

bild = new Array(16);

var bildnr=0;
var schritte=0;
var voriges=-1;
var treffer=0;

function zufallordnung()
{
treffer=0; document.forms[0].treffer.value=treffer;
schritte=0;  document.forms[0].schritte.value=schritte;
for(i=0; i<=15; i++) bild[i]=-1;
for(i=0; i<=7; i++) quelle[i][1]=false;
for(k=0; k<=1; k++)
  for(i=0; i<=7; i++)
    {
    bildnr=Math.floor(Math.random()*16);
    if (bild[bildnr]!=-1)
      {bildnr=0;
       while(bild[bildnr]!=-1 && bildnr<=15) bildnr++;}
    bild[bildnr]=i;
    }
allezu();
}

function allezu()
{
for(i=0; i<=15; i++)
  if(quelle[bild[i]][1]==false) document.images[i].src="img/blau.gif";
}

function aufdecken()
{
for(i=0; i<=15; i++)
  document.images[i].src=quelle[bild[i]][0];
}

function anzeigen(bildnr)
{
if (voriges!=bildnr)
  {
  if (voriges<0)
    {
    schritte++; document.forms[0].schritte.value=schritte;
    allezu();
    voriges=bildnr;
    }
  else
    {
    if (bild[bildnr]==bild[voriges])
      {treffer++; document.forms[0].treffer.value=treffer;
      quelle[bild[bildnr]][1]=true;}
    voriges=-1;
    }
  document.images[bildnr].src=quelle[bild[bildnr]][0];
  }
}
