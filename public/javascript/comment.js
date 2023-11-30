const newFormHandler = async (event) => {
    event.preventDefault();
  
    const blog_title = document.querySelector('#project-name').value.trim();
    const content = document.querySelector('#project-desc').value.trim();
  
    if (blog_title && content) {
      const response = await fetch(`/api/blog`, {
        method: 'POST',
        body: JSON.stringify({ blog_title, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
        alert('Created project');
      } else {
        alert('Failed to create project');
      }
    };
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/blog/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  
  document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.blogList')
    .addEventListener('click', delButtonHandler);
  

   