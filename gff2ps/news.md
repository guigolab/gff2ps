## News

| Date | Version | Updates |
| ---- | ------- | ------- |
| 27 May 2003 | [v0.98](GFF2PS.html#DOWNLOADING) | Minor changes (upgrading to v0.98d): <br> - A bug when setting zoom area from the command-line has been fixed. Thanks to [Massimo Vergassola](mailto:massimo@ias.edu). <br> - Rainbow fill for shapes now depends on feature scores, creating a color gradient (violet-blue-cyan-green-yellow-orange-red, from low to high scores). <br> - PostScript variables defining offsets for axes coordinates have been made global. |
| 08 Nov 2002 | v0.98 | Minor changes (upgrading to v0.98c): <br> - Custom file "zoom" option is no longer overridden by command-line zoom. <br> - Sorting overlapping features for PS layers has been reviewed. |
| 04 Oct 2002 | v0.98 | `gff2ps` was used in the visualization of the malaria mosquito genome annotation, appearing in *[Science](GFF2PS.html#HumanGenomePaper)*. The visualization included 278Mbp of data across five chromosome arms (2L, 2R, 3L, 3R, and X), covering approximately 14,000 genes, SNP density, gene expression data, and more. |
| 17 Jul 2002 | v0.98 | Minor changes (upgrading to v0.98b): <br> - Fixed a margin error in landscape mode for PS files. <br> - Group color filling function was corrected for proper group shape color handling in the PS code. |
| 04 Jul 2002 | v0.98 | `v0.98` has been released with a few small fixes. Thanks to [Gengxin Chen](mailto:cheng@cshl.edu) for pointing out a regular expression issue that affected some systems. <br> `gff2ps` was used in the *[Nature](http://www.nature.com/cgi-taf/DynaPage.taf?file=/nature/journal/v418/n6893/abs/nature00847_fs.html)* paper describing the sequence and analysis of chromosome 2 of *Dictyostelium discoideum*. |
| 25 Sep 2001 | v0.97 | Two how-to documents have been released for `gff2ps`. `v0.97b` is now available, but the newest features are not yet documented. |
| 16 Feb 2001 | v0.97 | `gff2ps` was used to plot the Human Genome annotation appearing in *[Science](GFF2PS.html#HumanGenomePaper)*. The total sequence length was 2.90Gb across 24 chromosomes (22 autosomal, X, and Y). `v0.97` will be available soon. |
| 24 Mar 2000 | v0.94 | `gff2ps` was used to plot the *Drosophila melanogaster* whole genome annotation, appearing in *[Science](GFF2PS.html#SCIENCEpaper)*. The sequence spanned 120Mb across six chromosome arms. |
| 25 Jan 2000 | v0.94 | New feature to fit drawings in full-width source tracks or split width between drawings and labels. <br> Fixed a tickmark scale issue for small nucleotide ranges. <br> Source labels can now be disabled individually. |
| 17 Jan 2000 | v0.94 | Fixed a bug related to input filename checking. <br> Addressed a function counter error affecting vertical pagination. |
| 10 Jan 2000 | v0.94 | The `gff2ps` web server is now available at Institut Pasteur. <br> Fixed an old variable issue causing warnings. |
| 05 Jan 2000 | v0.94 | Fixed a bug with multiple sequences/sources sorting. <br> The complete "User's Manual" now accompanies the program. |
| 03 Jan 2000 | v0.93 | Official announcement of the first fully operative version of `gff2ps`. <br> Fixed a bug affecting overlapping groups distribution. <br> Adjusted page layout for vertical pagination. <br> Improved standard error reporting. |
| 23 Dec 1999 | v0.92 | Finalized the web pages for the program (main page, examples, and ISMB'99 page). <br> Integrated the GNUawk script into the main shell script. <br> Added support for input from standard input and improved timing in error reports. |
| 27 Sep 1999 | v0.91 | Added two main pagination functions: fit all source tracks on one page or split tracks into multiple vertical pages. <br> Defined PostScript header and prolog variables within the GNUawk script. <br> First draft of the "User's Manual". |
| 03 Aug 1999 | v0.90 | This version was used to produce the [ADH poster](GFF2PS.html#ADHposter) for the ISMB'99 meeting. <br> The program consists of two scripts: Shell (`gff2ps`) and GNUawk (`gff2ps.awk`). <br> Environment variables were set for the script directory, default custom file, and path for custom files. |

---
