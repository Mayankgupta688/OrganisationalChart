google.charts.load('current', {packages:["orgchart"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = new google.visualization.DataTable();

  data.addColumn('string', 'Name');
  data.addColumn('string', 'Manager');
  data.addColumn('string', 'ToolTip');

  data.addRows([
    [
      {
        'v':'Full AG', 
        'f':`
          <div>
            <h3>Authority Group: Full AG</h3>
            <div style="color:red; font-style:italic">Group Rules: Group Rule</div>
            <div style="color:red; font-style:italic">Effective Date: October 06, 2019</div>
            <div style="color:red; font-style:italic">Purpose: Legal</div>
          <div>`
      }, '', 'The President'
    ], [
      {
        'v':'Buddy Guy', 
        'f':`
          <div>
            <h3>Person Name: Buddy Guy</h3>
            <div style="color:red; font-style:italic">First Name: Buddy</div>
            <div style="color:red; font-style:italic">Last Name: Guy</div>
            <div style="color:red; font-style:italic">Passport: PN102</div>
          <div>`
      }, 'Full AG', 'The President'
    ], [
      {
        'v':'Billy Holiday', 
        'f':`
          <div>
            <h3>Person Name: Billy Holiday</h3>
            <div style="color:red; font-style:italic">First Name: Billy</div>
            <div style="color:red; font-style:italic">Last Name: Holiday</div>
            <div style="color:red; font-style:italic">Passport: PN234</div>
          <div>`
      }, 'Full AG', 'The President'
    ], [
      {
        'v':'900298681', 
        'f':`
          <div>
            <h3>Account Details: 90029868</h3>
            <div style="color:red; font-style:italic">Financial Name: BNYMellon</div>
            <div style="color:red; font-style:italic">Owner: Blue Dog Capital Holdings Limited</div>
            <div style="color:red; font-style:italic">Location: Main Office</div>
          <div>`
      }, 'Buddy Guy', 'The President'
    ], [
        {
        'v':'900298681', 
        'f':`
          <div>
            <h3>Account Details: 90029868</h3>
            <div style="color:red; font-style:italic">Financial Name: BNYMellon</div>
            <div style="color:red; font-style:italic">Owner: Blue Dog Capital Holdings Limited</div>
            <div style="color:red; font-style:italic">Location: Main Office</div>
          <div>`
      }, 'Buddy Guy', 'The President'
    ], [
        {
          'v':'90091999', 
          'f':`
            <div>
              <h3>Account Details: 800043307</h3>
              <div style="color:red; font-style:italic">Financial Name: BNYMellon</div>
              <div style="color:red; font-style:italic">Owner: 	Blue Dog Corporation</div>
              <div style="color:red; font-style:italic">Location: Main Office</div>
            <div>`
        }, 'Buddy Guy', 'The President'
    ], [
      {
        'v':'90092966', 
        'f':`
          <div>
            <h3>Account Details: 90029868</h3>
            <div style="color:red; font-style:italic">Financial Name: BNYMellon</div>
            <div style="color:red; font-style:italic">Owner: Blue Dog Capital Holdings Limited</div>
            <div style="color:red; font-style:italic">Location: Main Office</div>
          <div>`
      }, 'Billy Holiday', 'The President'
    ], [
      {
        'v':'800043307', 
        'f':`
          <div>
            <h3>Account Details: 800043307</h3>
            <div style="color:red; font-style:italic">Financial Name: BNYMellon</div>
            <div style="color:red; font-style:italic">Owner: 	Blue Dog Corporation</div>
            <div style="color:red; font-style:italic">Location: Main Office</div>
          <div>`
      }, 'Billy Holiday', 'The President'
    ], [
      {
        'v':'900009310', 
        'f':`
          <div>
            <h3>Account Details: 900009310</h3>
            <div style="color:red; font-style:italic">Financial Name: Citibank</div>
            <div style="color:red; font-style:italic">Owner: 	Blue Dog Corporation</div>
            <div style="color:red; font-style:italic">Location: Main Office</div>
          <div>`
      }, 'Billy Holiday', 'The President'
    ], [
      {
        'v':'MayankGupta', 
        'f':`
          <div>
            <h3>Account Owner: Mayank Gupta</h3>
            <div style="color:red; font-style:italic">Financial Name: Citibank</div>
            <div style="color:red; font-style:italic">Cash Owner: Thomas Cashman</div>
            <div style="color:red; font-style:italic">Location: Green Cat - Power</div>
          <div>`
      }, '800043307', 'The President'
    ], [
      {
        'v':'BlueDogCapitalHoldingsLimited', 
        'f':`
          <div>
            <h3>Account Owner: Blue Dog Capital Holdings Limited</h3>
            <div style="color:red; font-style:italic">Financial Name: Citibank</div>
            <div style="color:red; font-style:italic">Cash Owner: Mayank Cashman</div>
            <div style="color:red; font-style:italic">Business Unit: Green Cat - Oil</div>
          <div>`
      }, '800043307', 'The President'
    ]
  ]);

  var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));

  chart.draw(data, {'allowHtml':true});

}