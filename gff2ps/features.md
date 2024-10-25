## Features

The following list shows many features of `gff2ps`:

- Comprehensive plots for any GFF-feature, attributes are defined separately so you can modify only attributes for the same file or share the same customization among different data-sets.
- All parameters are set by default within the program, but you can also define a default custom file with all your global settings and an extra custom file for small (or big) changes in one plot.
- User-defined custom files can handle regular expressions, allowing you to set the same variable-attribute for multiple GFF-features.
- The program is defined as a Unix filter, so it can handle data from files, redirections, and pipes, writing output to standard output and warnings to standard error.
- Source order is taken from input files. If you swap file or source order, you can visualize tracks with the new input arrangement.
- `gff2ps` generates hierarchical plots. The higher level is strand-based, splitting page blocks into multiple horizontal regions as strands appear in your files [(+) forward, (-) reverse, (.) no frame]. Then, source and sequence plot tracks are drawn, followed by groups and lower-level GFF-elements.
- Overlapping groups/elements can be displayed in multiple lines to avoid overlap among all elements.
- The score controls the feature width attribute. When not defined (i.e., `.` in GFF-record), the maximum value for its source is assumed to visualize it.
- Features for which frame is specified are plotted using a two-color code schema. The upstream half represents the frame of the feature, and the downstream half represents the complement modulus three of its remainder. This helps check frame consistency between adjacent features (e.g., predicted exons). Two adjacent features are frame-compatible when the downstream half of the upstream feature matches the upstream half of the downstream feature. This two-color code schema is meaningful only when the frame is defined relative to the feature, not the sequence.
- `gff2ps` supports many physical page formats (from A0 to A10, and more—see the manual for available page sizes), including user-defined formats. This allows the generation of poster-sized genomic maps or the use of a continuous-paper supporting plotting device, either in portrait or landscape. Multiple horizontal and/or vertical pagination is also possible.
