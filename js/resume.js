(function () {
    var app = angular.module('resume', []);

    app.controller('employmentCtrl', function () {
        this.jobs = jobs;
    });

    app.controller('educationCtrl', function () {
        this.degrees = degrees;
    });
    
    app.controller('experienceCtrl', function () {
        this.experiences = experiences;
        
        /*
        this.getNumber = function(num) {
            var myNum = num;
            return new Array(myNum);
        };
        
        this.getStar = function(index,rating) {
            var diff = rating - index;
            if (diff > 0.5) {
                return 'star';
            } else if (diff == 0.5) {
                return 'star_half';
            } else {
                return 'star_border';
            }
        };
        
        this.getProgress = function(rating) {
            return (rating / 5) * 100;   
        };
        
        
        $scope.getNumberWhole = function(num) {
            var myNum = Math.floor(num);
            return new Array(myNum);
        };
        $scope.getNumberRemaining = function(num) {
            var myNum = Math.ceil(num) - Math.floor(num);
            return new Array(myNum);
        };
        $scope.getNumberLeft = function(num) {
            var myNum = 5 - Math.ceil(num);
            return new Array(myNum);
        };
        */
    });
    
    app.controller('contactCtrl', function() {
        this.infos = infos;
    });

    app.controller('workCtrl', function() {
        this.works = works;
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
    
    var degrees = [
        { school: 'University of Houston',
            logo: 'asset/image/uh-logo.png',
            url: 'http://www.uh.edu/',
            title_short: 'B.B.A.',
            title: 'Bachelor of Business Administration',
            grad_date: '2010-05-01',
            gpa: 3.75,
            majors: [
                'Supply Chain Management',
            ],
            minors: [
                'Management of Information Systems',    
            ],
            honors: [
                '2009 Summer Undergraduate Research Fellowship',
                'Golden Key International Honour Society',
                'Delta Iota Chapter of Phi Beta Delta, Honor Society for International Scholars',
            ],
        },
    ];
    
    var experiences = [
        { type: 'Application',
            icon: 'devices',
            skills:[
                { name: 'Microsoft Excel',
                    logo: 'excel-logo.png',
                    rating: 9,
                },
                { name: 'Microsoft Access',
                    logo: 'access-logo.png',
                    rating: 7,
                },
                { name: 'TIBCO Spotfire',
                    logo: 'spotfire-logo.jpg',
                    rating: 8,
                },
                { name: 'Tableau',
                    logo: 'tableau-logo.png',
                    rating: 6,
                },
            ],
        },
        { type: 'Coding',
            icon: 'code',
            skills:[
                { name: 'Microsoft Office VBA',
                    rating: 8,
                },
                { name: 'Python',
                    rating: 5,
                },
                { name: 'SQL',
                    rating: 7,
                },
                { name: 'R',
                    rating: 4,
                },
                { name: 'HTML / CSS',
                    rating: 7,
                },
                { name: 'JavaScript / jQuery / AJAX',
                    rating: 6,
                },
                { name: 'XML',
                    rating: 7,
                },
            ],
        },
        { type: 'Languages',
            icon: 'translate',
            skills:[
                { name: 'English',
                    rating: 7,
                },
                { name: 'Vietnamese',
                    rating: 9,
                },
            ],
        },
    ];
    
    var infos = [
        { type: 'Blog',
            icon: 'globe',
            text: 'Nemo\'s Blog',
            url: 'http://tainguyen.me/blog/',
            target: '_blank',
        },
        { type: 'LinkedIn',
            icon: 'linkedin',
            text: 'LinkedIn',
            url: 'http://www.linkedin.com/pub/tai-nguyen/a/8b0/319/',
            target: '_blank',
        },

        { type: 'G+',
            icon: 'google-plus',
            text: 'Google+',
            url: 'https://plus.google.com/+TaiNguyen206',
            target: '_blank',
        },

        { type: 'pdf',
            icon: 'file-text',
            text: 'Resume (pdf)',
            url: 'https://drive.google.com/file/d/0ByewrnTBi0mFRGxUU05JdHRNT2s/view?usp=sharing',
            target: '_blank',
        },
        { type: 'Email',
            icon: 'envelope',
            text: 'Email',
            url: 'mailto:nemo@tainguyen.me',
            target: '_self',
        },
    ];
    
    var works = [
        { name: 'Well Analysis',
            icon: 'blur_on',
            samples: [
                'wm-nawat-01.png',
                'wm-nawat-03.png',
                'wm-nawat-04.png',
                'wm-nawat-05.png',
            ],
        },
        { name: 'M & A',
            icon: 'trending_up',
            samples: [
                'wm-ma-01.png',
                'wm-ma-02.png',
                'wm-ma-03.png',
                'wm-ma-04.png',
                'wm-ma-05.png',
            ],
        },
        { name: 'Others',
            icon: 'view_comfy',
            samples: [
                'wm-naps-01.png',
                'wm-naps-02.png',
                'wm-cms-01.png',
                'wm-cms-02.png',
                'wm-ewt-01.png',
                'wm-ewt-02.png',
                'wm-ewt-03.png',
            ],
        },
    ];
})();