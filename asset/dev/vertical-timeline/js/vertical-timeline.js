(function () {
    var app = angular.module('resume', []);
    
    app.controller('employmentCtrl', function() {
        this.jobs = jobs;
    });
    
    var jobs = [
        { company: 'Wood Mackenzie',
            logo: 'asset/image/woodmac-logo.png',
            url: 'http://www.woodmac.com/',
            location: 'Houston, TX',
            title: 'Data Analyst - Visualization',
            start_date: '2014-09-01',
            end_date: 'Present',
            descriptions: [
                { heading: 'Building data visualization tools for clients:',
                    details: [
                        'Using Spotfire platforms to bring Wood Mackenzie proprietary data to life and provide users ability to analyze and search for trends, patterns and insights.',
                        'Collaborating with various research teams to gather requirements and exchange ideas.',
                        'Helping data analysts building database and queries for data tools.',
                        'Using advanced features of Spotfire to build complex and dynamic client-ready visualization tools (related tables, custom expressions, property controls, information links, data-on-demand, TERR…)',
                        ],
                },
            ],
        },
        { company: 'Wood Mackenzie',
            logo: 'asset/image/woodmac-logo.png',
            url: 'http://www.woodmac.com/',
            location: 'Houston, TX',
            title: 'Data Analyst',
            start_date: '2012-10-29',
            end_date: '2014-09-15',
            descriptions: [
                { heading: 'Created Spotfire analysis to visualize data for internal and external use:',
                    details: [
                        'North America Company Play Analysis; Well Data Tool and various internal tools.',
                        'Provided analysts with quick and easy to access to databases via Spotfire web player.',
                        'Worked with large datasets contain of millions of records from multiple data sources.',
                        ],
                },
                { heading: 'Managed and checked data integrity for Lower 48 (US) and Gulf of Mexico region.',
                },
                { heading: 'Created and implemented various tools to automate and streamline research work-flow:',
                    details: [
                        'VB scripts to collect, cleanse and quality-check data.',
                        'Macros to generate files and upload data to various databases.',
                        ],
                },
            ],
        },
        { company: 'DHL Global Forwarding',
            logo: 'asset/image/dgf-logo.png',
            url: 'http://www.dpdhl.com/en/about_us/corporate_divisions/global_forwarding_freight.html',
            location: 'Humble, TX',
            title: 'Analyst',
            start_date: '2011-05-01',
            end_date: '2012-10-26',
            descriptions: [
                { heading: 'Designed and generated reports to monitor KPIs and improve productivity and communication with customers.',
                },
                { heading: 'Designed and maintained web-based system (including database, web pages and reports) to monitor work-flow and improve efficiency.',
                },
                { heading: 'Evaluated and improved operational procedures through automated solutions.',

                },
            ],
        },
        { company: 'University Center',
            logo: 'asset/image/uh-logo.png',
            url: 'http://www.uh.edu/studentcenters/',
            location: 'Houston, TX',
            title: 'Tech Assistant',
            start_date: '2009-10-01',
            end_date: '2010-05-14',
            descriptions: [
                { heading: 'Worked in the UCAF Web Team to maintain ten separate websites.',
                },
                { heading: 'Designed and maintained web-based system (including database, web pages and reports) to monitor work-flow and improve efficiency.',
                },
            ],
        },
        { company: 'College of Education',
            logo: 'asset/image/uh-logo.png',
            url: 'http://www.coe.uh.edu/',
            location: 'Houston, TX',
            title: 'Research Assistant',
            start_date: '2009-06-01',
            end_date: '2009-08-31',
            descriptions: [
                { heading: 'Conducted a study of the effectiveness of ProVision program, a special middle school for African American males.',
                },
                { heading: 'Collected and analyzed data of more than 300 students.',
                },
            ],
        },
    ];
    
})();