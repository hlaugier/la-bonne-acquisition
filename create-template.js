(function(){
  const htmlArea = () => document.getElementById('html-code');
  const frame = () => document.getElementById('preview-frame');

  function baseHtml(content){
    return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>
      body{font-family:Arial,Helvetica,sans-serif;background:#ffffff;color:#222;margin:0}
      .email{max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e5e5e5}
      .header{background:#000091;color:#fff;padding:16px 20px;font-weight:700}
      .content{padding:20px;line-height:1.5}
      .cta{display:inline-block;background:#000091;color:#fff;text-decoration:none;border-radius:4px;padding:10px 16px;margin-top:12px}
      .footer{padding:16px 20px;color:#666;font-size:12px;border-top:1px solid #eee}
    </style></head><body>${content}</body></html>`;
  }

  function generateFromInputs(){
    const audience = document.getElementById('audience-input').value.trim() || 'Votre audience cible';
    const goal = document.getElementById('goal-input').value.trim() || "Dépôt d'offres";
    const description = document.getElementById('description-input').value.trim() || 'Description de la campagne.';

    const content = `
      <div class="email">
        <div class="header">La Bonne Acquisition</div>
        <div class="content">
          <h1 style="margin-top:0">${goal}</h1>
          <p>Bonjour,</p>
          <p>Cette campagne s'adresse à <strong>${audience}</strong>.</p>
          <p>${description}</p>
          <a class="cta" href="#">Découvrir l'offre</a>
        </div>
        <div class="footer">Vous recevez cet email dans le cadre de nos campagnes d'information.</div>
      </div>`;

    return baseHtml(content);
  }

  function render(html){
    const f = frame();
    if(!f) return;
    f.srcdoc = html;
  }

  function init(){
    const initial = generateFromInputs();
    htmlArea().value = initial;
    render(initial);

    document.getElementById('generate-btn').addEventListener('click',()=>{
      const html = generateFromInputs();
      htmlArea().value = html;
      render(html);
    });

    htmlArea().addEventListener('input', (e)=>{
      render(e.target.value);
    });
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
