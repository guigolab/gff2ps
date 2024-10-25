## Download 

Download the latest versions of the [user's manual](gff2ps_manual/MANUAL_GFF2PS.ps.gz) and the [`gff2ps` program](/gff2ps_v0.98l.gz){download} (v0.98l). You must replace the paths for `bash` and `gawk` in the script to match those on your system as shown in the following lines:

```bash
#!/your/bin/dir/bash
GAWK="/your/bin/dir/gawk";
```

Due to the intensive usage of associative arrays by our program, we recommend using GNU awk version greater than 3.0. Also, ensure that you have the Bourne shell in `/bin/sh`, though we recommend using `bash`, version 2 or greater.

The newest versions of the program and the manual are updated separately and provided as gziped files.

Once you have downloaded the files, you can extract them with the following commands, depending on the file extension:

| File Extension | Extraction Command |
| -------------- | ------------------ |
| `*.gz`         | `gunzip *.gz`      |
| `*.tar.gz`     | `gunzip -c *.tar.gz '\|' tar xvf - On Linux: tar zxvf *.tar.gz` |

