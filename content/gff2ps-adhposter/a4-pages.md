
## Putting All Stuff Into A4 Pages

![ISMB1999_a4.ps](/gff2ps_ADHposter/ISMB1999_a4.11.jpg)
![ISMB1999_a4.ps](/gff2ps_ADHposter/ISMB1999_a4.12.jpg)
![ISMB1999_a4.ps](/gff2ps_ADHposter/ISMB1999_a4.13.jpg)
![ISMB1999_a4.ps](/gff2ps_ADHposter/ISMB1999_a4.14.jpg)
![ISMB1999_a4.ps](/gff2ps_ADHposter/ISMB1999_a4.15.jpg)


*The previous five figures are only the first five pages of a total of thirty pages.*

[Postscript file](/gff2ps_ADHposter/ISMB1999_a4.ps.gz){download}


Not everyone has access to a large-format printer to obtain a hard copy of the B0-size pages, but A4 is a common sheet format. The issue is one of scale: although gff2ps can fit the 3Mb into a single A4 page, the plot becomes too hard to visualize. What solution can we find? We have two options: fit one vertical block into a number of horizontal pages as done in this section, or split such a block into many vertical and horizontal pages as done in the following section. In this case, we have limited the display to only 100Kb per page.

The bash command-line was:

```bash
$BIN/gff2ps -VC ISMB_a4.rc -B 1 -N 100000 -s a4 -- \
    Adh.std1.gff Adh.std3.gff \
    Birney.GeneWise.gff Borodovsky.GeneMarkHMM.gff Gaasterland.MAGPIE.gff \
    Gaasterland.MAGPIE_exon.gff Guigo.GeneID.gff Henikoff.BLOCKS.gff \
    Krogh.HMMGene.gff Mural.GRAIL.gff Reese.Genie.gff Reese.GenieEST.gff \
    Reese.GenieESTHOM.gff Solovyev.FGenesCGG1.gff Solovyev.FGenesCGG2.gff \
    Solovyev.FGenesCGG3.gff Gaasterland.MAGPIE_Promoter.gff Ohler.LME_IMC.gff \
    Ohler.LME_SSM.gff Reese.GeniePROM.gff Werner.CoreInspectorTSS.gff \
    Adh.Fourier.gff Benson.TandemRepeatFinder.gff Gaasterland.MAGPIE_Calypso.gff \
    Adh.GCcontent.gff > ISMB1999_a4.ps 2> ISMB1999_a4.rpt
```
[Custom-file](/gff2ps_ADHposter/ISMB_a4.rc){download}
