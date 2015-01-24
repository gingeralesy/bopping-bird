(in-package #:rad-user)
(define-module #:my-radiance
  (:use #:cl #:radiance #:r-clip))
(in-package #:my-radiance)

(define-page roller-page #@"/roller" (:lquery (template "roller.html"))
  (setf lquery:*lquery-master-document*
        (plump:strip lquery:*lquery-master-document*)))

