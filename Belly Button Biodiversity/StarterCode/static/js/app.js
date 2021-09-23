// IMPORTANT 
// Reminder: You cannot load local .json through html file. It has to be on 
// a server for some reason. Go to console, cd to hw folder,
// type "$ python -m http.server", then go to http://localhost:8000/
// to load the .json file

// Everything runs within the json function so that all functions have 
// access to the data within samples.json
d3.json("samples.json").then(function(data){
    console.log(data);
    dataset = data;
    samples = dataset.samples;
    console.log(samples)

    // Get initial dataset, probably from the first ID in the list, so ID = "940"
    var initID = samples[0].id;
    var initSampleValues = Object.values(samples[0].sample_values);
    var initOtuID = Object.values(samples[0].otu_ids);
    let initOtuID2 = initOtuID.map(function(id){
        return `OTU ${id}`
    })
    console.log(initOtuID)
    var initOtuLabels = samples[0].otu_labels


    // Assign initial dataset as default data to all charts
    function init(){

        
        // Sort sample values, then use index to sort the
        // id column
        initSamp10 = initSampleValues.sort(function(a,b){
            return b - a;
        })

        initOtuID10 = initOtuID2.sort(function(a,b){
            return initSamp10.indexOf(a) - initSamp10.indexOf(b);
        })

        // Slice arrays to use only first 10 values.

        initSamp10 = initSampleValues.slice(0,10);
        initOtuID10 = initOtuID2.slice(0,10);

        var data2 = [{
            x: initSamp10,
            y: initOtuID10,
            type: "bar",
            orientation: 'h',
        }];

        var layout = {
            height: 600,
            width: 800,
            xaxis:{
                categoryorder: "category ascending"
            }
        };

        Plotly.newPlot("bar", data2, layout);

        console.log(data2);
    }







    init();
})





// Assign initial dataset as default data to all charts
// function init(){
//     var data2 = [{
//         id = initID,
//         sample = initSample,
//         otuID = initOtuID,
//         labels = initOtuLabels,
//     }];

//     var layout = {
//         height: 600,
//         width: 800
//     };

//     updatePlotly.newPlot("bar", data2, layout);
// }


// To Do: Select dropdown, listen for change; once there is a change, 
// call getData function
// d3.selectAll("#selDataset").on("change", getData);

// function getData(){
//     // Get whatever was entered into textbox/dropdown menu
//     // Then filter dataset to find ID = whatever was entered
//     // Filter is day 2, activity 4 + 5

//     // Sort data; this is day 2, activity 7 and 8

//     // Update chart
// }

// Initialize charts
// init();