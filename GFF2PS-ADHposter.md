---
layout: doc

---

# GFF2PS-ADHPoster

## The Challenge of Annotating a Complete Eukaryotic Genome

##### J.F. Abril,  G. Parra,  M. Burset,  S. Castellano,  E. Blanco,  R. Guigò

## Introduction

We are developing tools for schematic views of genomic sequences and annotation features. As genomic sequences accumulate, visualization tools are becoming essential to analyze and interpret sequence data. Our program makes it easier to compare different genomic structures. **gff2ps** works with single or multiple sequences and produces high-quality PostScript plots. Features such as gene structure, exon predictions, EST positions, and so on, are displayed at their corresponding positions with user-defined attributes.

The posters shown at the ISMB'99 meeting are an example of what can be done with this tool. Here you can find three examples of what can be generated from the same data-set by applying a slightly modified customization file and a few command-line options.

Basically, the following plots show the submitted genomic predictions on "*Drosophila melanogaster* ADH region annotation experiment ([GASP1](http://www.fruitfly.org/GASP1/))".

---

## Acknowledgments

We thank Martin Reese, Michael Ashburner, and the people working in the *Drosophila melanogaster* teams for giving us the opportunity to make the tutorial poster.

We also thank the organizers of ISMB'99 for allowing us to highlight our poster for the whole meeting.

---

## The Input Files

The sequence contig of 2.9Mb is reported in the [Adh paper in *Genetics*](http://www.fruitfly.org/about/pubs/ashburner99.html). The original GFF dataset can be downloaded from GASP1 data directories as [All.gff](http://www.fruitfly.org/GASP1/data/), which contains all the submissions in a single file.

I've split this file into separate files for each participating group in GASP1. I did this to easily check any issues that might arise in the datasets and to perform any appropriate changes (such as simplifying long group names to improve label visualization for groups that are closer). This trick also provides another advantage: by swapping filenames on the command-line, we can directly change source ordering on the plot while tuning the final plots

The following table reports how many GFF elements and Groups are defined for each submission, their total record number, and their distribution on each strand.

<!--@include: ./gff2ps-adhposter/table.md-->
<!--@include: ./gff2ps-adhposter/big-poster.md-->
<!--@include: ./gff2ps-adhposter/a4-pages.md-->
<!--@include: ./gff2ps-adhposter/virtual-posters.md-->
