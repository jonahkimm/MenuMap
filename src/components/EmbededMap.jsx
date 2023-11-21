import React from "react";

const EmbededMap = () => {
    return (
        <div className="fixed h-screen w-9/10 bg-slate-900 top-0 right-0 overflow-auto">
            <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41646.18734426711!2d-122.94150173802508!3d49.27854389051801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548679bea89f7649%3A0xf786f07f77763dc4!2sTim%20Hortons!5e0!3m2!1sen!2sca!4v1700532989113!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen></iframe>
        </div >
    )
}

export default EmbededMap