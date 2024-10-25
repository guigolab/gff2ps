---
layout: doc
---

# Snapshots

## Introduction

![Default_Page1.ps](/gff2ps_snapshots/Default_Page1.jpg)  
![Default_Page2.ps](/gff2ps_snapshots/Default_Page2.jpg)

GFF2PS makes many assumptions on how things have to be displayed.

To illustrate this, the plot on the left was generated without any configuration file, using only a few command-line options. One option forced two pages of output, another changed the page size to "A5" format, and the last defined a new title string.

Command-line was:

```
gff2ps -s a5 -P 2 -T "Default.ps" < GFF_sample.gff > Default.ps
```

At the top of the figures is the header area. From top to bottom: forward strand sources, middle area for features without a defined strand, and reverse strand sources. Source order is preserved in the forward section but inverted in the reverse section. In the middle area, two scoring vectors are shown as color gradients.

The next examples share the same [GFF file](/gff2ps_snapshots/GFF_sample.gff){download} with the current plot.

## Example 1

Here, we have set a user-defined page size (10.5x42cm) and many variables in the custom file [1bx1p_long.rc](/gff2ps_snapshots/1bx1p_long.rc){download}.

Only the forward strand (upper half) and reverse strand (lower half) are represented, and they are split by the scale rule. The track labeled "ANNOT" has been resized and shows all the feature start-end positions.

![1bx1p_long.ps](/gff2ps_snapshots/1bx1p_long.jpg)

## Example 2

![2bx1p.ps](/gff2ps_snapshots/2bx1p.jpg)

Default page size is "A4," as in this plot. We have switched off the reverse strand and no-strand areas, so only forward strand features are displayed.

You can see different shapes assigned in the [custom file](/gff2ps_snapshots/2bx1p.rc) to the features in the input GFF file. The program splits (by default) source tracks when there are overlapping groups within a given source (EXP and SCAN tracks).

## Example 3

![3bx1p.ps](/gff2ps_snapshots/3bx1p.jpg)

In this example, we forced the program not to split source tracks when overlapping groups were reported (see EXP and SCAN tracks and compare them with the previous figure). We [have changed](/gff2ps_snapshots/3bx1p.rc){download} many feature colors, including the color gradient for G+C tracks. You can easily set up to 67 predefined colors for almost all plot attributes.

## Example 4

![align_and_shapes.ps](/gff2ps_snapshots/align_and_shapes.jpg)

In this example, we defined one shape for each feature in the [GFF file](/gff2ps_snapshots/align_and_shapes.gff){download}, three different lines for the groups, and four different vertical alignments for source tracks on the forward strand (upper half) and reverse strand (lower half).

In the [Config file](/gff2ps_snapshots/align_and_shapes.rc){download}
, we used regular expressions to set group labels and group lines, and a `feature_color` variable definition in the source section to force all features in every source to be filled with the same color.

## ADH Poster

Click [here](/adh-poster) to access a complete example of how to make a poster. You can also see how to manage large amounts of GFF data to produce three different plot formats.
