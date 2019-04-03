const superheroes = {
    "files_location": "img\research-group",
    "lines": [{
            "line_number": "1",
            "photos": [{
                    "filename": "1",
                    "describe": "Spring 2015- Last week of classes"
                },
                {
                    "filename": "2",
                    "describe": "Fall 2013- Celebrating our feature in Carolina Public Health magazine"
                },
                {
                    "filename": "3",
                    "describe": "Fall 2011- Celebrating the end of the Fall 2011 semester"
                }
            ]
        },
        {
            "line_number": "2",
            "photos": [{
                    "filename": "4",
                    "describe": "Summer 2011- Group picture"
                },
                {
                    "filename": "5",
                    "describe": "Fall 2010- Setting out for Savannah, GA/ WQTC 2010 "
                },
                {
                    "filename": "6",
                    "describe": "August 2010- Visit from local congressman, David Price"
                }
            ]
        },
        {
            "line_number": "3",
            "photos": [{
                    "filename": "7",
                    "describe": "June 2009- 10 year reunion"
                },
                {
                    "filename": "8",
                    "describe": "August 2009- Dr. Weinberg at Bonnie's Gordon Conference poster"
                },
                {
                    "filename": "9",
                    "describe": "August 2009- Riley Flowers and Bonnie Lyon with GRC chair elect (2012) Manolis Kogevinas"
                }
            ]
        },
        {
            "line_number": "4",
            "photos": [{
                    "filename": "10",
                    "describe": "Summer 2008- being waited on for those who served so well"
                },
                {
                    "filename": "11",
                    "describe": "June 2008- Cavorting with \"collaborators\" at ACE"
                },
                {
                    "filename": "12",
                    "describe": "June 2008- Receiving (from an ENVR alumnus) best poster award in the Water Science & Research Division at ACE"
                }
            ]
        },
        {
            "line_number": "5",
            "photos": [{
                    "filename": "13",
                    "describe": "June 2008 - We were judged by 2 of the world's most prominent environmental engineers"
                },
                {
                    "filename": "14",
                    "describe": "March 2008- MIOX Research Team, Albuquerque"
                },
                {
                    "filename": "15",
                    "describe": "March 2008- Can he still be educated? Albuquerque"
                }
            ]
        },
        {
            "line_number": "6",
            "photos": [{
                    "filename": "16",
                    "describe": "Juanuary 2008 - Research group, farewell to Cynthia"
                },
                {
                    "filename": "17",
                    "describe": "2007- At the peak of our productivity studying fate and transport of biologically active chemicals"
                },
                {
                    "filename": "18",
                    "describe": "Gathering prior to WQTC"
                }
            ]
        },
        {
            "line_number": "7",
            "photos": [{
                    "filename": "19",
                    "describe": "March 2007- ACS Spring Meeting, Chicago"
                },
                {
                    "filename": "20",
                    "describe": "Postdocs entertained by future graduates."
                },
                {
                    "filename": "21",
                    "describe": "A major role of our TAs"
                }
            ]
        },
        {
            "line_number": "8",
            "photos": [{
                    "filename": "22",
                    "describe": "ENVR is one happy family!"
                },
                {
                    "filename": "23",
                    "describe": "2005 Gingerbread House Competition Winners"
                },
                {
                    "filename": "24",
                    "describe": "Well deserved awards for Vanessa Pereira"
                }
            ]
        },
        {
            "line_number": "8",
            "photos": [{
                    "filename": "25",
                    "describe": "Our most recent acquisition (LC/MS/MS)"
                },
                {
                    "filename": "26",
                    "describe": "2004- Research Group"
                },
                {
                    "filename": "27",
                    "describe": "2004- Cookout at Chez Weinberg"
                }
            ]
        },
        {
            "line_number": "9",
            "photos": [{
                    "filename": "28",
                    "describe": "2002- Grooup Cooking"
                },
                {
                    "filename": "29",
                    "describe": "2000- The Beginnings of international collaboration"
                },
                {
                    "filename": "30",
                    "describe": "1998- Emerging Research Group"
                }
            ]
        },
    ]
}

const img_folder = "img/research-group/";
const research_group = document.getElementById('research-group');

for (linenumber in superheroes.lines) {
    /*add new line for each 3 pictures, and give the new line CSS*/
    let newLine = document.createElement('div');
    newLine.className = "image-line";
    research_group.appendChild(newLine);
    
    for (images in superheroes['lines'][linenumber]['photos']) {
        /*for each line, add link containers for images
        links to large version on click*/
        let container = document.createElement('a');
        container.className = "rg-image-container";
        newLine.appendChild(container);
        //add the images to the image containers
        let container_image = document.createElement('img');
        let filename = superheroes['lines'][linenumber]['photos'][images]['filename'];
        container_image.src = img_folder + "jpg/" + filename + ".jpg";
        container.href = img_folder + "large/" + filename + ".jpg";
        container.target="_blank";
        container.appendChild(container_image);
        //add the description to the photo
        let container_describe = document.createElement('span');
        let describe = superheroes['lines'][linenumber]['photos'][images]['describe'];
        container_describe.innerHTML = describe;
        container.appendChild(container_describe);
    }
   
}