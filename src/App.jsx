import JsxParser from "react-jsx-parser"
import './App.css'


function App() {
  let name = 'a';
  const data = {
    section: {
      // content: <h4 className="_design_service_header_top_box_title">{name}</h4>,
      title: 'Service we provide',
      subtitle: 'Mix match our tools plan that fits',
      description: 'Improve your daily UX work and create wireframes, diagrams, prototypes and handoff documentation with drag &amp; drop fully scalable components.'
    },
    blogs: [
      {
        title: 'Mobile auto layout',
        subtitle: 'We have auto mobile layout that help you faster UI and wireframe design.',
        link: '#'
      },
      {
        title: 'Mobile auto layout 2',
        subtitle: 'We have auto mobile layout that help you faster UI and wireframe design. 2',
        link: '#'
      },
      {
        title: 'Mobile auto layout 3',
        subtitle: 'We have auto mobile layout that help you faster UI and wireframe design. 3',
        link: '#'
      }
    ]
  }

  const sections = [
    {
      id: "1",
      api: 'api/blogs/all',
      block: `<section className="_design_service_wrapper">
      <div className="_design_service_wrap">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="_design_service_header_top_content">
                <div className="_design_service_header_top_box">
                  <h4 className="_design_service_header_top_box_title">{data.section.title}</h4>
                </div>
                <h2 className="_design_service_header_top_content_title">{data.section.subtitle}</h2>
                <p className="_design_service_header_top_content_para">{data.section.description}</p>
              </div>
            </div>
          </div>
          <div className="_design_service_bottom_wrap">
            <div className="row justify-content-center">
            {data.blogs.map((blog) => (
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="_design_service_bottom_inner">
                      <div className="_design_service_bottom_inner_box _service_inner_box">
                      </div>
                      <h4 className="_design_service_bottom_inner_title">{blog.title}</h4>
                      <p className="_design_service_bottom_inner_para">{blog.subtitle}</p>
                    </div>
                  </div>
              )
            )}
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </section>`
    },
    {
      block: `<section className="_design_service_wrapper">
      <div className="_design_service_wrap">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="_design_service_header_top_content">
                <div className="_design_service_header_top_box">
                  <h4 className="_design_service_header_top_box_title">{data.section.title} section 2</h4>
                </div>
                <h2 className="_design_service_header_top_content_title">{data.section.subtitle}</h2>
                <p className="_design_service_header_top_content_para">{data.section.description}</p>
              </div>
            </div>
          </div>
          <div className="_design_service_bottom_wrap">
            <div className="row justify-content-center">
            {data.blogs.map((blog) => (
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="_design_service_bottom_inner">
                      <div className="_design_service_bottom_inner_box _service_inner_box">
                      </div>
                      <h4 className="_design_service_bottom_inner_title">{blog.title}</h4>
                      <p className="_design_service_bottom_inner_para">{blog.subtitle}</p>
                    </div>
                  </div>
              )
            )}
            </div>
          </div>
        </div>
      </div>
    </section>`
    },
  ]

  return (
    <div className="body">
      {sections.map((v) => (
        <JsxParser bindings={{ data }} jsx={v.block} />
      ))}
      {/* <!--Service Section End--> */}
    </div>

  )
}

export default App



// {/* <InnerHTML html={html} /> */ }