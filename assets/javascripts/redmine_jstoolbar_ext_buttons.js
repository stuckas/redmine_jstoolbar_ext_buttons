(function () {
  if(typeof RedmineWikiToolbarExt === 'undefined') return false;

  var buttons = [
    // Horizontal Rule
    {
      title: 'Horizontal Rule', after: 'h3',
      fn: { wiki: function () {
        this.encloseLineSelection('\n---\n', '', function (str) {
          if (str.length > 0) str += '\n';
          return str;
        });
      }}
    },
  
    // Collapse
    {
      title: 'Collapse', after: 'unbq',
      fn: { wiki: function () {
        this.encloseLineSelection('{{collapse(View details...)\n', '\n}}')
      }}
    },
  
    // Checkbox
    {
      title: 'Checkbox', after: 'ol',
      fn: { wiki: function () {
        this.encloseLineSelection('☐ ', '')
      }}
    }
  ];

  // logic to rotate the checkbox chars
  $(document).ready(function(){
    $('#content').on('click', 'div.jstEditor textarea.wiki-edit', function(event){
      var textarea = event.currentTarget;
      
      // Get current position
		  const pos = textarea.selectionStart;
		  const text = textarea.val();
			var n = null;

		  // rotate the checkbox chars
		  if (text[pos] == '☐') {
				n = '✅';
			} else if (text[pos] == '✅') {
				n = '❌';
		  } else if (text[pos] == '❌') {
				n = '☐';
			}

      if (n != null) {
        textarea.value = text.slice(0, pos) + n + text.slice(pos+1);;
        // reset cursor
        textarea.selectionStart = pos+2;
        textarea.selectionEnd = pos+2;
      }
    });
  });

  /**
   * Draw to page
   */
  RedmineWikiToolbarExt.ToolbarElements.add(buttons);
}());
