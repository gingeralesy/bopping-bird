(in-package #:rad-user)
(define-module #:bazaart
  (:use #:cl #:radiance #:r-clip))
(in-package #:bazaart)

(define-page roller-page #@"/" (:lquery (template "index.html"))
  (setf lquery:*lquery-master-document*
        (plump:strip lquery:*lquery-master-document*)))

