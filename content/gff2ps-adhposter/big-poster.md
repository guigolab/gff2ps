
## The Big Poster

*Josep, Moisés and the ISMB'99 Adh Poster.*

The nearby 3Mb from *Drosophila* Adh region was split into three b0-size pages (100x145cm), each page containing 1Mb. There are four blocks with 250Kb each. We have three areas on each block: the upper area is for forward predictions, the lower area for reverse ones, and in the middle, we have the vectors as color gradients and the predictions on tandem repeats (Group C predictions). Training sets, named std1 and std3, are the most external tracks, followed by the gene-feature predictions (Group A) and the promoters and TSS (Group B).

The bash command-line was:

```bash
$BIN/gff2ps -VC ISMB_b0.rc -p -B 4 -P 3 -s b0 -- \
    Adh.std1.gff Adh.std3.gff \
    Birney.GeneWise.gff Borodovsky.GeneMarkHMM.gff Gaasterland.MAGPIE.gff \
    Gaasterland.MAGPIE_exon.gff Guigo.GeneID.gff Henikoff.BLOCKS.gff \
    Krogh.HMMGene.gff Mural.GRAIL.gff Reese.Genie.gff Reese.GenieEST.gff \
    Reese.GenieESTHOM.gff Solovyev.FGenesCGG1.gff Solovyev.FGenesCGG2.gff \
    Solovyev.FGenesCGG3.gff Gaasterland.MAGPIE_Promoter.gff Ohler.LME_IMC.gff \
    Ohler.LME_SSM.gff Reese.GeniePROM.gff Werner.CoreInspectorTSS.gff \
    Adh.Fourier.gff Benson.TandemRepeatFinder.gff Gaasterland.MAGPIE_Calypso.gff \
    Adh.GCcontent.gff > ISMB1999_b0.ps 2> ISMB1999_b0.rpt
```

[Custom-file !](/gff2ps_ADHposter/ISMB_b0.rc){download}  