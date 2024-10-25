## Making "Virtual" Posters

![ISMB1999_a4_VP.ps](/gff2ps_ADHposter/ISMB1999_a4_VP.11.jpg)
![ISMB1999_a4_VP.ps](/gff2ps_ADHposter/ISMB1999_a4_VP.12.jpg)
![ISMB1999_a4_VP.ps](/gff2ps_ADHposter/ISMB1999_a4_VP.13.jpg)
![ISMB1999_a4_VP.ps](/gff2ps_ADHposter/ISMB1999_a4_VP.14.jpg)
![ISMB1999_a4_VP.ps](/gff2ps_ADHposter/ISMB1999_a4_VP.15.jpg)

*The previous five figures are only the five vertical pages for the first horizontal page of a total of thirty by five pages.*

[Postscript file](/gff2ps_ADHposter/ISMB1999_a4_VP.ps.gz){download}


If you don't have access to a large-format printer, you can still glue together the 150 pages that compose this poster version to create a "virtual" page-size poster. In this case, the config file was set to represent each source with the minimum number of tracks/lines necessary to fit all its elements and avoid overlapping groups.

The bash command-line was:

```bash
$BIN/gff2ps -VC ISMB_a4_VP.rc -B 0 -N 100000 -s a4 -- \
    Adh.std1.gff Adh.std3.gff \
    Birney.GeneWise.gff Borodovsky.GeneMarkHMM.gff Gaasterland.MAGPIE.gff \
    Gaasterland.MAGPIE_exon.gff Guigo.GeneID.gff Henikoff.BLOCKS.gff \
    Krogh.HMMGene.gff Mural.GRAIL.gff Reese.Genie.gff Reese.GenieEST.gff \
    Reese.GenieESTHOM.gff Solovyev.FGenesCGG1.gff Solovyev.FGenesCGG2.gff \
    Solovyev.FGenesCGG3.gff Gaasterland.MAGPIE_Promoter.gff Ohler.LME_IMC.gff \
    Ohler.LME_SSM.gff Reese.GeniePROM.gff Werner.CoreInspectorTSS.gff \
    Adh.Fourier.gff Benson.TandemRepeatFinder.gff Gaasterland.MAGPIE_Calypso.gff \
    Adh.GCcontent.gff > ISMB1999_a4_VP.ps 2> ISMB1999_a4_VP.rpt
```

[Custom-file](/gff2ps_ADHposter/ISMB_a4_VP.rc){download}
