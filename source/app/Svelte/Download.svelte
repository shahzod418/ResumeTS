<script>
  import { onMount } from 'svelte';
  import Html2Pdf from 'html2pdf.js';
  import Resume from './Resume.svelte';

  onMount(() => {
    const options = {
      margin: [0, 0, 10, 5],
      filename: `Davlatov_CV.pdf`,
      html2canvas: {
        scale: 2,
        logging: false,
        dpi: 192,
        letterRendering: true,
      },
      pageBreaks: {
        mode: ['css', 'legacy'],
        before: ['*'],
        after: ['*'],
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    const source = document.querySelector('#download-resume');

    const exporter = new Html2Pdf(source, options);

    exporter.then((pdf) => {
      pdf.save();
    });
  });
</script>

<Resume />
