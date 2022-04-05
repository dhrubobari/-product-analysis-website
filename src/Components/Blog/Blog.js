import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 style={{marginTop: '50px'}}>What is Context API</h2>
            <p style={{backgroundColor: 'ghostwhite', padding: '10px'}}>React Context API is a way to essentially create global<br>
            </br>variables that can be passed around in a React app.<br>
            </br>This is the alternative to "prop drilling", or passing props from<br>
            </br>grandparent to parent to child, and so on.<br>
            </br>Context is often touted as a simpler, lighter solution to<br>
            </br>using Redux for state management.</p>
            <h2 style={{marginTop: '50px'}}>What is Semantic Tag</h2>
            <p style={{backgroundColor: 'ghostwhite', padding: '10px'}}>Semantic Tag elements are those that clearly describe their<br>
            </br>meaning in a human and machine-readable way.  For example,<br>
            </br>In HTML, the h1 element is a semantic element,<br>
            </br>which gives the text it wraps around the role of<br>
            </br>"a top level heading on your page."</p>
        </div>
    );
};

export default Blog;