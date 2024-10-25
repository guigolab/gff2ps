<template>
    <div class="flex-wrapper">
        <div style="margin-right: 5px;" class="btn-wrapper">
            <a href="/gff2ps_manual/MANUAL_GFF2PS.ps.gz" download>
                <VPButton text="Download Manual" />
            </a>
        </div>
        <div class="btn-wrapper">
            <a href="/gff2ps_v0.98l.gz" download>
                <VPButton text="Download Software" />
            </a>
        </div>
    </div>
</template>
<script setup>
import { VPButton } from 'vitepress/theme';

</script>
<style scoped>
.flex-wrapper {
    display: flex;
    flex-wrap: wrap;
}

.btn-wrapper {
    padding-top: 10px;
    padding-bottom: 10px
}
</style>